import { createApp } from 'vue'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)

app.use(router).mount('#app')
