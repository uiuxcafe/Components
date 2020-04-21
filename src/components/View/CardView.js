import React from 'react'
import styled from 'styled-components'
import { Styles} from '../../Themes'

const Wrapper = styled(Styles.TableView())`
  max-width: inherit;
  margin: 0 auto;
  padding: 0;
  ${'' /* background: #FFF; */}
  position: relative;
  ${'' /* top: 50%;
  transform: translateY(-50%);
  padding: 50px; */}
  background: inherit;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2,auto);
  grid-gap: 20px;
`

const CardView = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default CardView
