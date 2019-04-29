import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savePosition){
    /* scrollBehavior 方法接收 to 和 from 路由对象。
    第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。 */

    // return { x:0,y:100 }
    // return { selector: '.btn'}

    if(savePosition){
      return savePosition;
    }else {
      return{ x:0,y:0}
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
