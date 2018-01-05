import * as types from '../mutation-types'

const state = {
  isLogin: false,
  userInfo: {}
}

// 异步操作放置在action中
const actions = {
  login ({ commit, state }, loginInfo) {
    const uname = loginInfo.username
    window.setTimeout(() => {
      let userInfo = {
        username: uname
      }
      commit(types.LOGIN_SUCCESS, userInfo)
    }, 3000)
  },
  logout ({ commit, state }) {
    window.setTimeout(() => {
      commit(types.LOGOUT_SUCCESS)
    }, 3000)
  }
}

// 此处只进行同步操作
const mutations = {
  [types.LOGIN_SUCCESS] (state, userInfo) {
    state.userInfo = userInfo
    state.isLogin = true
  },
  [types.LOGIN_FAIL] (state) {
    state.userInfo = {}
    state.isLogin = false
  },
  [types.LOGOUT_SUCCESS] (state) {
    state.userInfo = {}
    state.isLogin = false
  },
  [types.LOGOUT_FAIL] (state) {
    // TODO:
  }
}

export default {
  state,
  actions,
  mutations
}
