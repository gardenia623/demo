import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import plan from '@/components/Plan_config'
import Page1 from '@/components/Page1'
import plan_add from '@/components/Plan_add'
import probe from '@/components/Probe'
import test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
      children:[
      	{
      		path: '/nav/plan',
      		component: plan
      	},{
      		path: '/nav/page1',
      		component: Page1
      	},{
      		path: '/nav/planAdd',
      		component: plan_add
      	},{
      		path: '/nav/probe',
      		component: probe
      	},{
      		path: '/nav/test',
      		component: test
      	}
      ]
    }
  ]
})
