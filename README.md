# KEPY - Suivi des ventes simple et instantané

## À propos du projet

KEPY est une application web MVP (Minimum Viable Product) pour le suivi des ventes. Elle est conçue pour être simple, moderne et responsive. Elle permet aux vendeurs de saisir facilement leurs ventes et de consulter leurs performances, tandis que les managers bénéficient d'une vue d'ensemble consolidée.

Ce projet est construit sans aucun outil de build (pas de Webpack, Vite, etc.), en utilisant du HTML, Tailwind CSS (via CDN), et React (via CDN) pour une simplicité maximale de déploiement.

## Stack Technique

*   **Structure**: HTML5
*   **Style**: Tailwind CSS (via CDN)
*   **Interactivité**: React 18 (via CDN UMD) & TypeScript
*   **Hébergement**: Conçu pour un déploiement facile sur GitHub Pages ou Vercel.

## Configuration Requise

Avant de déployer, vous devez remplacer les valeurs par défaut dans le fichier `constants.ts` par vos propres URLs.

### 1. Google Form (Saisie des ventes)

1.  Créez un Google Form avec un champ de type "Réponse courte" pour l'identifiant du vendeur (`vendorId`).
2.  Cliquez sur le menu "..." en haut à droite, puis sur "Obtenir le lien prérempli".
3.  Remplissez le champ `vendorId` avec une valeur test (ex: `TEST1234`).
4.  Cliquez sur "Obtenir le lien" et copiez-le.
5.  Le lien ressemblera à : `https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.123456789=TEST1234`
6.  Mettez à jour `constants.ts`:
    *   `GOOGLE_FORM_URL_BASE`: La partie du lien avant `?usp=...` (ex: `https://docs.google.com/forms/d/e/.../viewform`).
    *   `GOOGLE_FORM_VENDOR_ID_PARAM`: L'identifiant du champ (ex: `entry.123456789`).

### 2. Looker Studio (Tableaux de bord)

*   **`LOOKER_CONSOLIDATED_URL`**: Copiez simplement l'URL de partage de votre rapport Looker Studio pour la vue manager consolidée.
*   **`LOOKER_VENDOR_BASE_URL`**:
    1.  Dans votre rapport Looker, créez un paramètre au niveau du rapport (ex: nommez-le `vendorId`).
    2.  Utilisez ce paramètre pour filtrer les données affichées dans les graphiques destinés aux vendeurs.
    3.  Copiez l'URL de la page du rapport qui utilise ce filtre.

### 3. Autres URLs

*   **`DEMO_CONTACT_FORM_URL`**: L'URL de votre formulaire de contact (ex: un autre Google Form).
*   **`GOOGLE_SHEET_URL`**: Le lien de partage de votre Google Sheet consolidé. Utilisez le lien `/preview` pour une meilleure compatibilité.

---

## Déploiement

Voici deux méthodes simples pour mettre votre site en ligne gratuitement.

### Méthode 1 : Déployer avec GitHub Pages (Simple et rapide)

GitHub Pages est idéal pour héberger des sites statiques directement depuis votre dépôt GitHub.

1.  **Créez un dépôt GitHub** : Créez un nouveau dépôt sur GitHub (ex: `kepy-website`).
2.  **Poussez votre code** : Ajoutez tous les fichiers du projet (`index.html`, `manager.html`, `components/`, etc.) à ce dépôt et poussez-les.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/VOTRE_NOM/kepy-website.git
    git push -u origin main
    ```
3.  **Activez GitHub Pages** :
    *   Dans votre dépôt GitHub, allez dans `Settings` > `Pages`.
    *   Dans la section `Build and deployment`, sous `Source`, sélectionnez `Deploy from a branch`.
    *   Choisissez la branche `main` et le dossier `/ (root)`.
    *   Cliquez sur `Save`.
4.  **Attendez quelques minutes** : Votre site sera déployé à une URL comme `https://VOTRE_NOM.github.io/kepy-website/`.

### Méthode 2 : Déployer avec Vercel (Puissant et flexible)

Vercel offre un déploiement ultra-rapide et des fonctionnalités avancées.

1.  **Poussez votre code sur GitHub** : Assurez-vous que votre projet est sur un dépôt GitHub (voir étape 1 et 2 ci-dessus).
2.  **Créez un compte Vercel** : Inscrivez-vous sur [Vercel](https://vercel.com/) avec votre compte GitHub.
3.  **Importez votre projet** :
    *   Depuis votre tableau de bord Vercel, cliquez sur `Add New...` > `Project`.
    *   Cliquez sur `Import` à côté de votre dépôt GitHub (`kepy-website`).
4.  **Configurez le déploiement** :
    *   Vercel détectera qu'il s'agit d'un site statique. Les réglages par défaut devraient fonctionner car il n'y a pas d'étape de "build".
    *   Le `Framework Preset` doit être `Other`.
    *   Les champs `Build Command` et `Output Directory` peuvent être laissés vides.
5.  **Déployez** : Cliquez sur le bouton `Deploy`.
6.  **C'est en ligne !** : Vercel vous donnera une URL unique pour votre projet déployé.

## Personnalisation

*   **Textes** : Modifiez directement le contenu dans les fichiers de composants React (ex: `components/Hero.tsx`).
*   **Couleurs et polices** : Ajustez les valeurs dans le bloc `<script>` de configuration Tailwind dans les fichiers `index.html` et `manager.html`.
