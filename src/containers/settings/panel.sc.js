import styled from 'styled-components'

const Panel = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 50px;

  > button {
    background-color: #f85878;
    bottom: 20px;
    color: white;
    right: 24px;
    position: absolute;

    > svg {
      height: 16px;
    }
  }
`

export default Panel
