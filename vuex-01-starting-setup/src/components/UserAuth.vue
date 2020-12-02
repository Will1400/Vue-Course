<template>
	<button @click="login" v-if="!isAuthenticated">Login</button>
	<button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	methods: {
		...mapActions(['login', 'logout']),
	},
	computed: {
		...mapGetters(['isAuthenticated']),
	},
};
</script>

<style>
</style>