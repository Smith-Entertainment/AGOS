<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import PerfilObra from './PerfilObra.vue';
import ListaObra from './ListaObra.vue';
import CadastroObra from './components/CadastroObra.vue';
import EditarObra from "./components/EditarObra.vue";

const routes = [
  { path: "/", name: "home", redirect: { name: "ListaObra" } },
  { path: "/obra/:id", name: "PerfilObra", component: PerfilObra },
  { path: "/lista-obras", name: "ListaObra", component: ListaObra },
  { path: "/cadastro-obra", name: "CadastroObra", component: CadastroObra },
  { path: "/editar-obra/:id", name: "EditarObra", component: EditarObra }
=======
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import PerfilObra from './PerfilObra.vue';
import ListaObra from './ListaObra.vue';
const routes = [
  { path: '/PerfilObra', name: 'PerfilObra', component: PerfilObra },
  { path: '/ListaObra', name: 'ListaObra', component: ListaObra },
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
