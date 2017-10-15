import { connect } from 'react-redux'
import { uniqueQuery } from '../../lib/selectorHelpers'
import { todoById } from '../../state/queries'
import { editTodo, deleteTodo } from '../../domains/todo/actions'

const mapStateToProps = uniqueQuery([todoById], todo => ({ todo }))

const mapDispatchToProps = dispatch => ({
  onSaveAfterEdit: (id, text) => {
    if (text.length === 0) {
      dispatch(deleteTodo(id))
    } else {
      dispatch(editTodo(id, text))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
