import { createStore } from "vuex";
import frontEnd from "./modules/frontEnd";
import crm from "./modules/crm";

const storeData = {
  namespaced: true,
  modules: {
    frontEnd,
    crm,
  },
};

const store = createStore(storeData);
export default store;
