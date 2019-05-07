import styled from 'styled-components'

const Pane = styled.div`
  padding: 0 3px;

  & + & {
    margin-top: 60px;
  }
`

export default Pane
