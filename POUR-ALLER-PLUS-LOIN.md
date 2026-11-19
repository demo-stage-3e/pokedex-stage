# Pour aller plus loin

## Tu viens de Scratch ? Voici la traduction

| Scratch | Vue / JavaScript |
|---|---|
| Variable | `const score = ref(0)` |
| « répéter pour chaque… » | `v-for="p in pokemons"` |
| « si… alors » | `v-if="vies > 0"` |
| « quand ce sprite est cliqué » | `@click="maFonction"` |
| Costume / sprite | `<img :src="...">` |
| « demander… et attendre » | `<input v-model="reponse">` |
| Bloc personnalisé | une fonction `function monBloc() { ... }` |
| Message envoyé / reçu | un événement entre composants (`emit`) |

La logique est la même. Ce qui change, c'est qu'on l'écrit au lieu de l'assembler.
Les premières erreurs de syntaxe (une virgule ou une accolade oubliée) sont normales : la console (F12) t'indique la ligne.

## Idées d'extensions
- Pagination (boutons « précédent / suivant », paramètre `offset` de l'API)
- Noms en français (endpoint `pokemon-species`, champ `names`)
- Thème clair / sombre
- Comparateur de stats entre deux Pokémon
- Un petit **back-end .NET** : une route `GET /api/equipe` qui mémorise l'équipe, testée avec Swagger (à faire en local, GitHub Pages ne peut pas l'héberger)
