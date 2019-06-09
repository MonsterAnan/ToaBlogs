import VueRouter from 'vue-router';

//导入对应的路由组件
import HomeContainer from './components/home/home.vue'
import AboutContainer from './components/about/about.vue'
import ArchiveContainer from './components/archive/archive.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则
	    { path: '/', redirect: '/home' },
	    { path: '/home', component: HomeContainer },
	    { path: '/about', component: AboutContainer },
	    { path: '/archive', component: ArchiveContainer }
  ]
  
})

// 把路由对象暴露出去

export default router