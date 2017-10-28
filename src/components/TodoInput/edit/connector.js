import { connect } from 'react-redux'
import { editOrTotallyDeleteTodo } from '../../../state/transactions/todo->list/editOrTotallyDeleteTodo'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSave: (text) => {
    editOrTotallyDeleteTodo(ownProps.id, text)

    ownProps.onSave && ownProps.onSave(ownProps.id, text)
  }
})

export default connect(
  null,
  mapDispatchToProps
)


