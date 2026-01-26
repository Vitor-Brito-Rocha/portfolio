import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

/* optional italic styles */
import '@fontsource/roboto/100-italic.css'
import '@fontsource/roboto/300-italic.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900-italic.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createI18n} from "vue-i18n";
const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    components,
    directives,
})
const app = createApp(App)
const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages: {
        en: {
            message: {
                hello: 'hello world'
            }
        },
        ja: {
            message: {
                hello: 'こんにちは、世界'
            }
        },
        pt: {
            message: {
                hello: 'Oi rs'
            }
        }
    }
})
app.use(i18n)
app.use(router)
app.use(vuetify)
app.mount('#app')
