let dependencies = []

export const mapActions = (descriptor) => {
  dependencies = dependencies
    .concat(Object.keys(descriptor).map(key => ({
      type: key,
      fn: descriptor[key]
    })))
}

export default store => next => action => {

  const oldState = store.getState()
  const result = next(action)

  if (!action.type) return result

  dependencies.forEach(({ type, fn }) => {
    if (action.type === type) {
      fn(action.payload, store.dispatch, store, oldState)
    }
  })

  return result
}
