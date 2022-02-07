export default [
    {
        path: '/exemplo',
        name: 'Exemplo',
        component: () => import(/* webpackChunkName: "about" */ './exemplo')
      }
]