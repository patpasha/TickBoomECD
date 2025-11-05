# 🔒 Audit de Sécurité - TickBoom Landing Page

**Date**: 2025-11-02  
**Application**: TickBoom Landing Page (Production)  
**Statut Global**: ⚠️ MOYEN-ÉLEVÉ (Nécessite corrections critiques)

---

## 🚨 FAILLES CRITIQUES (À CORRIGER IMMÉDIATEMENT)

### 1. **ENDPOINTS ADMIN NON PROTÉGÉS** - CRITIQUE ⚠️

**Fichier**: `/app/backend/routes/waitlist.py`

**Problème**:
- `/api/waitlist/all` - Expose TOUS les emails de la liste (ligne 92-121)
- `/api/waitlist/export-csv` - Permet d'exporter toute la base d'emails (ligne 124-165)
- **Aucune authentification requise** - N'importe qui peut accéder

**Impact**:
- ✅ Vol de données personnelles (emails)
- ✅ Violation RGPD/CCPA
- ✅ Spam potentiel des utilisateurs
- ✅ Fuite d'informations business (nombre d'abonnés)

**Solution Requise**:
```python
# Option A: Ajouter authentication JWT
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Depends

security = HTTPBearer()

async def verify_admin_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    # Vérifier le token JWT
    if not verify_token(token):
        raise HTTPException(status_code=401, detail="Invalid token")
    return True

@router.get("/all")
@limiter.limit("5/minute")
async def get_all_subscribers(request: Request, admin: bool = Depends(verify_admin_token)):
    # ... code existant
```

**OU Option B (Plus simple)**: Supprimer complètement ces endpoints si non utilisés

---

### 2. **CSP (Content Security Policy) TROP PERMISSIF** - HAUTE ⚠️

**Fichier**: `/app/backend/security.py` (ligne 52-60)

**Problème**:
```python
"script-src 'self' 'unsafe-inline' 'unsafe-eval'; "  # ❌ DANGEREUX
```
- `'unsafe-inline'` permet les scripts inline (vulnérable XSS)
- `'unsafe-eval'` permet `eval()` (injection de code)

**Impact**:
- Vulnérabilité XSS (Cross-Site Scripting)
- Injection de code malveillant

**Solution**:
```python
# Plus restrictif
"script-src 'self' https://unpkg.com https://d2adkz2s9zrlge.cloudfront.net; "
"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "  # unsafe-inline OK pour CSS
```

---

### 3. **CORS_ORIGINS="*" DANS .ENV** - HAUTE ⚠️

**Fichier**: `/app/backend/.env` (ligne 3)

**Problème**:
```
CORS_ORIGINS="*"  # ❌ Accepte requêtes de N'IMPORTE QUEL domaine
```

**Impact**:
- CSRF (Cross-Site Request Forgery)
- N'importe quel site peut appeler votre API
- Bypass de la protection CORS configurée dans server.py

**Solution**:
```bash
# Supprimer ou commenter cette ligne
# CORS_ORIGINS="*"

# OU spécifier domaines précis
CORS_ORIGINS="https://cyber-countdown.emergentagent.com,https://tickboom.app"
```

---

### 4. **ABSENCE DE LOGGING DES ACTIONS SENSIBLES** - MOYENNE ⚠️

**Problème**:
- Pas de logs pour les tentatives d'accès aux endpoints admin
- Pas de logs pour les rate limit dépassés
- Pas d'audit trail

**Impact**:
- Impossible de détecter une attaque en cours
- Pas de traçabilité pour investigation post-incident

**Solution**:
```python
# Dans routes/waitlist.py
@router.get("/all")
async def get_all_subscribers(request: Request):
    # Ajouter logging
    logger.warning(f"Admin endpoint /all accessed from IP: {request.client.host}")
    # ... reste du code
```

---

## ⚠️ FAILLES MOYENNES (À CORRIGER)

