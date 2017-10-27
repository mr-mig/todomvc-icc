import { connect } from 'react-redux'
import { uniqueQuery } from '../../lib/selectorHelpers'
import { listById } from '../../state/domains/list/selectors'

const mapStateToProps = uniqueQuery(
  [listById],
  (list) => ({ list })
)

export default connect(
  mapStateToProps
)
