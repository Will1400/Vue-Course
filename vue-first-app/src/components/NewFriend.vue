<template>
	<div>
		<form @submit.prevent="submitData">
			<div>
				<label for="enteredName">Name</label>
				<input type="text" required v-model="enteredName" name="enteredName" />
			</div>
			<div>
				<label for="phoneNumber">Phone</label>
				<input type="tel" v-model="phoneNumber" name="phoneNumber" />
			</div>
			<div>
				<label for="email">Email</label>
				<input type="email" v-model="email" name="email" />
			</div>
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script>
export default {
	emits: {
		"add-friend": function (name, phone, email) {
			if (name && phone && email) {
				return true;
			}

			return false;
		},
	},
	data() {
		return {
			enteredName: "",
			phoneNumber: "",
			email: "",
		};
	},
	methods: {
		submitData() {
			this.$emit("add-friend", this.enteredName, this.phoneNumber, this.email);
		},
	},
};
</script>