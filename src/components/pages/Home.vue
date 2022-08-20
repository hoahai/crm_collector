<template>
  <div>Home Page</div>
  <MultiSelect
    v-model="selectedItem"
    :options="clients"
    optionGroupLabel="clientName"
    optionGroupChildren="stores"
    optionLabel="storeName"
    placeholder="Select Clients"
    display="chip"
    @change="onChange"
  ></MultiSelect>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { groupBy } from "lodash";
import crmDistribute from "@/js/crmDistributionCenter.js";

export default {
  setup() {
    const store = useStore();
    const selectedItem = ref();

    const clients = store.getters.getTreeSelectClients;

    function onChange() {
      const selectedClients = groupBy(selectedItem.value, "clientId");
      for (const clientId in selectedClients) {
        let crm_requestInfo = store.getters.getAuthInfo(clientId);
        crm_requestInfo.periods = [
          { from: "8/1/2022", to: "8/16/2022" },
          { from: "8/1/2021", to: "8/16/2021" },
        ];

        const stores = selectedClients[clientId];
        crm_requestInfo.stores = stores.map((store) => {
          return {
            id: store.storeId,
            name: store.storeName,
          };
        });
        crmDistribute(crm_requestInfo);
      }
    }
    return { selectedItem, clients, onChange };
  },
};
</script>

<style scoped>
.p-multiselect {
  width: 18rem;
}
</style>
