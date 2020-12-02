<template>
	<transition-group tag="ul" name="user-list">
		<li v-for="user in users" :key="user" @click="removeUser(user)">
			{{ user }}
		</li>
	</transition-group>
	<div>
		<input type="text" ref="userNameInput" />
		<button @click="addUser">Add user</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: ['Max', 'Manu', 'Julia', 'Penny', 'Klaus'],
		};
	},
	methods: {
		removeUser(user) {
			this.users = this.users.filter((x) => x !== user);
		},
		addUser() {
			this.users.unshift(this.$refs.userNameInput.value);
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	padding: 1rem 0;
	margin: 0;
}
li {
	border: 1px solid #ccc;
	padding: 1rem;
	text-align: center;
}

.user-list-enter-from {
	opacity: 0;
	transform: translateX(-30px);
}
.user-list-enter-active {
	transition: 0.3s ease-out;
}
.user-list-enter-to {
	opacity: 1;
	transform: translateX(0);
}

.user-list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.user-list-leave-active {
	transition: 0.3s ease-out;
	position: absolute;
}
.user-list-leave-from {
	opacity: 1;
	transform: translateX(0);
}

.user-list-move {
	transition: 0.3s ease;
}
</style>