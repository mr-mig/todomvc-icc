import { connect } from 'react-redux'
import { globalQuery } from '../../lib/selectorHelpers'
import { clearCompleted } from '../../domains/list/actions'
import { applyFilter } from '../../domains/filter/actions'
import { completedCount, activeCount, filter } from '../../state/queries'

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


