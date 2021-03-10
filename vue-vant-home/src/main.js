import Vue from 'vue'
import App from './App.vue'
import {Button,Notify,Icon} from 'vant'

Vue.use(Button)
Vue.use(Notify)
Vue.use(Icon)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
