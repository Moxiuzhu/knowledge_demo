import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

//处理点击当前路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news',
      component: Home,
      children: [
        {
          path: 'news',
          component: () => import("../components/News.vue")
        },
        {
          path: 'about',
          component: () => import("../components/About.vue")
        }
      ]
    }
  ]
})
