<template>
	<section>
		<h2>{{ team.name }}</h2>
		<ul>
			<user-item
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role"
			></user-item>
		</ul>
	</section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
	inject: ['users', 'teams'],
	props: ['teamId'],
	components: {
		UserItem,
	},
	data() {
		return {
			team: {},
			members: [],
		};
	},
	methods: {
		loadTeamMembers(teamId) {
			const team = this.teams.find((x) => x.id == teamId);

			this.members = this.users.filter((x) => team.members.includes(x.id));
			this.team = team;
		},
	},
	watch: {
		teamId() {
			this.loadTeamMembers(this.teamId);
		},
	},
	created() {
		this.loadTeamMembers(this.teamId);
	},
	// beforeRouteUpdate(to, from, next) {
	// 	next();
	// },
};
</script>

<style scoped>
section {
	margin: 2rem auto;
	max-width: 40rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	border-radius: 12px;
}

h2 {
	margin: 0.5rem 0;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>