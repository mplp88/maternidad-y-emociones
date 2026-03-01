import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faHome,
  faBlog,
  faSignInAlt,
  faSignOutAlt,
  faEdit,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { configure } from 'vue-gtag'

library.add(faUser, faHome, faBlog, faSignInAlt, faSignOutAlt, faEdit, faArrowLeft, faArrowRight)

const app = createApp(App)

app.use(createPinia())
app.use(router)
configure(
  {
    config: {
      id: 'G-N3WXR6LRND',
    },
  },
  router,
)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
