import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import PerfilObra from './PerfilObra.vue';
import ListaObra from './ListaObra.vue';
const routes = [
  { path: '/PerfilObra', name: 'PerfilObra', component: PerfilObra },
  { path: '/ListaObra', name: 'ListaObra', component: ListaObra },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
