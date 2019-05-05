import styled from 'styled-components'
import {palette} from 'common/style'

const Menu = styled.div`
  background-color: ${palette(`skin`)};
  box-sizing: border-box;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  max-width: 600px;
  padding: 24px;
  position: fixed;
  width: 100%;
  z-index: 100;
`

export default Menu
