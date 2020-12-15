<template>
  <base-card>
    <h2>Find your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script lang="ts">
interface Filters {
  frontend: boolean;
  backend: boolean;
  career: boolean;
}

import { defineComponent, reactive } from "vue";
const Component = defineComponent({
  emits: ["change-filter"],
  setup(_, context) {
    const filters = reactive<Filters>({
      frontend: true,
      backend: true,
      career: true
    });

    function setFilter(event: any) {
      console.log(event);

      const inputId: string = event.target.id;
      const isActive: boolean = event.target.checked;
      filters[inputId as keyof Filters] = isActive;

      context.emit("change-filter", filters);
    }

    return { filters, setFilter };
  }
});
export default Component;
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
