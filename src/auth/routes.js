export default [

    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ './view/login')
      }
]