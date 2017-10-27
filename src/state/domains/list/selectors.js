import { createSelector } from 'reselect'
import { selectEntityFromDomain } from '../../../lib/selectorHelpers'

export const listById = selectEntityFromDomain('list')
export const listIndex = createSelector(
  state => state.list,
  _ => _
)
export const allLists = createSelector(
  listIndex,
  index => Object.values(index.byId)
)
