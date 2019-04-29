import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import personName from './components/about/contact/personName'

export const routes = [
  {path:'/',name:'homeLink',components:{
      default:Home,
      "orderingGuide": OrderingGuide,
      "delivery": Delivery,
      "history": History
    }},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin,
    /*beforeEnter: (to,from,next) => {  /!* beforeEnter 路由独享的守卫 *!/
      if(to.path == '/login' || to.path == '/register'){
        next();
      }else{
        alert("您还没有登录，请先登录！");
        next('/login');
      }
    }*/
  },
  {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path:'/about/contact',name:'contactLink',redirect:'/personname',component:Contact,children:[
          {path:'/phone',name:'phoneNumber',component:Phone},
          {path:'/personname',name:'personName',component:personName}
        ]},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/history',name:'historyLink',component:History},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
    ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'},/*路由未匹配的话 跳转*/
];

// 全局守卫
/*router.beforeEach((to,from,next)=> {
  // alert("您还没有登录，请先登录！")
  // next()

  // 判断store.gettes.isLogin == false
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    alert("您还没有登录，请先登录！");
    next('/login');
  }
});*/

// 后置钩子
/*router.afterEach((to,from) => {
  alert("after each")
});*/

/*const router = new VueRouter({
  routes: [
    {path:'/',component:Home},
    {path:'/menu',component:Menu},
  ],
  mode:'histroy'
});*/
