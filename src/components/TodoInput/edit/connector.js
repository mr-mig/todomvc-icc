import { connect } from 'react-redux'
import { editTodo, deleteTodo } from '../../../state/domains/todo/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSave: (text) => {
    text.length === 0
      ? dispatch(deleteTodo(ownProps.id))
      : dispatch(editTodo(ownProps.id, text))

    ownProps.onSave && ownProps.onSave(ownProps.id, text)
  }
})

export default connect(
  null,
  mapDispatchToProps
)


