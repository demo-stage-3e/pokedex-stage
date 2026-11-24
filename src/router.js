// Le "plan du site" : à chaque adresse (path) correspond une page (component).
//
// Pour AJOUTER UNE PAGE :
//   1. crée un fichier dans src/pages/, par exemple MaPage.vue
//   2. ajoute une ligne dans `routes` ci-dessous
//   3. ajoute un <RouterLink> dans src/Layout.vue pour y accéder
//
// Les adresses ressemblent à  .../#/bugs  (le # est nécessaire sur GitHub Pages).
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue' // la page Pokédex
import BugsPage from './pages/BugsPage.vue'
import BugPage from './pages/BugPage.vue'

const routes = [
  { path: '/', component: App },
  { path: '/bugs', component: BugsPage },
  { path: '/bugs/:id', component: BugPage },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
