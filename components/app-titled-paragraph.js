Vue.component("app-titled-paragraph", {
	template: `
	<v-row class="py-6" :style="'background-color:'+backgroundColor">
		<v-col cols="12">
            <v-container :style="'background-color:'+backgroundColor">
                <v-row align="center">
                    <v-col>
                        <div class="display-1">{{ title }}</div>
						<p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
                    </v-col>
                </v-row>
			</v-container>
		</v-col>
	</v-row>
    `,
    type: "Story?",
    props: {
        title: {
            type: String,
            default: "About Us"
        },
        paragraphs: {
            type: Array,
            default:() => [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae numquam quaerat omnis impedit laboriosam quas veniam quasi vero vel dolore, reprehenderit sapiente neque minima beatae, quos optio. Nulla quisquam est ex placeat autem repellendus pariatur aperiam vero impedit. Architecto obcaecati esse nobis culpa iure quod quae qui beatae, quisquam incidunt laboriosam corrupti officiis consequuntur quam pariatur debitis! Odio, temporibus veniam fugit possimus excepturi fugiat alias corporis, magnam aspernatur quod accusantium suscipit dolores inventore facere."
                ]
        },
        backgroundColor:{
            type: String,
            default:"#8ee4af"
        },
    }
})