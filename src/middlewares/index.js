import { applyMiddleware, compose } from 'redux'
import dependentActions from './dependentActions'

export default compose(applyMiddleware(dependentActions))
