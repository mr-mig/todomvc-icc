import { connect } from 'react-redux'
import { globalQuery } from '../../lib/selectorHelpers'
import { allTodos } from '../../state/queries'
import { clearCompleted, completeAll } from '../../domains/todo/actions'

const mapStateToProps = globalQuery(allTodos, (todos) => ({ todos }))

const mapDispatchToProps = dispatch => ({
  clearCompleted: () => dispatch(clearCompleted()),
  completeAll: () => dispatch(completeAll())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
