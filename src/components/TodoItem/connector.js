import { connect } from 'react-redux'
import { uniqueQuery } from '../../lib/selectorHelpers'
import { getTodoById } from '../../state/queries'

const mapStateToProps = uniqueQuery([getTodoById], todo => ({ todo }))

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
