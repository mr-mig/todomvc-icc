import { connect } from 'react-redux'
import { globalQuery } from '../../lib/selectorHelpers'
import { completedCount } from '../../state/domains/todo/selectors'
import { filteredTodoIds } from '../../state/relations/filter-list-todo/filteredTodoIds'
import { completeAll } from '../../state/domains/list/actions'

const mapStateToProps = globalQuery([
    filteredTodoIds,
    completedCount
  ],
  (todoIds, completedCount) => ({
    todoIds,
    completedCount
  }))

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCompleteAllClick: () => dispatch(completeAll(ownProps.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
