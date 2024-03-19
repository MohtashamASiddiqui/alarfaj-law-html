Vue.component("app-toolbar-ar", {
    template: `
        <div>
			<v-app-bar color="primary" height="80"> 
				<v-toolbar-items>
					
					<v-btn text tile href="/ar/">
						<v-img src="/Logo/topHalfBlueLogo.png" :height="60" :width="165"></v-img>
					</v-btn>
				</v-toolbar-items>
				<v-spacer></v-spacer>
				<template v-if="$vuetify.breakpoint.mdAndUp">
					<template v-for="(section, index) in sections">
						<v-btn text color="white" class="text-none" x-large :key="section.id" @click="goto(section)">
							{{ section.title }}
						</v-btn>
						<v-divider vertical class="mx-2" v-if="index != sections.length -1" :key="section.id+'_'"></v-divider>
					</template>
					<v-divider vertical class="mx-2"></v-divider>
					<v-btn text color="white" class="text-none" x-large @click="en()">
							English 
						</v-btn>
				</template>
				<v-app-bar-nav-icon v-else @click="drawer = !drawer" dark></v-app-bar-nav-icon>
			</v-app-bar>

			<v-navigation-drawer color="primary" dark v-model="drawer" temporary app v-if="!$vuetify.breakpoint.mdAndUp">
				<v-list-item href="/ar/">
					<v-list-item-content>
						<v-img src="/Logo/topHalfBlueLogo.png"></v-img>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>

				<v-list nav>
					<v-list-item v-for="section in sections" :key="section.id" @click="goto(section)">
						<v-list-item-content>
							<v-list-item-title>
								{{ section.title }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="en()">
							<v-list-item-content>
								<v-list-item-title>English</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
				</v-list>
				
			</v-navigation-drawer>
        </div>
    `,
    data() {
        return {
            drawer: false,
            sections: [{
                    id: '#about',
                    title: "من نحن"
				},
				{
					id:"#news",
					title:"أخبار ومقالات"
				},
				{
					id: '#expertise',
					title: 'خبراتنا'
				},
                {
                    id: '#people',
                    title: "فريق العمل"
                },
                {
                    id: '#contact',
                    title: "تواصل معنا"
				},
            ],
            url: document.location
        }
    },
    mounted() {
        var thisVue = this;
        setTimeout(() => {
            if (location.hash) {
                thisVue.$vuetify.goTo(location.hash)
            }
        }, 500);
    },
    methods: {
        onScroll() {
            this.offsetTop = document.documentElement.scrollTop;
        },
        goto(section) {
			this.drawer = false;
			if (location.pathname == "/ar/") {
				this.$vuetify.goTo(section.id);
			} else {
				location.href = "/ar/" + section.id;
			}
		},
		en() {
			window.location.pathname = window.location.pathname.substring(3);
		}
    }
})