import { createRouter, createWebHashHistory } from "vue-router";

import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import HomePage from "../components/pages/Home.vue";
import SettingsPage from "../components/pages/Settings.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: HomePage },
      { path: "settings", component: SettingsPage },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
