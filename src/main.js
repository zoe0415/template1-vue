import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import "tailwindcss/tailwind.css"
import "./assets/tailwind.css"
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faBars,
  faSun,
  faLeaf,
  faHistory,
  faPhone,
  faEnvelope,
  faMap,
  faClock,
} from "@fortawesome/free-solid-svg-icons"
import { faUser, faComment, faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(faBars, faSun, faLeaf, faHistory, faUser, faComment, faPhone, faEnvelope, faMap, faClock, faHeart)
Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
