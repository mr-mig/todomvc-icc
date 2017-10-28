import { connect } from 'react-redux'
import { globalQuery } from '../../lib/selectorHelpers'
import { clearCompleted } from '../../state/transactions/list->todo/clearCompleted'
import { applyFilter } from '../../state/domains/filter/actions'
import { completedCount, activeCount } from '../../state/domains/todo/selectors'
import { filter } from '../../state/domains/filter/selectors'

const mapState = globalQuery([
  completedCount, activeCount, filter
],
  (completedCount, activeCount, filter) => ({
    completedCount,
    activeCount,
    filter
  }))

const mapDispatchToProps = (dispatch, ownProps)=> ({
  onClearCompleted: () => dispatch(clearCompleted(ownProps.id)),
  onFilterClick: (value) => dispatch(applyFilter(value))
})

export default connect(
  mapState,
  mapDispatchToProps
)


