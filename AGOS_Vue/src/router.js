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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
