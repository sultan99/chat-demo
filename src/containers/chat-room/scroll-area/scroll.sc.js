import styled from 'styled-components'

const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: -17px;
  overflow-y: scroll;

  > :first-child {
    margin-top: auto;
  }
  > div + div {
    margin-top: 24px;
  }
`

export default ScrollArea
