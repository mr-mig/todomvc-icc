const dependencies = []

export const register = (type, predicate, actionCreator) => {
  if (!type || typeof type !== 'string') throw new Error('Invalid dependent action type')
  if (!predicate || (typeof predicate !== 'function' && !Array.isArray(predicate))) throw new Error('Invalid predicate')
  if (!actionCreator || typeof actionCreator !== 'function') throw new Error('Invalid action creator')

  dependencies.push({ type, predicate, actionCreator })
}

export default store => next => action => {

  const oldState = store.getState()
  const result = next(action)

  if (!action.type) return result

  dependencies.forEach(({ type, predicate, actionCreator }) => {
    if (action.type !== type) return
    const predicates = Array.isArray(predicate) ? predicate.slice() : [predicate]
    let dependentAction = null

    while (predicates.length && dependentAction !== false) {
      const pred = predicates.shift()
      dependentAction = pred(oldState, store.getState(), action.payload) || false
    }

    if (dependentAction !== false && dependentAction !== undefined && dependentAction !== null) {
      if (Array.isArray(dependentAction.payloads)) {
        dependentAction.payloads.forEach(payload => store.dispatch(actionCreator(payload)))
      }
      else {
        store.dispatch(actionCreator(dependentAction.payload))
      }
    }
  })

  return result
}
