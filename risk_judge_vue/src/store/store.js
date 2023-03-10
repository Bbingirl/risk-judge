import Vue from 'vue'
import Vuex from 'vuex'
// 数据持久化插件
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import mutations  from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    plugins:[createPersistedState()]
});