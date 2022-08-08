<template>
  <div class="grid">
    <div class="col">
      <MegaMenu :model="menuItems" />
    </div>
  </div>
  <div class="gird">
    <div class="col">
      <div class="flex justify-content-center">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const menuItems = store.getters.getMenuItems;
    return { menuItems };
  },
};
</script>

<style></style>
