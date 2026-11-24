# Chasse aux bugs

Corriger un bug est une compétence à part entière, et c'est une grande partie du métier de développeur.
Ici, chaque exercice est un petit composant qui **ne marche pas comme prévu**. À toi de trouver pourquoi.

## Comment ça marche

1. Lance le site (`npm run dev`) et clique sur **Chasse aux bugs** dans le menu.
2. Choisis un exercice. Tu vois le **résultat attendu** et le **fichier à ouvrir**.
3. Compare ce que tu vois avec ce qui est attendu, puis cherche la cause dans le fichier.
4. Quand tu as corrigé et enregistré, la page se met à jour toute seule.

## Une méthode pour chercher

1. **Observe** : que se passe-t-il exactement ? Qu'est-ce qui devrait se passer ?
2. **Ouvre la console** (touche **F12**, onglet *Console*) : y a-t-il un message rouge ou jaune ?
3. **Fais une hypothèse** : « je pense que le problème vient de … ».
4. **Teste-la** : change une seule chose à la fois, ou ajoute un `console.log(...)` pour voir une valeur.
5. Si ça ne marche pas, reviens à l'étape 3 : se tromper de piste fait partie du métier.

## Les indices

Chaque exercice a 3 indices, du plus vague au plus précis. **Essaie vraiment avant d'ouvrir le suivant.**
Pour les ouvrir, utilise l'aperçu Markdown de VS Code (clic droit sur le fichier, puis *Open Preview*)
ou lis ce fichier sur GitHub : cliquer sur « Indice » le déplie.

La solution complète est dans `SOLUTIONS-BUGS.md`. À ouvrir en dernier.

---

## Palier 1 : lire le message d'erreur

### Bug 01 : La phrase à trous

**Symptôme** : la phrase affichée a un trou à la place du niveau.

<details>
<summary>Indice 1</summary>

Ouvre la console (F12). Il y a un message jaune. Lis-le en entier : il te dit quel nom pose problème.
</details>

<details>
<summary>Indice 2</summary>

Le message dit qu'une propriété est utilisée dans la page mais « n'est pas définie ».
Va dans `Bug01.vue` et compare les noms des variables en haut avec ceux utilisés dans la phrase.
</details>

<details>
<summary>Indice 3</summary>

Regarde lettre par lettre le nom utilisé pour le niveau dans `<template>` et celui déclaré dans `<script setup>`.
</details>

### Bug 02 : L'image fantôme

**Symptôme** : à la place de l'image, il y a une petite icône cassée.

<details>
<summary>Indice 1</summary>

Fais un clic droit sur l'image, puis *Inspecter*, ou ouvre l'onglet **Réseau** (*Network*) de F12 et recharge la page.
Une ligne est en rouge : c'est la requête de l'image.
</details>

<details>
<summary>Indice 2</summary>

Clique sur la ligne rouge : tu vois l'adresse que le navigateur a essayé de charger et l'erreur (probablement **404**, « introuvable »).
Copie cette adresse dans un nouvel onglet : que se passe-t-il ?
</details>

<details>
<summary>Indice 3</summary>

Le code `<img :src="imageUrl">` est correct : c'est l'adresse elle-même qui est fausse.
Pour trouver la bonne, ouvre <https://pokeapi.co/api/v2/pokemon/25> dans ton navigateur (25 = Pikachu), cherche `front_default` dans `sprites`
et compare cette adresse, caractère par caractère, avec celle de `Bug02.vue`.
</details>

---

## Palier 2 : rien ne s'affiche en rouge

Ici, la console reste silencieuse. Il faut chercher soi-même.

### Bug 03 : Le bouton muet

**Symptôme** : tu tapes un nom, tu cliques sur « Ajouter », et il ne se passe rien. Aucune erreur.

<details>
<summary>Indice 1</summary>

Vérifie d'abord que la fonction `ajouter` est correcte : ajoute `console.log('ajouter appelée')` au début.
Clique sur le bouton. Le message apparaît-il dans la console ?
</details>

<details>
<summary>Indice 2</summary>

Si le message n'apparaît pas, la fonction n'est jamais appelée. Le problème est donc dans la façon dont le bouton est relié à la fonction.
</details>

<details>
<summary>Indice 3</summary>

Compare le bouton de `Bug03.vue` avec ceux des autres exercices (par exemple `Bug04.vue`) ou avec le palier 3 dans `App.vue`.
Regarde bien le début de l'attribut.
</details>

### Bug 04 : Le niveau qui ne vient jamais

**Symptôme** : les points montent de 10 en 10 à chaque clic, mais le message « Niveau supérieur ! » n'apparaît jamais, même à 100 points.

<details>
<summary>Indice 1</summary>

Les points montent bien, donc `combattre` fonctionne. Le problème est ailleurs : dans ce qui décide d'afficher le message.
</details>

<details>
<summary>Indice 2</summary>

Dans `niveauSuperieur`, ajoute `console.log(points)` juste avant le `return` (ou transforme la flèche pour avoir des accolades).
Qu'est-ce qui s'affiche dans la console ? Est-ce un nombre ?
</details>

<details>
<summary>Indice 3</summary>

Une variable créée avec `ref(...)` n'est pas un nombre : c'est une boîte qui contient un nombre.
Dans `<script>`, il faut ouvrir la boîte avec `.value`. Regarde comment `combattre` le fait.
</details>

---

## Palier 3 : ça tourne, mais le résultat est faux

