import { PrimeIcons } from "primevue/api";

const frontEndtModule = {
  state: {
    menubar: [
      {
        label: "Home",
        icon: PrimeIcons.HOME,
        to: "/",
      },
      {
        label: "Settings",
        icon: PrimeIcons.COG,
        to: "/settings",
      },
    ],
  },
  getters: {
    getMenuItems: (state) => state.menubar,
  },
  mutations: {},
  actions: {},
};

export default frontEndtModule;
