# 📋 Guide : Soumettre sitemap.xml à Google Search Console

## Étapes Détaillées

### 1. Créer un Compte Google Search Console
1. Allez sur : https://search.google.com/search-console
2. Connectez-vous avec votre compte Google
3. Cliquez sur "Ajouter une propriété"

### 2. Vérifier Votre Site
**Option A : Vérification DNS** (Recommandé si vous avez un domaine personnalisé)
- Ajoutez un enregistrement TXT DNS fourni par Google
- Attendez la vérification (quelques minutes)

**Option B : Balise HTML** (Plus simple pour commencer)
- Copiez la balise meta fournie par Google
- Ajoutez-la dans `/app/frontend/public/index.html` dans le `<head>`
- Exemple : `<meta name="google-site-verification" content="YOUR_CODE" />`
- Cliquez sur "Vérifier"

### 3. Soumettre le Sitemap
Une fois vérifié :
1. Dans la barre latérale, cliquez sur "Sitemaps"
2. Dans le champ "Ajouter un sitemap", entrez : `sitemap.xml`
3. Cliquez sur "Envoyer"

**Votre sitemap URL sera** : 
```
https://votre-domaine.com/sitemap.xml
```

### 4. Monitoring
- Google va indexer vos pages (24-48h)
- Vous verrez les statistiques dans "Performances"
- Vérifiez la "Couverture" pour voir les pages indexées

---

## Alternative : Bing Webmaster Tools

1. Allez sur : https://www.bing.com/webmasters
2. Connectez-vous
3. Ajoutez votre site
4. Soumettez sitemap.xml de la même manière

**Astuce** : Si vous vérifiez sur Google, vous pouvez importer automatiquement dans Bing !

---

## ✅ Checklist Post-Soumission

- [ ] Sitemap soumis à Google Search Console
- [ ] Sitemap soumis à Bing Webmaster Tools  
- [ ] Vérifier indexation après 48h
- [ ] Monitorer "Performances" dans GSC
- [ ] Vérifier les erreurs d'exploration
- [ ] Soumettre URL de la page d'accueil manuellement pour indexation rapide

---

**Délai d'indexation** : 2-7 jours pour apparaître dans les résultats Google
