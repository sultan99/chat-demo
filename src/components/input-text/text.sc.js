import styled from 'styled-components'
import {palette} from 'common/style'

const Text = styled.div`
  margin: 0;
  background-color: ${palette(`skin`)};
  box-sizing: border-box;
  font-size: 15px;
  height: 100%;
  padding: 20px 78px 20px 24px;
  width: 100%;

  &:empty:not(:focus):before{
    content:attr(data-text);
    color: ${palette(`stone`)};
  }

  &:active, &:focus {
    outline: none;
  }

  &:focus {
    color: ${palette(`tattoo`)};
  }
`

export default Text
