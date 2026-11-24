// La liste des exercices de la chasse aux bugs.
//
// Pour AJOUTER un exercice :
//   1. crée src/bugs/BugXX.vue (un composant volontairement cassé)
//   2. ajoute un bloc ci-dessous
//   3. ajoute sa section (symptôme + indices) dans CHASSE-AUX-BUGS.md
//   4. ajoute sa solution dans SOLUTIONS-BUGS.md
//
// Important : un bug doit « planter » à l'exécution (dans le navigateur),
// jamais empêcher la compilation, sinon `npm run build` (et GitHub Pages) échoueraient.
import Bug01 from './Bug01.vue'
import Bug02 from './Bug02.vue'
import Bug03 from './Bug03.vue'
import Bug04 from './Bug04.vue'
import Bug05 from './Bug05.vue'
import Bug06 from './Bug06.vue'
import Bug07 from './Bug07.vue'
import Bug08 from './Bug08.vue'
import Bug09 from './Bug09.vue'

export const exercices = [
  {
    id: '01',
    palier: 1,
    titre: 'La phrase à trous',
    fichier: 'src/bugs/Bug01.vue',
    attendu: 'La page affiche : « Un Pikachu sauvage de niveau 5 apparaît ! »',
    composant: Bug01,
  },
  {
    id: '02',
    palier: 1,
    titre: "L'image fantôme",
    fichier: 'src/bugs/Bug02.vue',
    attendu: "L'image de Pikachu s'affiche.",
    composant: Bug02,
  },
  {
    id: '03',
    palier: 2,
    titre: 'Le bouton muet',
    fichier: 'src/bugs/Bug03.vue',
    attendu: 'Un clic sur « Ajouter » ajoute le nom saisi à la liste.',
    composant: Bug03,
  },
  {
    id: '04',
    palier: 2,
    titre: 'Le niveau qui ne vient jamais',
    fichier: 'src/bugs/Bug04.vue',
    attendu: 'À 50 points ou plus, le message « Niveau supérieur ! » apparaît.',
    composant: Bug04,
  },
  {
    id: '05',
    palier: 3,
    titre: 'La recherche capricieuse',
    fichier: 'src/bugs/Bug05.vue',
    attendu: 'En tapant « pika » (en minuscules), Pikachu apparaît dans la liste.',
    composant: Bug05,
  },
  {
    id: '06',
    palier: 3,
    titre: "L'équipe de sept",
    fichier: 'src/bugs/Bug06.vue',
    attendu: "L'équipe ne peut pas dépasser 6 Pokémon : le compteur s'arrête à 6 / 6.",
    composant: Bug06,
  },
  {
    id: '07',
    palier: 3,
    titre: 'La potion magique',
    fichier: 'src/bugs/Bug07.vue',
    attendu: 'Depuis 40 PV, une potion donne 70 PV, puis 100 PV, puis reste à 100.',
    composant: Bug07,
  },
  {
    id: '08',
    palier: 4,
    titre: 'Le Pokémon sans nom',
    fichier: 'src/bugs/Bug08.vue',
    attendu: 'La page affiche « Nom : pikachu » et « Poids : 6 kg ».',
    composant: Bug08,
  },
  {
    id: '09',
    palier: 4,
    titre: 'Les types mystérieux',
    fichier: 'src/bugs/Bug09.vue',
    attendu: 'La page affiche le type de Pikachu : « electric ».',
    composant: Bug09,
  },
]
