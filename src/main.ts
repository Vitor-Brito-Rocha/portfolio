import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@/main.css'
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
import {i18n, loadLocale} from "@/i18n.ts";
import Particles from 'vue3-particles'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    background: '#FFFFFF',
                    surface: '#FFFFFF',
                    error: '#D32F2F',
                    success: '#2E7D32',
                }
            },
            dark: {
                dark: true,
                colors: {
                    primary: '#90CAF9',
                    secondary: '#B39DDB',
                    background: '#121212',
                    surface: '#1E1E1E',
                    error: '#EF5350',
                    success: '#66BB6A',
                }
            }
        }
    }
})
async function bootstrap() {
    const locale = navigator.language.toLowerCase().split('-')[0] ?? navigator.language.toLowerCase();

    await loadLocale(locale); // ⬅️ carrega pt.ts ou en.ts

    const app = createApp(App)
    app.use(i18n)
    app.use(router)
    app.use(Particles)
    app.use(vuetify)
    app.mount('#app')
}
bootstrap();

