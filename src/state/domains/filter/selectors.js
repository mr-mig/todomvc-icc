import { createSelector } from 'reselect'

export const filterIndex = createSelector(state => state.filter, _ => _)
export const filter = createSelector(filterIndex, index => index.value)
