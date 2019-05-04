import React, {useRef} from 'react'
import Panel from './panel.sc'
import Scroll from './scroll.sc'

function scrollDown(ref) {
  const node = ref.current
  window.requestAnimationFrame(() =>
    node && node.scrollTo(0, node.scrollHeight)
  )
}

function ScrollArea({children}) {
  const refScroll = useRef()
  scrollDown(refScroll)

  return (
    <Panel>
      <Scroll ref={refScroll}>
        {children}
      </Scroll>
    </Panel>
  )
}

export default ScrollArea