### 5. **RATE LIMITING INSUFFISANT SUR CERTAINS ENDPOINTS**

**Problème**:
- `/api/waitlist/count` : 10/minute (OK mais peut être réduit)
- Endpoint `/api/status` : Aucun rate limiting

**Solution**:
```python
@api_router.get("/status", response_model=List[StatusCheck])
@limiter.limit("10/minute")  # Ajouter
async def get_status_checks(request: Request):  # Ajouter Request
    # ...
```

---

### 6. **VALIDATION EMAIL INSUFFISANTE**

**Fichier**: `/app/backend/security.py` (ligne 26-30)

**Problème**:
- Blocage de seulement 4 domaines de spam
- Liste facilement contournable

**Solution**:
```python
# Utiliser une liste plus complète
spam_domains = [
    'tempmail.com', 'throwaway.email', 'mailinator.com', 
    '10minutemail.com', 'guerrillamail.com', 'maildrop.cc',
    'trashmail.com', 'yopmail.com', 'temp-mail.org',
    'fakeinbox.com', 'sharklasers.com'
]
```

**OU utiliser un service de validation**: 
- ZeroBounce, NeverBounce, EmailVerifyAPI

---

### 7. **SANITIZATION NON UTILISÉE**

**Problème**:
- Fonction `sanitize_input()` définie mais jamais appelée
- Les emails ne passent pas par cette fonction

**Solution**:
```python
# Dans waitlist.py
email = sanitize_input(data.email.lower().strip(), max_length=254)
```

---

### 8. **MONGODB SANS AUTHENTIFICATION (LOCALHOST)**

**Fichier**: `/app/backend/.env`

**Problème**:
```
MONGO_URL="mongodb://localhost:27017"  # Pas de user/password
```

**Impact**:
- Si MongoDB est exposé, accès direct sans auth
- En production, DOIT avoir authentification

**Solution**:
```bash
# Production
MONGO_URL="mongodb://username:password@mongo-host:27017/dbname?authSource=admin"

# Avec MongoDB Atlas (recommandé)
MONGO_URL="mongodb+srv://user:pass@cluster.mongodb.net/dbname"
```

---

### 9. **ERREURS VERBALES EXPOSENT STRUCTURE**

**Fichier**: `/app/backend/routes/waitlist.py` (ligne 66-71)

**Problème**:
```python
except Exception as e:
    logger.error(f"Error subscribing to waitlist: {str(e)}")  # ❌ Log l'erreur
    raise HTTPException(
        detail="Failed to subscribe to waitlist"  # ✅ Message générique
    )
```

**Bon**: Message générique à l'utilisateur  
**Risque**: Si logs accessibles, révèle structure DB

**Solution**: S'assurer que les logs ne sont accessibles qu'aux admins

---

## ✅ POINTS FORTS (Bien Implémentés)

1. ✅ **Rate Limiting** sur endpoints critiques
2. ✅ **Security Headers** (HSTS, X-Frame-Options, etc.)
3. ✅ **Validation d'email** stricte avec regex
4. ✅ **Normalisation d'email** (lowercase, trim)
5. ✅ **Gestion duplicates** (409 Conflict)
6. ✅ **CORS configuré** avec regex pour domaines Emergent
7. ✅ **Pas de secrets hardcodés** dans le code
8. ✅ **Variables d'environnement** utilisées correctement
9. ✅ **Dépendances à jour** (pas de CVE majeurs détectés)
10. ✅ **Frontend** n'expose pas de secrets

---

## 📋 CHECKLIST DE CORRECTION

### CRITIQUE (À faire maintenant)
- [ ] **Protéger `/api/waitlist/all` avec authentification OU le supprimer**
- [ ] **Protéger `/api/waitlist/export-csv` avec authentification OU le supprimer**
- [ ] **Supprimer `CORS_ORIGINS="*"` du .env**
- [ ] **Restreindre CSP**: Retirer `'unsafe-inline'` et `'unsafe-eval'`

