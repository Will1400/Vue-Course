<template>
	<base-card>
		<base-button
			@click="setSelectedTab('stored-resources')"
			:mode="storedResourceButtonMode"
		>
			StoredResources
		</base-button>

		<base-button
			@click="setSelectedTab('add-resource')"
			:mode="addResourceButtonMode"
		>
			Add Resource
		</base-button>
	</base-card>
	<keep-alive>
		<component :is="selectedTab"></component>
	</keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
	components: { StoredResources, AddResource },
	data() {
		return {
			selectedTab: "stored-resources",
			storedResources: [
				{
					id: "official-guide",
					title: "Official Guide",
					description: "The official Vue.js documentation.",
					link: "https://vuejs.org",
				},
				{
					id: "google",
					title: "Google",
					description: "Learn to google...",
					link: "https://google.org",
				},
			],
		};
	},
	computed: {
		storedResourceButtonMode() {
			return this.selectedTab === "stored-resources" ? null : "flat";
		},
		addResourceButtonMode() {
			return this.selectedTab === "add-resource" ? null : "flat";
		},
	},
	provide() {
		return {
			resources: this.storedResources,
			addResource: this.addResource,
			removeResource: this.removeResource,
		};
	},
	methods: {
		setSelectedTab(tab) {
			this.selectedTab = tab;
		},
		addResource(resource) {
			this.storedResources.unshift(resource);
			this.selectedTab = "stored-resources";
		},
		removeResource(id) {
			this.storedResources.splice(
				this.storedResources.findIndex((x) => x.id == id),
				1
			);
		},
	},
};
</script>

<style>
</style>