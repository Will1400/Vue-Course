<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="coachDetailsLink + '/contact'" mode="outline">
        Contact
      </base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  props: ['id', 'firstName', 'lastName', 'hourlyRate', 'areas'],
  setup(props) {
    const fullName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const route = useRoute();
    const coachDetailsLink = computed(() => {
      return route.path + '/' + props.id;
    });

    return { fullName, coachDetailsLink };
  }
});
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
