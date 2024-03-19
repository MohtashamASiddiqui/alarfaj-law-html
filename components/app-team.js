Vue.component("app-team", {
	template: `
		<v-card :img="img" flat tile>
			<v-card flat tile :style="'background-color:'+backgroundColor" class="fill-height">
				<v-card-text class="pa-5 pt-12 text-center">
					<div class="white--text display-1 pt-5">{{ title }}</div>
				</v-card-text>
				<v-card-text>
					<v-row class="fill-height">
						<v-col cols="12">
							<v-container class="text-center">
								<v-row dense style="justify-content: center">
									<v-col cols="6" md="4" lg="3" v-for="(item, i) in team" :key="i" class="pb-6">
										<a :href="item.link" style="text-decoration: none">
											<v-row no-gutters class="fill-height" align="stretch" justify="center">
												<v-col cols="10">
													<v-img :src="item.img" :aspect-ratio="4/5" tile style="border-radius: 6px; border: 1px solid #ddd;" color="#dddddd88"></v-img>
													<v-icon :dark="dark" dense small>mdi-circle-small</v-icon>
													<v-icon :dark="dark" dense small>mdi-circle-medium</v-icon>
													<v-icon :dark="dark" dense>mdi-circle-medium</v-icon>
													<v-icon :dark="dark" dense small>mdi-circle-medium</v-icon>
													<v-icon :dark="dark" dense small>mdi-circle-small</v-icon>
												</v-col>
												<v-col cols="12">
													<div class="pt-5 headline" :class="textColor">
														{{ item.name }}
													</div>
												</v-col>
												<v-col cols="12" align-self="end" :class="textColor">
													<div class="pt-2 title">
														{{ item.position }}
													</div>
												</v-col>
											</v-row>
										</a>
									</v-col>
								</v-row>
							</v-container>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-card>
	`,
	type: "About Us",
	props: {
		img: {
			type: String,
			default: "https://picsum.photos/id/331/1000/600"
		},
		title: {
			type: String,
			default: "Unlimited Web Hosting"
		},
		caption: {
			type: String,
			default: "Web Hosting Made EASY And AFFORDABLE"
		},
		team: {
			type: Array,
			default: () => [
				{ name: "Ibrahim Abdulwahab Beladi", img: "https://picsum.photos/id/331/1000/600", position: "Frontend Developer" },
				{ name: "Abdullah Waleed Arfaj", img: "https://picsum.photos/id/331/1000/600", position: "Angular Developer" },
				{ name: "Mohammed Abo-Mohammed Ba Atwah", img: "https://picsum.photos/id/331/1000/600", position: "Backend Developer" },
				{ name: "Mohammed Abo-Mohammed Ba Iraqi", img: "https://picsum.photos/id/331/1000/600", position: "Backend Developer" },
			],
			count: 4,
			meta: [
				{
					name: "name",
					type: String
				},
				{
					name: "img",
					type: String
				},
				{
					name: "position",
					type: String
				},
				{
					name: "link",
					type: String
				},
			]
		},
		backgroundColor: {
			type: String,
			default: "#81f9cf88",
		},
		dark: {
			type: Boolean,
			default: false,
		},
		textColor: {
			type: String,
			default: "grey--text text--lighten-2"
		}
	}
})