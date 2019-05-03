import styled from 'styled-components'

const Section = styled.div`
  padding: 0 3px;

  > :nth-child(2) {
    min-width: 150px;
  }

  & + & {
    margin-top: 60px;
  }
`

export default Section
