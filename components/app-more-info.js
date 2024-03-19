Vue.component("app-more-info", {
	template: `
		<v-card :img="img" flat tile :dark="dark">
			<v-card flat tile :style="'background-color:' + backgroundColor" class="fill-height">
				<v-card-text class="pa-5 pt-12 text-center">
					<div class="white--text display-1 pt-5">{{ title }}</div>
				</v-card-text>
				<v-card-text>
					<v-row class="fill-height">
						<v-col cols="12">
							<v-container class="text-center">
								<v-row :justify="center ? 'center' : ''">
									<v-col :cols="dense?12:6" :md="dense?6:4" :lg="dense?4:3" v-for="(item, i) in items" :key="i">
										<v-row no-gutters class="fill-height pb-4">
											<v-col cols="12">
												<v-avatar size="120" style="border: 2px solid #3f51b5" v-if="outlined">
													<v-icon size="80">{{ item.icon }}</v-icon>
												</v-avatar>
												<v-avatar size="120" v-else>
													<v-icon size="80">{{ item.icon }}</v-icon>
												</v-avatar>
												<div class="pt-5 headline font-weight-medium" :class="textColor">
													{{ item.title }}
												</div>
											</v-col>
											<v-col cols="12" align-self="end" v-if="item.action">
												<div class="pt-5 headline">
													<v-btn color="indigo" class="white--text text-none">{{ item.action }}</v-btn>
												</div>
											</v-col>
											<v-col cols="12" align-self="end" v-if="item.description">
												<div class="pt-5 body-1">
													<div color="indigo" class="white--text text-none">
														{{ item.description }}
													</div>
												</div>
											</v-col>
										</v-row>
									</v-col>
								</v-row>
							</v-container>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-card>
	`,
	type: "Features",
	props: {
		img: {
			type: String,
			default: "https://picsum.photos/id/321/1000/600"
		},
		title: {
			type: String,
			default: "Unlimited Web Hosting"
		},
		caption: {
			type: String,
			default: "Web Hosting Made EASY And AFFORDABLE"
		},
		items: {
			type: Array,
			default: () => [
				{ title: "Unlimited disk space", icon: "mdi-script-text-outline", action: "Read More +", description: "" },
				{ title: "Unlimited disk space", icon: "mdi-scale-balance", action: "Read More +", description: "" },
				{ title: "Unlimited disk space", icon: "mdi-finance", action: "Read More +", description: "" },
				{ title: "Unlimited disk space", icon: "mdi-domain", action: "Read More +", description: "" },
			],
			count: 4,
			meta: [
				{
					name: "title",
					type: String
				},
				{
					name: "icon",
					type: String
				},
				{
					name: "action",
					type: String
				},
				{
					name: "action",
					type: String
				},
			]
		},
		backgroundColor: {
			type: String,
			default: "#82FAF088",
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		dark: {
			type: Boolean,
			default: false,
		},
		textColor: {
			type: String,
			default: "grey--text text--lighten-2"
		},
		dense: {
			type: Boolean,
			default: false,
		},
		center: {
			type: Boolean,
			default: false,
		},
	}
})