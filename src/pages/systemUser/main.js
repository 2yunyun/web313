import webCommon from '@config/common';
import store from '@/store';
import i18n from '@/lang'

import App from '@pages/systemUser/systemUser.vue'

// 加载webCommon
Vue.prototype.webCommon = webCommon;

new Vue({
  store,
	i18n,
	render: h => h(App)
}).$mount('#app')