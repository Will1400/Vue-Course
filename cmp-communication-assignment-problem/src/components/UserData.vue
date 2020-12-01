<template>
	<div>
		<form @submit.prevent="submitData">
			<div>
				<label for="username">Username</label>
				<input type="text" name="username" v-model="enteredUsername" />
			</div>

			<div>
				<label for="age">Age</label>
				<input type="number" name="age" v-model="enteredAge" />
			</div>
			<button type="submit">Edit</button>
		</form>
	</div>
</template>

<script>
export default {
	emits: ["edit-user"],
	data() {
		return {
			enteredUsername: "",
			enteredAge: 0,
		};
	},
	methods: {
		submitData() {
			this.$emit("edit-user", this.enteredUsername, this.enteredAge);
		},
	},
};
</script>