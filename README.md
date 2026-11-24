# Mon Pokédex

Un petit site web qui affiche des Pokémon, construit avec **Vue 3** et les données de la [PokéAPI](https://pokeapi.co).
À la fin de la semaine, il sera en ligne sur GitHub Pages, avec ton nom dessus.

## Ce que tu vas apprendre
- Comment une page web est construite avec des **composants**
- Comment un site **récupère des données** sur Internet (une API)
- Comment on **versionne** son code avec Git et GitHub
- Comment on **met un site en ligne**

## Démarrer

Il faut avoir [Node.js](https://nodejs.org) installé.

```bash
npm install      # télécharge les outils (une seule fois)
npm run dev      # lance le site en local
```

Ouvre l'adresse affichée (en général http://localhost:5173).
Modifie un fichier dans `src/` et enregistre : **la page se met à jour toute seule**.

## Où est quoi ?

| Fichier | Rôle |
|---|---|
| `src/App.vue` | La page principale (c'est là qu'on travaille) |
| `src/components/PokemonCard.vue` | Une carte Pokémon |
| `src/style.css` | Les couleurs et la mise en forme |
| `src/router.js` | La liste des pages du site (une ligne par page) |
| `src/Layout.vue` | Le menu en haut, présent sur toutes les pages |
| `src/pages/` | Les pages de la chasse aux bugs |
| `src/bugs/` | Les exercices de la chasse aux bugs |
| `index.html` | Le point d'entrée (on y touche rarement) |

## Les paliers

Les consignes détaillées de chaque palier sont dans [PALIERS.md](PALIERS.md) (aperçu Markdown dans VS Code : clic droit, *Open Preview*).
Les commentaires `PALIER` de `src/App.vue` disent la même chose.

- [ ] **Palier 0** : changer le titre, les couleurs, le nombre de Pokémon (aucun JavaScript)
- [ ] **Palier 1** : afficher la taille et le poids sur la carte (juste du HTML)
- [ ] **Palier 2** : barre de recherche (premier vrai JavaScript, étapes A à D guidées)
- [ ] **Palier 3** : fiche détail au clic (stats)
- [ ] **Palier 4** : « Mon équipe » sauvegardée dans le navigateur (pour aller plus loin)
- [ ] **Bonus** : jeu « Qui est ce Pokémon ? »

La grille de Pokémon est déjà faite : lis le code pour le comprendre !
Les paliers sont guidés : le code à écrire est quasiment donné.
Le but est de comprendre ce que chaque ligne fait.

Pas besoin de tous les faire. Un palier terminé et bien compris vaut mieux que quatre à moitié copiés.

## Chasse aux bugs

Dans le menu, la page **Chasse aux bugs** propose des petits composants cassés à réparer, avec des indices progressifs.
Les consignes sont dans [CHASSE-AUX-BUGS.md](CHASSE-AUX-BUGS.md).

## Ajouter une page

1. Crée un fichier dans `src/pages/`, par exemple `MaPage.vue`.
2. Dans `src/router.js`, ajoute une ligne : `{ path: '/ma-page', component: MaPage }` (et l'`import` en haut).
3. Dans `src/Layout.vue`, ajoute un lien : `<RouterLink to="/ma-page">Ma page</RouterLink>`.

## Quand ça ne marche pas
1. Lis le message d'erreur : il dit souvent exactement quoi et où.
2. Ouvre la console du navigateur (touche **F12**, onglet *Console*).
3. Vérifie les parenthèses, accolades et guillemets : ce sont les erreurs les plus fréquentes, même chez les pros.
4. Demande de l'aide, et n'hésite pas à demander à l'IA de t'*expliquer* le code plutôt que de l'écrire à ta place.

## Mettre en ligne (GitHub Pages)

1. Crée un dépôt sur GitHub (public) et envoie le code :
   ```bash
   git init
   git add .
   git commit -m "Mon premier Pokédex"
   git branch -M main
   git remote add origin https://github.com/TON-COMPTE/pokedex-stage.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
3. Onglet **Actions** : attends que le déploiement passe au vert.
4. Ton site est en ligne sur `https://TON-COMPTE.github.io/pokedex-stage/`.

Ensuite, à chaque `git push`, le site se met à jour tout seul.
