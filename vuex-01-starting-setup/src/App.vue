<template>
	<base-container title="Vuex" v-if="isAuthenticated">
		<the-counter></the-counter>
		<favorite-value></favorite-value>
		<button @click="addOne">Add 10</button>
		<change-counter></change-counter>
	</base-container>
	<base-container title="Auth">
		<user-auth></user-auth>
	</base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
	methods: {
		addOne() {
			this.$store.dispatch('increase', { value: 10 });
			// this.$store.commit({ type: 'increase', value: 10 });
		},
	},
	computed: {
		...mapGetters(['isAuthenticated']),
	},
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavoriteValue,
		UserAuth,
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>