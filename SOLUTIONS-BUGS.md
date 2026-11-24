# Solutions de la chasse aux bugs

À ouvrir seulement après avoir vraiment cherché. Pour comprendre, pas pour copier.

## Bug 01 : La phrase à trous

**Cause** : faute de frappe. La variable s'appelle `niveau`, mais le template utilise `nivau`.
Vue ne plante pas : il affiche un trou et prévient dans la console (« Property "nivau" was accessed during render but is not defined »).

**Correction** dans `Bug01.vue` :
```vue
<p>Un {{ nom }} sauvage de niveau {{ niveau }} apparaît !</p>
```

**À retenir** : la console est la première chose à regarder, et un message en anglais se lit mot à mot.

## Bug 02 : L'image fantôme

**Cause** : l'adresse de l'image contient `pokemons` au pluriel, alors que le dossier s'appelle `pokemon`.
Le code Vue est correct, mais le serveur répond 404 (introuvable) : le navigateur affiche donc une image cassée sans rien dire dans la console.

**Correction** dans `Bug02.vue` :
```js
const imageUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
```

**À retenir** : l'onglet **Réseau** de F12 montre chaque requête et son code de réponse (200 = OK, 404 = introuvable).
Quand on a un doute sur une adresse, on l'ouvre dans un onglet et on compare avec ce que renvoie l'API.

## Bug 03 : Le bouton muet

**Cause** : `click="ajouter"` est un simple attribut HTML sans effet. Pour écouter le clic avec Vue, il faut `@click`.
Il n'y a aucune erreur, puisque rien n'est faux pour le navigateur.

**Correction** dans `Bug03.vue` :
```vue
<button @click="ajouter">Ajouter</button>
```

**À retenir** : quand rien ne se passe, ajouter un `console.log` au début d'une fonction permet de savoir si elle est appelée.

## Bug 04 : Le niveau qui ne vient jamais

**Cause** : dans `computed`, `points` est une `ref`, donc un objet, et non un nombre. `points >= 50` compare un objet à 50, ce qui est toujours faux.
Dans `<template>` Vue ouvre la boîte tout seul (c'est pour ça que l'affichage des points marche), mais pas dans `<script>`.

**Correction** dans `Bug04.vue` :
```js
const niveauSuperieur = computed(() => points.value >= 50)
```

**À retenir** : dans `<script>`, on lit et on écrit une `ref` avec `.value`. Dans `<template>`, jamais.

## Bug 05 : La recherche capricieuse

**Cause** : `includes` distingue les majuscules des minuscules. `'Pikachu'.includes('pika')` est faux, car `P` et `p` sont différents.

**Correction** dans `Bug05.vue` :
```js
const resultats = computed(() =>
  noms.filter((nom) => nom.toLowerCase().includes(recherche.value.toLowerCase()))
)
```

**À retenir** : pour comparer deux textes sans tenir compte de la casse, on met les deux en minuscules.

## Bug 06 : L'équipe de sept

**Cause** : `<=` au lieu de `<`. Avec 6 membres, `6 <= 6` est vrai, donc on en recrute un septième. On s'arrête seulement à 7.

**Correction** dans `Bug06.vue` :
```js
if (equipe.value.length < MAX) {
```

**À retenir** : les erreurs « de un » (*off-by-one*) sont très courantes. Pour les trouver, on teste les valeurs aux limites (0, MAX - 1, MAX, MAX + 1).

## Bug 07 : La potion magique

**Cause** : `Math.max` renvoie le plus grand des deux nombres. `Math.max(70, 100)` donne 100, donc la potion remplit toujours la jauge. Il fallait `Math.min`, qui donne le plus petit et sert de plafond.

**Correction** dans `Bug07.vue` :
```js
pv.value = Math.min(pv.value + 30, PV_MAX)
```

**À retenir** : `Math.min(valeur, MAX)` sert de plafond, `Math.max(valeur, MIN)` sert de plancher. Il est facile de les inverser, on les vérifie avec un exemple chiffré.

## Bug 08 : Le Pokémon sans nom

**Cause** : `reponse.json()` renvoie une **promesse** (le résultat arrive plus tard). Sans `await`, `donnees` est la promesse elle-même et non le contenu.
`donnees.name` n'existe pas (vide), et `undefined / 10` donne `NaN`. Rien ne plante, car JavaScript accepte tout cela.

**Correction** dans `serviceBug.js` :
```js
const donnees = await reponse.json()
```

**À retenir** : quand une valeur est `undefined` ou `NaN` alors que l'API répond bien, on pense à un `await` oublié. Et on remonte la chaîne : page, composant, service.

## Bug 09 : Les types mystérieux

**Cause** : l'API renvoie pour chaque type un objet `{ slot: 1, type: { name: 'electric', url: '...' } }`.
`t.type` est encore un objet (`{ name, url }`). Le composant reçoit donc des objets, et les affiche comme `[object Object]`.

**Correction** dans `serviceBug.js` :
```js
return donnees.types.map((t) => t.type.name)
```

**À retenir** : on peut afficher n'importe quelle valeur avec `console.log`, et dans la console les objets se déplient. C'est le moyen le plus rapide de voir la vraie forme des données.
