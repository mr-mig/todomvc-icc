import { createSelector } from 'reselect'
const identity = id => id

export const fromProps = key => (state, props) => props[key]
export const getIdFromProps = fromProps('id')

export const makeUniqueGetter = getter => createSelector(getter, identity)

// Merges the data from state and props
// The resulting fn will be like that:
// (state, ownProps) -> mergeFn( baseSelector(state), propGetter(ownProps) ) -> props
export const makeMergeGetter = (baseSelector, propGetter, mergeFn) => createSelector(
  baseSelector,
  propGetter,
  mergeFn
)

// Creates a unique selector for every unique entity (component with unique ID).
// Should be used as a replacement for mapStateToProps
export const uniqueQuery = (selectors, mapper) => {
  const uniqueSelectors = selectors.map(makeUniqueGetter)

  return (/* state , ownProps */) => createSelector(
    uniqueSelectors,
    mapper
  )
}

// should be used instead of uniqueQuery for components which has no IDs (are singletons)
export const globalQuery = createSelector

// should be used for getting entities by ID from specified domain
export const selectEntityFromDomain = domainName =>
  makeMergeGetter(
    state => state[domainName],
    getIdFromProps,
    (indexedDomain, id) => typeof indexedDomain.byId.get === 'function'
      ? indexedDomain.byId.get(id)
      : indexedDomain.byId[id]
  )
