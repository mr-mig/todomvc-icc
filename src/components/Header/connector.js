import { connect } from 'react-redux'
import { uniqueQuery } from '../../lib/selectorHelpers'
import { listById } from '../../state/queries'

const mapStateToProps = uniqueQuery(
  [listById],
  (list) => ({ list })
)

export default connect(
  mapStateToProps
)
