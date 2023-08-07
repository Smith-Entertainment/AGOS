import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Vue/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Vue/AboutView.vue')
    },
    /* { 
      path: '/', 
      name: 'home', 
      redirect: {name: "ListaObra"}
    },
    { 
      path: '/obra/:id', 
      name: 'PerfilObra', 
      component: PerfilObra
    },
    { 
      path: '/lista-obras', 
      name: 'ListaObra', 
      component: ListaObra
    },
    { 
      path: '/cadastro-obra', 
      name: 'CadastroObra', 
      component: CadastroObra
    },
    { 
      path: '/cadastro-usuario', 
      name: 'CadastroUsuario', 
      component: CadastroUsuario
    } */
  ]
})

export default router
