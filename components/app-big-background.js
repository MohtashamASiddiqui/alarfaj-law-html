Vue.component("app-big-background", {
    template: `
		<v-img :src="img" :height="height">
			<v-container fill-height>
				<v-row align="center" :class="[textColor + '--text']">
					<v-col cols="12" class="text-center">
						<template v-if="logo">
							<v-img :src="logo" :aspect-ratio="logoAspectRatio" :width="logoWidth" class="mx-auto"></v-img>
							<br />
							<br />
						</template>
						<div class="pb-4 display-1" style="drop-shadow(2px 2px 2px rgb(51, 51, 51))"
						:class="{'text-uppercase': allCaps}"
						>{{ title }}</div>
						<br />
						<br />
						<!--
						<v-btn :color="buttonColor" class="text-none px-6" :rounded="rounded" large 
						:class="btnClass" v-if="action">
							{{ action }}
							<v-icon right v-if="icon">{{ icon }}</v-icon>
						</v-btn>
						-->
					</v-col>
				</v-row>
			</v-container>
		</v-img>
    `,
    type: "Jumbotron",
    props: {
        img: {
            type: String,
            default: "https://picsum.photos/id/805/1000/600"
        },
        title: {
            type: String,
            default: "Best developers locally and globally."
        },
        action: {
            type: String,
            default: ""
        },
        icon: {
            type: String,
            default: "mdi-arrow-right"
        },
        height: {
            type: Number,
            default: 750
        },
        textColor: {
            type: String,
            default: "white"
        },
        rounded: {
            type: Boolean,
            default: false
        },
        buttonColor: {
            type: String,
            default: "green"
        },
        buttonTextColor: {
            type: String,
            default: "white"
		},
		buttonAllCaps: {
			type: Boolean,
			default: false
		},
		allCaps: {
			type: Boolean,
			default: false
		},
		logo: {
			type: String,
			default: "https://pixelatt.com/wp-content/uploads/2019/02/first_black-and-white_final_White_Text_Site_small-compressor.png"
		},
		logoAspectRatio: {
			type: Number,
			default: 1
		},
		logoWidth: {
			type: Number,
			default: 300
		}
	},
	computed: {
		btnClass(){
			return {
				'text-uppercase': this.buttonAllCaps,
				[this.buttonTextColor + '--text'] : true
			};
		}
	}
})