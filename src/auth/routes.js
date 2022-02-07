export default [

    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ './view/login')
      }
]