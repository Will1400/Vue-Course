<template>
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>

	<!-- <div class="container">
		<div class="block" :class="{ animate: animatedBlock }"></div>
		<button @click="animateBlock">Animate</button>
	</div>
	<div class="container">
		<transition
			name="para"
			@before-enter="beforeEnter"
			@enter="enter"
			@before-leave="beforeLeave"
			@leave="leave"
			@enter-cancelled="enterCancelled"
			@leave-cancelled="leaveCancelled"
		>
			<p v-if="paragraphIsVisible">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Exercitationem, qui!
			</p>
		</transition>
		<button @click="toggleParagraph">toggle paragraph</button>
	</div>
	<div class="container">
		<transition name="fade-button" mode="out-in">
			<button @click="showUsers" v-if="!usersAreVisible">Show users</button>
			<button @click="hideUsers" v-else>Hide users</button>
		</transition>
	</div>
	<base-modal @close="hideDialog" :open="dialogIsVisible">
		<p>This is a test dialog!</p>
		<button @click="hideDialog">Close it!</button>
	</base-modal>
	<div class="container">
		<button @click="showDialog">Show Dialog</button>
	</div>
	<div class="container">
		<users-list></users-list>
	</div> -->
</template>

<script>
// import UsersList from './components/UsersList.vue';
export default {
	// components: { UsersList },
	data() {
		return {
			dialogIsVisible: false,
			animatedBlock: false,
			paragraphIsVisible: false,
			usersAreVisible: false,
			enterInterval: null,
			leaveInterval: null,
		};
	},
	methods: {
		beforeEnter(el) {
			el.style.opacity = 0;
		},
		enter(el, done) {
			let round = 1;
			this.enterInterval = setInterval(() => {
				el.style.opacity = round * 0.1;
				round++;
				if (round > 10) {
					clearInterval(this.enterInterval);
					done();
				}
			}, 20);
		},
		enterCancelled() {
			clearInterval(this.enterInterval);
		},
		leaveCancelled() {
			clearInterval(this.leaveInterval);
		},

		beforeLeave(el) {
			el.opacity = 1;
		},
		leave(el, done) {
			let round = 10;
			this.leaveInterval = setInterval(() => {
				el.style.opacity = round * 0.1;
				round--;

				if (round < 1) {
					clearInterval(this.leaveInterval);
					done();
				}
			}, 20);
		},
		showDialog() {
			this.dialogIsVisible = true;
		},
		hideDialog() {
			this.dialogIsVisible = false;
		},
		toggleParagraph() {
			this.paragraphIsVisible = !this.paragraphIsVisible;
		},
		animateBlock() {
			this.animatedBlock = !this.animatedBlock;
		},
		showUsers() {
			this.usersAreVisible = true;
		},
		hideUsers() {
			this.usersAreVisible = false;
		},
	},
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
button {
	font: inherit;
	padding: 0.5rem 2rem;
	border: 1px solid #810032;
	border-radius: 30px;
	background-color: #810032;
	color: white;
	cursor: pointer;
}
button:hover,
button:active {
	background-color: #a80b48;
	border-color: #a80b48;
}
.block {
	width: 8rem;
	height: 8rem;
	background-color: #290033;
	margin-bottom: 2rem;
}
.container {
	max-width: 40rem;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	border: 2px solid #ccc;
	border-radius: 12px;
}

.animate {
	animation: slide-scale 1s ease-out alternate;
	transform: translateX(-150px);
}

.fade-button-enter-from,
.fade-button-leave-to {
	opacity: 0;
}
.fade-button-enter-active {
	transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
	transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
	opacity: 1;
}

.route-enter-active {
	animation: slide-scale 0.4s ease-out;
}

.route-leave-active {
	animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
	0% {
		transform: translateX(0) scale(1);
	}
	70% {
		transform: translateX(-120px) scale(1.1);
	}
	100% {
		transform: translateX(-150px) scale(1);
	}
}
</style>
