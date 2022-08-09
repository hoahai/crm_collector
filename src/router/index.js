import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import HomePage from "../components/pages/Home.vue";
import SettingsPage from "../components/pages/Settings.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        component: HomePage,
        meta: {
          title: "Home",
        },
      },
      {
        path: "settings",
        component: SettingsPage,
        meta: {
          title: "Settings",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
