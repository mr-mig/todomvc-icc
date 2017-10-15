import { connect } from 'react-redux'
import { globalQuery } from '../../lib/selectorHelpers'
import { clearCompleted } from '../../domains/todo/actions'
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

const mapDispatchToProps = dispatch => ({
  onClearCompleted: () => dispatch(clearCompleted()),
  onFilterClick: (value) => dispatch(applyFilter(value))
})

export default connect(
  mapState,
  mapDispatchToProps
)


