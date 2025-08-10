# 🛒 Liste de Courses Interactive

## 🎯 Objectifs pédagogiques

Ce projet a pour but de mettre en pratique :
- Le développement en **JavaScript**
- La gestion des **événements**
- L’utilisation d’**AJAX** pour échanger des données avec une API

---

## 📋 Description

Une application web simple et dynamique permettant à un utilisateur de gérer sa liste de courses.  
Elle intègre des fonctionnalités d’ajout, suppression, recherche en temps réel, vidage de liste et traduction automatique via l’API **MyMemory**.

---

## 🖼 Structure de la page (HTML)

- 📝 Un **champ texte** pour saisir un article
- ➕ Un **bouton "Ajouter"**
- 🔍 Un **champ de recherche** pour filtrer les articles
- 📋 Une **liste non ordonnée** (`<ul>`) affichant les articles
- 🗑 Un **bouton "Vider la liste"**
- 🌍 Une **zone de traduction** affichant l’équivalent de l’article dans une autre langue

---

## ⚙️ Fonctionnalités

### Partie 1 – Ajout et suppression
- Cliquer sur **"Ajouter"** :
  - Récupère le texte du champ de saisie
  - Ajoute un nouvel élément `<li>` dans la liste
  - Chaque élément contient un bouton ❌ pour le supprimer
- Aucun ajout si le champ est vide

### Partie 2 – Recherche dynamique
- Champ de recherche pour filtrer les articles existants
- Mise à jour **en temps réel**
- Recherche **insensible à la casse**

### Partie 3 – Vider la liste
- Supprime **tous les éléments** affichés
- Réinitialise la zone de recherche

### Partie 4 – AJAX
- À chaque ajout :
  - Envoi d’une requête AJAX avec **jQuery** vers l’API **MyMemory**
  - Affichage de la traduction sous la liste (`<p>`)

---

## 🛠 Contraintes techniques

- **Aucun rechargement de page**
- **Code structuré et commenté**
- **2 fichiers minimum** :
  - `index.html`
  - `script.js`

---

## 📂 Structure du projet

