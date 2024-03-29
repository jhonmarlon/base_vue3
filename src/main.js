import { createApp } from 'vue'
import '../public/css/styles.css'
import App from './App.vue'

// Animate css
import 'animate.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(vuetify).mount('#app')
