import webCommon from '@config/common';

import App from '@pages/systemTenant/systemTenant.vue'

// 加载webCommon
Vue.prototype.webCommon = webCommon;

new Vue({
  render: h => h(App)
}).$mount('#app')