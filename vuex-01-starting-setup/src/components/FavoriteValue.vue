<template>
	<h3>{{ counter }}</h3>
	<p>Who knows</p>
</template>

<script>
export default {
	computed: {
		counter() {
			return this.$store.getters['number/normalizedCounter'];
		},
	},
};
</script>

<style>
</style>