<template>
	<div>
		<active-user v-bind="user" />
		<user-data @edit-user="editUser" />
	</div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
	components: { ActiveUser, UserData },
	data() {
		return {
			user: {
				username: "ting",
				age: 10,
			},
		};
	},
	methods: {
		editUser(username, age) {
			this.user.username = username;
			this.user.age = age;
		},
	},
};
</script>