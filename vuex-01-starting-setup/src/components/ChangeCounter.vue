<template>
	<button @click="addOne">Add one</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	methods: {
		// ...mapActions(['increment']),
		...mapActions({ addOne: 'increment' }),
	},
};
</script>

<style>
</style>