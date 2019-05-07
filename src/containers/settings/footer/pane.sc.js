import styled from 'styled-components'
import {palette} from 'common/style'

const Footer = styled.div`
  bottom: 0;
  margin-left: -24px;
  max-width: 600px;
  min-height: 60px;
  position: fixed;
  width: 100%;

  > button {
    background-color: ${palette(`danger`)};
    bottom: 20px;
    color: ${palette(`tattoo`)};
    position: absolute;
    right: 24px;

    > svg {
      height: 16px;
    }
  }

`

export default Footer