### HAUTE PRIORITÉ (Cette semaine)
- [ ] Ajouter authentification MongoDB avec user/password
- [ ] Implémenter logging des accès admin
- [ ] Tester rate limiting en conditions réelles

### MOYENNE PRIORITÉ (Ce mois)
- [ ] Étendre liste de domaines spam bloqués
- [ ] Ajouter monitoring/alertes (ex: Sentry)
- [ ] Implémenter CAPTCHA si spam détecté
- [ ] Audit des logs régulier

### OPTIONNEL (Amélioration continue)
- [ ] Mettre en place WAF (Web Application Firewall)
- [ ] Scanner régulier des dépendances (Dependabot)
- [ ] Tests de pénétration professionnels
- [ ] Chiffrement at-rest MongoDB

---

## 🔧 SCRIPTS DE CORRECTION

### 1. Protection des endpoints admin (solution rapide)

**Fichier**: `/app/backend/routes/waitlist.py`

```python
# Ajouter en haut du fichier
ADMIN_API_KEY = os.environ.get('ADMIN_API_KEY', 'CHANGE_ME_IN_PRODUCTION')

def verify_admin_key(api_key: str = Header(None)):
    if api_key != ADMIN_API_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return True

# Modifier les endpoints
@router.get("/all")
@limiter.limit("5/minute")
async def get_all_subscribers(
    request: Request, 
    authorized: bool = Depends(verify_admin_key)
):
    # ... code existant
```

### 2. Fix CSP

**Fichier**: `/app/backend/security.py`

```python
response.headers["Content-Security-Policy"] = (
    "default-src 'self'; "
    "script-src 'self' https://unpkg.com https://d2adkz2s9zrlge.cloudfront.net; "
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
    "font-src 'self' https://fonts.gstatic.com; "
    "img-src 'self' data: https:; "
    "connect-src 'self' https://cyber-countdown.emergentagent.com; "
    "frame-ancestors 'none';"
)
```

### 3. Fix CORS

**Fichier**: `/app/backend/.env`

```bash
# Supprimer
# CORS_ORIGINS="*"

# Ajouter dans server.py si besoin de custom origins
# Lire depuis ALLOWED_ORIGINS env var qui est déjà géré
```

---

## 📊 SCORE DE SÉCURITÉ

| Catégorie | Score | Notes |
|-----------|-------|-------|
| Authentication | ⚠️ 3/10 | Endpoints admin non protégés |
| Authorization | ⚠️ 2/10 | Aucune vérification de rôles |
| Input Validation | ✅ 8/10 | Bonne validation email |
| Output Encoding | ✅ 9/10 | Pas d'injection détectée |
| CORS/CSP | ⚠️ 5/10 | CORS=* dans env, CSP permissif |
| Rate Limiting | ✅ 8/10 | Bien implémenté |
| Logging | ⚠️ 4/10 | Manque logs sécurité |
| Error Handling | ✅ 7/10 | Messages génériques OK |
| Dependency Security | ✅ 9/10 | Dépendances à jour |

**SCORE GLOBAL: 6.1/10** - MOYEN

---

## 🎯 RECOMMANDATIONS PAR ORDRE DE PRIORITÉ

1. **Immédiat**: Protéger ou supprimer endpoints `/all` et `/export-csv`
2. **Aujourd'hui**: Retirer `CORS_ORIGINS="*"` du .env
3. **Cette semaine**: Ajouter authentification MongoDB
4. **Ce mois**: Implémenter monitoring et alertes

---

## 📞 RESSOURCES UTILES

- OWASP Top 10: https://owasp.org/Top10/
- FastAPI Security: https://fastapi.tiangolo.com/tutorial/security/
- MongoDB Security Checklist: https://docs.mongodb.com/manual/security/

---

**Généré le**: 2025-11-02  
**Prochaine révision recommandée**: Dans 3 mois ou après corrections majeures
