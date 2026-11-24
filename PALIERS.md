# Les paliers

Chaque palier ajoute une fonctionnalité au Pokédex. Le code à écrire est quasiment donné :
le but est de comprendre ce que chaque ligne fait.

Pas besoin de tous les faire. Un palier terminé et bien compris vaut mieux que quatre à moitié copiés.

Le code que tu écris se met dans `src/App.vue` (et `src/components/PokemonCard.vue` pour le palier 1).

---

## Palier 0 : jouer avec ce qui existe (aucun JavaScript !)

- Change le titre « Mon Pokédex » dans le `<template>` de `src/App.vue`.
- Change la couleur `--rouge` dans `src/style.css`.
- Change le `20` de `pokeApi.chargerPokemons(20)` en `6`, puis en `50`.

Observe ce qui change dans la page à chaque enregistrement.

## Palier 1 : ajouter une information sur la carte (juste du HTML)

Dans `src/components/PokemonCard.vue`, ajoute sous le nom :

```vue
<p>Taille : {{ pokemon.height / 10 }} m</p>
<p>Poids : {{ pokemon.weight / 10 }} kg</p>
```

Les `{{ ... }}` affichent une valeur. `pokemon` est le Pokémon de la carte.

## Palier 2 : une barre de recherche (premier vrai JavaScript)

**Étape A** : crée la variable (en haut de `App.vue`, à côté de `pokemons`) :

```js
const recherche = ref('')
```

**Étape B** : dans le `<template>`, au-dessus de la grille :

```vue
<input v-model="recherche" placeholder="Chercher un Pokémon" />
```

`v-model` relie ce que tu tapes à la variable `recherche`.

**Étape C** : crée la liste filtrée (ajoute `computed` dans l'import de `'vue'`) :

```js
const pokemonsAffiches = computed(() =>
  pokemons.value.filter((p) =>
    p.nomFr.toLowerCase().includes(recherche.value.toLowerCase())
  )
)
```

**Étape D** : dans la grille, remplace `pokemons` par `pokemonsAffiches`.

Teste : tape « pi » dans la barre.

## Palier 3 : la fiche détail (un peu plus dur)

Quand on clique sur une carte, une fenêtre (modale) s'ouvre par-dessus la page avec ses stats.
Le CSS de la modale est déjà prêt dans `src/style.css` (classes `fond-modale` et `modale`).
Tout se passe dans `App.vue` : `PokemonCard.vue` ne change pas.

- Variable (en haut, à côté de `pokemons`) :
  ```js
  const choisi = ref(null)
  ```
- Dans le `<template>`, sur la ligne `<PokemonCard ... />` (celle du `v-for`, là où `p` existe), ajoute `@click="choisi = p"`.
  Le clic sur la carte est transmis tout seul à Vue : rien à faire dans la carte.
- Après la grille, ajoute la modale (elle n'existe que si `choisi` est rempli) :
  ```vue
  <div v-if="choisi" class="fond-modale" @click="choisi = null">
    <section class="modale" @click.stop>
      <button class="fermer" @click="choisi = null">✕</button>
      <h2>{{ choisi.nomFr }}</h2>
      <ul>
        <li v-for="s in choisi.stats" :key="s.stat.name">
          {{ s.stat.name }} : {{ s.base_stat }}
        </li>
      </ul>
    </section>
  </div>
  ```

`@click="choisi = null"` referme la modale (en cliquant sur le fond ou sur ✕).
`@click.stop` empêche qu'un clic DANS la fenêtre la referme aussi.

## Palier 4 (pour aller plus loin) : « Mon équipe »

Un bouton « Ajouter à mon équipe » sur chaque carte, 6 Pokémon maximum,
sauvegardés avec `localStorage` pour les retrouver au rechargement.

À faire à deux, avec l'aide de l'encadrant ou de l'IA. Il n'y a pas de code donné : c'est fait exprès.

## Bonus : jeu « Qui est ce Pokémon ? »

Idée : afficher l'image en silhouette (CSS : `filter: brightness(0)`) et proposer 4 noms, avec un score.
