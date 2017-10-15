import { connect } from 'react-redux'
import { editTodo } from '../../../domains/todo/actions'

const mapDispatchToProps = dispatch => ({
  onSave: (id, text) => dispatch(editTodo(id, text)),
})

export default connect(
  null,
  mapDispatchToProps
)


