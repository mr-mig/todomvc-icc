import { handleActions } from 'redux-actions'

import { APPLY_FILTER, SHOW_ALL } from './constants'

const initialState = {
  value: SHOW_ALL
}

export default handleActions({
  [APPLY_FILTER]: applyFilter
}, initialState)

function applyFilter(state, { payload }) {
  state.value = payload
  return { ...state }
}

