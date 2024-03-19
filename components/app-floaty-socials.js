Vue.component("app-floaty-socials", {
	template: `
		<v-speed-dial v-model="fab" bottom left fixed transition="fade-transition">
			<template v-slot:activator>
				<v-btn :color="color" dark fab :small="smallButtons">
					<v-icon :small="smallIcons" v-if="fab">{{ closeIcon }}</v-icon>
					<v-icon :small="smallIcons" v-else>{{ icon }}</v-icon>
				</v-btn>
			</template>
			
			<template v-for="social in socials">
				<v-btn fab dark :small="smallButtons" :key="social.name" :color="social.color" :href="social.link" target="_blank">
					<v-icon :small="smallIcons">{{ social.icon }}</v-icon>
				</v-btn>
			</template>
		</v-speed-dial>
	`,
	type: "Social",
	data() {
		return {
			fab: false,
		}
	},
	props: {
		smallButtons: {
			type: Boolean,
			default: false
		},
		smallIcons: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: "secondary"
		},
		socials: {
			type: Array,
			default: () => [{
					name: "Facebook",
					icon: "mdi-facebook",
					color: "#3b5998",
					link: "https://facebook.com"
				},
				{
					name: "Twitter",
					icon: "mdi-twitter",
					color: "#55acee",
					link: "https://twitter.com"
				},
				{
					name: "Whatsapp",
					icon: "mdi-whatsapp",
					color: "#2dbc43",
					link: "https://whatsapp.com"
				},
				{
					name: "Telegram",
					icon: "mdi-telegram",
					color: "#86c8e5",
					link: "https://telegram.com"
				}
			]
		},
		icon: {
			type: String,
			default: "mdi-link"
		},
		closeIcon: {
			type: String,
			default: "mdi-close"
		},
	}
})