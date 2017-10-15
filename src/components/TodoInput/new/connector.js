import { connect } from 'react-redux'
import { addTodo } from '../../../domains/todo/actions'

const mapDispatchToProps = dispatch => ({
  onSave: (text) => { 
    if (text.length !== 0) {
      dispatch(addTodo(text))
    }
  }
})

export default connect(
  null,
  mapDispatchToProps
)

