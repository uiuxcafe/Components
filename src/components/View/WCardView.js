import React from 'react'
import styled from 'styled-components'
import { Styles } from '../../Themes'

const Wrapper = styled(Styles.TableView())`
  max-width: inherit;
  margin: 0 auto;
  padding: 0;
  position: relative;
  align-self: center;
  background: inherit;
`

const WCardView = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default WCardView
