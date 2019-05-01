import styled from 'styled-components'

const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  overflow-y: auto;
  padding-bottom: 12px;

  > div + div {
    margin-top: 24px;
  }
`

export default Dialogs
