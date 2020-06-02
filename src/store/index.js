import Vue from 'vue'
import Vuex from 'vuex'
import user from '@store/modules/user'
import common from '@store/modules/common'
import tags from '@store/modules/tags'
import logs from '@store/modules/logs'
import dict from '@store/modules/dict'
import getters from '@store/getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common,
    logs,
    tags,
    dict
  },
  getters,
})

export default store
