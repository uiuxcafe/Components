import React from 'react'
import styled from 'styled-components'
import { Styles, Metrics } from '../../Themes'

const Wrapper = styled(Styles.TableView())`
  max-width: inherit;
  margin: 0 auto;
  padding: 0;
  ${'' /* background: #FFF; */}
  position: relative;
  ${'' /* top: 50%;
  transform: translateY(-50%);
  padding: 50px; */}
  align-self: center;
`

const WCardView = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default WCardView