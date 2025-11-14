
# KEPY Notes - Utilitaires

## Commandes GIT utiles

Cloner le projet
```bash
git clone https://github.com/nellytchiengue/kepy_beta.git
```

Voir les branches existantes
```bash
git branch
```

Créer une nouvelle branche 'dev' et basculer dessus
```bash
git checkout -b dev
```

Pousser la nouvelle branche 'dev' sur le dépôt distant (origin)
```bash
git push -u origin dev
```

(Optionnel) Si vous n'êtes pas sur la branche dev
```bash
git checkout dev
```

Ajoutez et commitez vos derniers changements sur la branche dev
```bash
git add .
git commit -m "Description de vos modifications"
```

Passer sur la branche main
```bash
git checkout main
```

Récupérez les dernières modifications de la branche main distante pour éviter les conflits.
```bash
git pull origin main
```

Fusionnez (merge) les changements de dev dans main.
```bash
git merge dev
```

Poussez (push) la branche main mise à jour vers GitHub.
```bash
git push origin main
```
