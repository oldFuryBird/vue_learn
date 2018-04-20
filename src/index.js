import Vue from 'vue'
import App from './app.vue'
import './style/test.css'
import './imgs/todo.jpg'
import './style/test-stylus.styl'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render:(h)=>h(App)
}).$mount(root)
