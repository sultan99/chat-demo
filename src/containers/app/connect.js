import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectTheme} from 'store/settings/selectors'

const props = createStructuredSelector({
  mode: selectTheme,
})

export default connect(props)
