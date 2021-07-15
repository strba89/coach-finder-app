import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import BaseWrapper from './components/UI/slots/BaseWrapper.slot'
import BaseBadge from './components/UI/slots/BaseBadge.slot'
import BaseButton from './components/UI/slots/BaseButton.slot'
import BaseSpiner from  './components/UI/BaseSpiner'


const app = createApp(App)


app.component('BaseWrapper', BaseWrapper)
app.component('BaseBadge', BaseBadge)
app.component('BaseButton', BaseButton)
app.component('BaseSpiner', BaseSpiner)


app.use(router)
app.use(store)

app.mount('#app')
