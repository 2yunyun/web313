import Vue from 'vue';
import axios from '@router/axios';
import VueAxios from 'vue-axios';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';


import router from '@router/router';

import i18n from '@/lang' 
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

Vue.use(router);
Vue.use(VueAxios, axios);
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});
Vue.use(Avue, {
  i18n: (key, value) => i18n.t(key, value)
});

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


