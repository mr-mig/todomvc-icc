import { createAction } from 'redux-actions'

export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'

export const applyFilter = createAction('filter://APPLY_FILTER')
