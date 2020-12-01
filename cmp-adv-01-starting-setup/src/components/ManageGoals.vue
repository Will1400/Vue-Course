<template>
	<div>
		<h2>Manage Goals</h2>
		<input type="text" ref="goal" />
		<button @click="setGoal">Set Goal</button>

		<teleport to="body">
			<error-alert v-if="inputIsInvalid">
				<h2>Input is invalid!</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
					molestiae deserunt harum, voluptatem impedit similique ab assumenda
					numquam nemo nihil, hic blanditiis quas autem omnis saepe in illo.
					Aliquid!
				</p>
				<button @click="confirmError">Okay</button>
			</error-alert>
		</teleport>
	</div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
	components: { ErrorAlert },
	data() {
		return {
			inputIsInvalid: false,
		};
	},
	methods: {
		setGoal() {
			const enteredValue = this.$refs.goal.value;
			if (enteredValue === "") {
				this.inputIsInvalid = true;
			} else {
				this.confirmError();
			}
		},
		confirmError() {
			this.inputIsInvalid = false;
		},
	},
};
</script>