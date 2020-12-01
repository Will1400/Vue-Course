<template>
	<li>
		<h2>{{ friend.name }} {{ friend.isFavorite ? "(favorite)" : "" }}</h2>
		<button @click="toggleFavorite()">Toggle Favorite</button>

		<button @click="toggleDetails()">
			{{ detailsAreVisible ? "Hide" : "Show" }} Details
		</button>

		<ul v-if="detailsAreVisible">
			<li>
				<strong>Phone:</strong>
				{{ friend.phone }}
			</li>
			<li>
				<strong>Email:</strong>
				{{ friend.email }}
			</li>
		</ul>
		<button @click="deleteFriend">Delete</button>
	</li>
</template>

<script>
export default {
	props: {
		friend: Object,
	},
	emits: {
		"toggle-favorite": function (id) {
			if (id) {
				return true;
			}
			console.log("id is missing");
			return false;
		},
		"delete-friend": function (id) {
			if (id) {
				return true;
			}
			console.log("id is missing");
			return false;
		},
	},
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			this.$emit("toggle-favorite", this.friend.id);
		},
		deleteFriend() {
			this.$emit("delete-friend", this.friend.id);
		},
	},
};
</script>