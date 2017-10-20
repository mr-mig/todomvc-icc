import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { App } from './components/App'
import rootReducer from './state'
import middlewares from './middlewares'
import 'todomvc-app-css/index.css'

const store = createStore(rootReducer,
  compose(
    middlewares,
    // allow redux dev tools usage
    typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
