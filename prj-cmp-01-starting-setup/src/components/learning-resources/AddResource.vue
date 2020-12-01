<template>
	<base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="closeError">
		<template #default>
			<p>Atleast one input value is invalid.</p>
			<p>Please check all inputs.</p>
		</template>
		<template #actions>
			<base-button @click="closeError">Okay</base-button>
		</template>
	</base-dialog>
	<base-card>
		<form @submit.prevent="submitData">
			<div class="form-control">
				<label for="title">Title</label>
				<input type="text" name="title" ref="title" required />
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea name="description" rows="3" ref="description" />
			</div>
			<div class="form-control">
				<label for="link">Link</label>
				<input type="url" name="link" id="link" ref="link" />
			</div>

			<div>
				<base-button type="submit">Add Resource</base-button>
			</div>
		</form>
	</base-card>
</template>

<script>
export default {
	inject: ["addResource"],
	data() {
		return {
			inputIsInvalid: false,
		};
	},
	methods: {
		closeError() {
			this.inputIsInvalid = false;
		},
		submitData() {
			const resource = {
				id: new Date().toISOString(),
				title: this.$refs.title.value,
				description: this.$refs.description.value,
				link: this.$refs.link.value,
			};
			if (resource.title.trim() === "" || resource.description.trim() === "") {
				this.inputIsInvalid = true;
			} else {
				this.addResource(resource);
			}
		},
	},
};
</script>

<style scoped>
label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	padding: 0.15rem;
	border: 1px solid #ccc;
}

input:focus,
textarea:focus {
	outline: none;
	border-color: #3a0061;
	background-color: #f7ebff;
}

.form-control {
	margin: 1rem 0;
}
</style>