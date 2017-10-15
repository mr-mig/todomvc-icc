import { connect } from 'react-redux'
import { uniqueQuery } from '../../lib/selectorHelpers'
import { todoById } from '../../state/queries'

const mapStateToProps = uniqueQuery([todoById], todo => ({ todo }))

export default connect(mapStateToProps)
