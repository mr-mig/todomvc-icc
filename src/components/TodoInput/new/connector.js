import { connect } from 'react-redux'
import { addNewTodoToList } from '../../../state/transactions/todo->list/addNewTodoToList'

const mapDispatchToProps = (dispatch, ownProps)=> ({
  onSave: (text) => {
    dispatch(addNewTodoToList({
      text,
      listId: ownProps.listId
    }))
  }
})

export default connect(
  null,
  mapDispatchToProps
)

