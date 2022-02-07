export default [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ './Home')
      }
]