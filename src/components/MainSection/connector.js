import { connect } from 'react-redux'
import { globalQuery } from '../../lib/selectorHelpers'
import { filteredTodoIds, completedCount } from '../../state/queries'
import { completeAll } from '../../domains/todo/actions'

const mapStateToProps = globalQuery([
    filteredTodoIds,
    completedCount
  ],
  (todoIds, completedCount) => ({
    todoIds,
    completedCount
  }))

const mapDispatchToProps = dispatch => ({
  onCompleteAllClick: () => dispatch(completeAll())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
