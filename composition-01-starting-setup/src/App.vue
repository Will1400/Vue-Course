<template>
	<section class="container">
		<h2>{{ userName }}</h2>
		<h3>{{ age }}</h3>
	</section>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
	setup() {
		// const name = ref('Maximilian');
		const uAge = ref(32);

		const user = reactive({
			name: 'Maximilian',
			age: 32,
		});

		return { userName: user.name, age: uAge };
	},
	// data() {
	//   return {
	//     userName: 'Maximilian',
	//   };
	// },
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

.container {
	margin: 3rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
}
</style>