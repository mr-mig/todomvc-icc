import { connect } from 'react-redux'
import { uniqueQuery } from '../../lib/selectorHelpers'
import { getTodoById } from '../../state/queries'
import { completeTodo } from '../../domains/todo/actions'

const mapStateToProps = uniqueQuery([getTodoById], todo => ({ todo }))

const mapDispatchToProps = dispatch => ({
  onClick: (id) => dispatch(completeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
