# Guide de Développement Local - KEPY

Ce document explique comment lancer le site web KEPY sur votre machine locale pour le développement et la prévisualisation des modifications.

## Prérequis

Avant de commencer, assurez-vous que [Node.js](https://nodejs.org/) est installé sur votre ordinateur. L'installation de Node.js inclut `npm` (Node Package Manager), qui est nécessaire pour gérer les dépendances du projet.

## Étapes pour lancer le site

Suivez ces étapes dans votre terminal.

### 1. Naviguer vers le dossier du projet

Ouvrez votre terminal et utilisez la commande `cd` (change directory) pour vous positionner à la racine du projet `kepy_beta`.

```bash
# Remplacez ce chemin par le chemin réel sur votre machine si différent
cd /Users/nellytchiengue/Documents/kepy/kepy_beta
```

### 2. Installer les dépendances

Si c'est la première fois que vous lancez le projet, ou si le fichier `package.json` a été mis à jour, vous devez installer les bibliothèques nécessaires.

```bash
npm install
```

Cette commande lit le fichier `package.json` et télécharge toutes les dépendances (comme React et Vite) dans un dossier `node_modules`.

### 3. Lancer le serveur de développement

Une fois les dépendances installées, lancez le serveur de développement avec la commande suivante :

```bash
npm run dev
```

Le terminal affichera alors un message indiquant que le serveur est prêt, avec une URL locale :

```
  ➜  Local:   http://localhost:5173/
```

### 4. Visualiser le site

Ouvrez votre navigateur web (Chrome, Firefox, etc.) et rendez-vous à l'adresse **`http://localhost:5173`**. Votre site devrait s'y afficher.

Grâce à Vite, toute modification que vous enregistrerez dans les fichiers du projet (par exemple `index.html` ou `index.tsx`) provoquera une mise à jour automatique de la page dans votre navigateur.

---

**Pour arrêter le serveur**, retournez à la fenêtre de votre terminal et appuyez sur `Ctrl + C`.