Aucune erreur, aucun message : le code fait exactement ce qu'on lui a écrit, mais ce n'est pas ce qu'on voulait.
Il faut relire la logique et se demander ce que chaque ligne fait vraiment.

### Bug 05 : La recherche capricieuse

**Symptôme** : tu tapes « Pikachu » et il s'affiche. Tu tapes « pika » et la liste devient vide.

<details>
<summary>Indice 1</summary>

Teste plusieurs recherches : « Pika », « pika », « PIKA », « chu ». Lesquelles marchent ? Qu'est-ce qu'elles ont en commun ?
</details>

<details>
<summary>Indice 2</summary>

Les recherches qui échouent sont celles où les majuscules et les minuscules ne correspondent pas à celles du nom.
Pour l'ordinateur, `'P'` et `'p'` sont deux caractères différents.
</details>

<details>
<summary>Indice 3</summary>

Regarde comment le filtre du palier 2 (dans `PALIERS.md`) règle ce problème. Il y a une méthode à appliquer aux **deux** textes comparés.
</details>

### Bug 06 : L'équipe de sept

**Symptôme** : l'équipe devrait être limitée à 6, mais en cliquant sur « Recruter » on arrive à « 7 / 6 ».

<details>
<summary>Indice 1</summary>

Clique autant de fois que possible. À quel nombre exact le recrutement s'arrête-t-il ?
</details>

<details>
<summary>Indice 2</summary>

Le bug est dans la condition du `if`. Fais le calcul à la main : quand l'équipe a 6 membres, la condition est-elle vraie ou fausse ?
</details>

<details>
<summary>Indice 3</summary>

Compare `<` et `<=` : « strictement plus petit que » et « plus petit ou égal à ». Pour quelle valeur diffèrent-ils ?
</details>

### Bug 07 : La potion magique

**Symptôme** : le Pokémon a 40 PV, on clique sur « Potion (+30) » et il passe directement à 100 PV au lieu de 70.

<details>
<summary>Indice 1</summary>

Note les PV avant et après chaque clic. Le résultat est-il toujours le même, quelle que soit la valeur de départ ?
</details>

<details>
<summary>Indice 2</summary>

Dans `soigner`, calcule à la main `Math.max(40 + 30, 100)`. Que renvoie `Math.max` ?
</details>

<details>
<summary>Indice 3</summary>

`Math.max(a, b)` renvoie le plus **grand** des deux. Ici, on veut que les PV ne dépassent **pas** 100 : on veut donc le plus petit.
Regarde la fonction `combattre`, qui utilise l'autre version pour ne pas descendre sous 0.
</details>

---

## Palier 4 : le symptôme est ici, la cause est ailleurs

Dans un vrai projet, une erreur apparaît rarement là où elle a été commise.
Ici, la page affiche un résultat bizarre, mais le composant est écrit correctement. **La cause est dans `src/bugs/serviceBug.js`**,
le fichier qui va chercher les données (comme `src/services/PokeApi.js` pour le Pokédex).

Pour trouver, il faut suivre la donnée de bout en bout : page, composant, service, API.
Tes outils : `console.log` et l'onglet **Réseau** de F12.

### Bug 08 : Le Pokémon sans nom

**Symptôme** : la page affiche « Nom : » (vide) et « Poids : NaN kg ». Aucune erreur dans la console.

> `NaN` veut dire « Not a Number » : un calcul a été fait avec quelque chose qui n'est pas un nombre.

<details>
<summary>Indice 1</summary>

Dans l'onglet **Réseau**, la requête vers `pokeapi.co` est-elle en vert (200) ? Clique dessus, onglet *Réponse* : les données sont-elles bonnes ?
Si oui, l'API n'est pas en cause.
</details>

<details>
<summary>Indice 2</summary>

Dans `Bug08.vue`, ajoute `console.log(pokemon.value)` après le `await`. Les valeurs reçues par le composant sont-elles déjà fausses ?
Si oui, le composant n'y est pour rien : va voir `chargerPokemon` dans `serviceBug.js`.
</details>

<details>
<summary>Indice 3</summary>

Dans `serviceBug.js`, ajoute `console.log(donnees)` juste après la ligne qui l'a créée. Qu'est-ce qui s'affiche ? Est-ce que ça ressemble au Pokémon ?
Compare avec la fonction `chargerTypes` juste en dessous. Regarde le début de la ligne `donnees`.
</details>

### Bug 09 : Les types mystérieux

**Symptôme** : à la place du type de Pikachu, la page affiche « [object Object] ».

<details>
<summary>Indice 1</summary>

`[object Object]` est ce qu'affiche JavaScript quand on lui demande d'écrire un objet comme s'il s'agissait d'un texte.
Le composant attend donc du texte, mais reçoit autre chose.
</details>

<details>
<summary>Indice 2</summary>

Dans `Bug09.vue`, ajoute `console.log(types.value)` après le `await`. Dans la console, déplie ce qui s'affiche. Que contient chaque élément ?
</details>

<details>
<summary>Indice 3</summary>

Chaque élément est un objet avec plusieurs champs, dont un contient le nom du type. Dans `chargerTypes`, ouvre l'adresse de l'API dans un onglet
(<https://pokeapi.co/api/v2/pokemon/25>), cherche `types` et regarde la forme des données. Qu'est-ce que `.map` renvoie, et que voudrais-tu renvoyer ?
</details>

---

## Et après ?

Tu peux aussi créer **tes propres bugs** pour un camarade : copie un `BugXX.vue`, casse-le, et ajoute-le dans `src/bugs/exercices.js`.
