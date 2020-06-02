import Vue from 'vue'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

import App from '@pages/workSend/workSend.vue'

import store from '@/store';
import {loadStyle} from '@util/util'
import Element from 'element-ui';
import '@/styles/common.scss';

import basicBlock from '@components/basic-block/main'
import basicContainer from '@components/basic-container/main'
import * as urls from '@config/env';
import {
  iconfontUrl,
  iconfontVersion
} from '@config/env';

import website from '@config/website';

Vue.use(Avue);
Vue.use(Element);

//注册全局容器
Vue.component('basicContainer', basicContainer);
Vue.component('basicBlock', basicBlock);
// 加载相关url地址
Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key];
});
// 加载website
Vue.prototype.website = website;
// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele));
});

Vue.config.productionTip = false



new Vue({
  render: h => h(App)
}).$mount('#app')