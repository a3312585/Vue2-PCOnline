import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 首页路由
import HomeComponent from  '@/components/Home/HomeComponent'
import JingXuan from '@/components/Home/JingXuan/JingXuan'
import YouHui from '@/components/Home/YouHui/YouHui'
import HaiTao from '@/components/Home/HaiTao/HaiTao'
import FaXian from '@/components/Home/FaXian/FaXian'
import YuanChuang from '@/components/Home/YuanChuang/YuanChuang'

import CategoryComponent from '@/components/Category/CategoryComponent'
import ProfileComponent from '@/components/Profile/ProfileComponent'

export default new Router({
  routes: [
  	{
  		path: '',
  		component: HomeComponent
  	},
  	{
  		path: '/home',
  		component: HomeComponent,
      children: [
          {
            path: 'JingXuan',
            component: JingXuan
          },
          {
            path: 'YouHui',
            component: YouHui
          },
          {
            path: 'HaiTao',
            component: HaiTao
          },
          {
            path: 'FaXian',
            component: FaXian
          },
          {
            path: 'YuanChuang',
            component: YuanChuang
          }
      ]
  	},
  	{
  		path: '/category',
  		component:CategoryComponent
  	},
  	{
  		path: '/profile',
  		component: ProfileComponent
  	}
  ]
})
