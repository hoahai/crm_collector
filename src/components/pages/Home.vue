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

export default {
  setup() {
    const store = useStore();
    const selectedItem = ref();

    const clients = store.getters.getTreeSelectClients;

    function onChange() {
      const abc = groupBy(selectedItem.value, "clientId");
      console.log(abc);
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
