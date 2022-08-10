import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);

app.use(PrimeVue, {
  ripple: true,
  inputStyle: "outlined",
  zIndex: {
    modal: 1100, //dialog, sidebars
    overlay: 1000, //dropdown, overlaypanel
    menu: 1000, //overlay menus
    tooltip: 1100, //tooltip
  },
});
// Import CSS
import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
// Import Components
import Button from "primevue/button";
app.component("Button", Button);
import MegaMenu from "primevue/megamenu";
app.component("MegaMenu", MegaMenu);
import InputText from "primevue/inputtext";
app.component("InputText", InputText);
import MultiSelect from "primevue/multiselect";
app.component("MultiSelect", MultiSelect);

app.mount("#app");
