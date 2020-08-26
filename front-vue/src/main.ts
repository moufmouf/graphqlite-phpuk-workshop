import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import ApolloClient from 'apollo-boost'
import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:81/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueCompositionAPI)
Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: h => h(App)
}).$mount('#app')
