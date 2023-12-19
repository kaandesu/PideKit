import { createApp } from 'vue'
import { usePideKitUI } from './pidekitLibrary'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(
  usePideKitUI({
    showLogs: true, // default: true
    components: { 
      globallyRegister: false, // default: false
      exclude: []
    },
    plugins: {
      globallyRegister: true, // default: true
      exclude: ['customPlugin']
    },
    directives: {  
      globallyRegister: true, // default: true
      exclude: [] 
    },
  })
)
app.mount('#app')
