import { createRouter, createWebHistory } from "vue-router";
import PerfilObra from './PerfilObra.vue';
import ListaObra from './ListaObra.vue';
import CadastroObra from './components/CadastroObra.vue';
const routes = [
  { path: '/PerfilObra', name: 'PerfilObra', component: PerfilObra },
  { path: '/ListaObra', name: 'ListaObra', component: ListaObra },
  { path: '/CadastroObra', name: 'CadastroObra', component: CadastroObra }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
