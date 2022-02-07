import Vue from "vue";
import VueResource from "vue-resource";
/* 
vue-resource serve para fazer as requisiçoes para api assim como o axios ,
*/

Vue.use(VueResource)

/* com ele teremos aaceso a propiedade $http no Vue que usaremos para fazer as resquisições 

*/
const http = Vue.http;
/* 
atribuimos a uma constante para adicionarmos a base url da api

*/
http.options.root = 'http://localhost:8000/'

/* 

com a base url da api definida basta chamar chamar apenas a rota da api desejada 
EX: 

this.$http.get('login');

*/

export { http }

/* exportando a propiedade */