import { connect } from 'react-redux'
import { globalQuery } from '../../lib/selectorHelpers'
import { filteredTodoIds, completedCount } from '../../state/queries'
import { completeAll } from '../../domains/list/actions'

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
