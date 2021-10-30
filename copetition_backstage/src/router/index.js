import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    // redirect: '/home/hello',
    component: ()=> import('../views/Home.vue'),
    children: [
      {
        path: '',
        redirect: '/home/hello'
      },
      {
        path: 'hello',
        name: 'Hello',
        component: ()=> import('../components/Home/Hello.vue')
      },
      {
        path: 'apply',
        name: 'CpeApply',
        component: ()=> import('../components/Home/CpeApply.vue')
      },
      {
        path: 'admin',
        name: 'CpeAdmin',
        component: ()=> import('../components/Home/CpeAdmin.vue')
      },
      {
        path: 'notice',
        name: 'CpeNotice',
        component: ()=> import('../components/Home/CpeNotice.vue')
      },
      {
        path: 'certificate',
        name: 'Cpecertificate',
        component: ()=> import('../components/Home/Cpecertificate.vue')
      },
      {
        path: 'message',
        name: 'Cpemessage',
        component: ()=> import('../components/Home/Cpemessage.vue')
      },
      {
        path: 'user',
        name: 'CpeUser',
        component: ()=> import('../components/Home/CpeUser.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
