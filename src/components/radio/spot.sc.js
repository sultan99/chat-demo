import styled from 'styled-components'

const Spot = styled.span`
  background-color: white;
  border-radius: 50%;
  border: 1px solid #c9c9c9;
  box-sizing: border-box;
  height: 18px;
  left: 0px;
  position: absolute;
  top: 2px;
  width: 18px;

  &:after {
    border-radius: 50%;
    content: "";
    height: 10px;
    left: 3px;
    position: absolute;
    top: 3px;
    transition: background 0.25s linear;
    width: 10px;
  }
`

export default Spot
