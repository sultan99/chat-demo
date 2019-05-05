import AppNavigation from 'components/navigation'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectMessageCount} from 'store/chat/selectors'

const props = createStructuredSelector({
  messageCount: selectMessageCount
})

const enhance = connect(props)

export default enhance(AppNavigation)
