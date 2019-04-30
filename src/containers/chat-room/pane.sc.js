import styled from 'styled-components'

const Pane = styled.div`
  flex-grow: 1;
  overflow-y: scroll;

  > div + div {
    margin-top: 24px;
  }
`

export default Pane
