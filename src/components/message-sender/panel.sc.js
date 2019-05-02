import styled from 'styled-components'

const Panel = styled.div`
  box-shadow: 0 0 100px 0px rgba(129, 141, 163, 0.2);
  flex-shrink: 0;
  margin: 0 -24px;
  min-height: 60px;
  position: relative;

  > button {
    position: absolute;
    right: 21px;
    top: 4px;

    &:not(:disabled) {
      top: -4px;
    }
    transition: top 0.3s;
  }
`

export default Panel
