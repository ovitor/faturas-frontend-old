import Vue from 'vue'
import Vuex from 'vuex'
import { database } from 'firebase'

// local modules
import base from './modules/base'

// external modules
import auth from '@/components/Auth/store/auth'
import dashboard from '@/components/Faturas/Dashboard/store/dashboard'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    base,
    auth,
    dashboard
  },

  state: {
    app_title: 'Faturas',
    app_subtitle: 'Simplicidade',
    loading: false
  },

  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },

  actions: {
    setAppConfiguration ({commit, state}, payload) {
      database().ref('app-configurations')
        .update({
          title: state.app_title,
          subtitle: state.app_subtitle
        })
    }
  }

})
