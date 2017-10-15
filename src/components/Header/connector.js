import { connect } from 'react-redux'
import { addTodo } from '../../domains/todo/actions'

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => dispatch(addTodo(text))
})

export default connect(
  null,
  mapDispatchToProps
)
