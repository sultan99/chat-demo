import React, {useRef} from 'react'
import Panel from './panel.sc'
import {useMount} from 'common/utils'

function scrollDown(ref) {
  const node = ref.current
  window.requestAnimationFrame(() =>
    window.scrollTo(0, node.scrollHeight)
  )
}

function ScrollArea({children}) {
  const refScroll = useRef()
  useMount(() => scrollDown(refScroll))
  scrollDown(refScroll)

  return (
    <Panel ref={refScroll}>
      {children}
    </Panel>
  )
}

export default ScrollArea
