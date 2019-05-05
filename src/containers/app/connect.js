import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectLanguage, selectTheme} from 'store/settings/selectors'

const props = createStructuredSelector({
  mode: selectTheme,
  language: selectLanguage,
})

export default connect(props)
