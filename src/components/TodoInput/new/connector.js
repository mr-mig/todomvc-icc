import { connect } from 'react-redux'
import { addTodo } from '../../../domains/todo/actions'
import { addNewTodoToList } from '../../../domains/list/actions'

const mapDispatchToProps = (dispatch, ownProps)=> ({
  onSave: (text) => { 
    if (text.length !== 0) {
      dispatch(addTodo(text))
      dispatch(addNewTodoToList(ownProps.listId))
    }
  }
})

export default connect(
  null,
  mapDispatchToProps
)

