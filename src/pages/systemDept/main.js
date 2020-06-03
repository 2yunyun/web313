import webCommon from '@config/common';
import router from '@router/router';
import store from '@/store';
import i18n from '@/lang'

import App from '@pages/systemDept/systemDept.vue'

// 加载webCommon
Vue.prototype.webCommon = webCommon;

new Vue({
	router,
  store,
	i18n,
	render: h => h(App)
}).$mount('#app')