import webCommon from '@config/common';

import App from '@pages/systemParam/systemParam.vue'

// 加载webCommon
Vue.prototype.webCommon = webCommon;

new Vue({
  render: h => h(App)
}).$mount('#app')