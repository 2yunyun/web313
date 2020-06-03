import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from '@/lang/en'
import zhLocale from '@/lang/zh'
import { getStore } from '@util/store'
Vue.use(VueI18n)
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
    ...Avue.locale.en,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
    ...Avue.locale.zh,
  }
}

const i18n = new VueI18n({
  locale: getStore({ name: 'language' }) || 'zh',
  messages
})

export default i18n