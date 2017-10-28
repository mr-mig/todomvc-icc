import { handleActions } from 'redux-actions'

import { applyFilter, SHOW_ALL } from './actions'

const initialState = {
  value: SHOW_ALL
}

export default handleActions({
  [applyFilter](state, { payload }){
    state.value = payload
    return { ...state }
  }
}, initialState)


