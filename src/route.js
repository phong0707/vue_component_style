import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/home.vue";
import project from "@/pages/project/index.vue";
import Blog from "./components/blog.vue";
import Project_detail from "./pages/project/project_detail.vue";
import Collection from "./components/collection.vue";
import NotFound from "./components/NotFound.vue";
import Customer from "./pages/Customer.vue";

import { HSStaticMethods } from "preline/preline";

window.HSStaticMethods = HSStaticMethods;

const routes = [
  { path: "/", component: Home },
  {
    path: "/project",
    component: project,
    children: [
      {
        path: "",
        component: Collection,
      },
      {
        path: ":id",
        component: Project_detail,
      },
      
    ],
  },
  { path: "/blog", component: Blog },
  {path: '/customer', component: Customer},
  { path: '/:notfound(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  linkActiveClass: "font-bold",
  history: createWebHistory(),
  routes,
});

router.afterEach((to,from,failure) =>{
  if(!failure){
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
})

export default router;
