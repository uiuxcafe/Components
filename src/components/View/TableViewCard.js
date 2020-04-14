import React from 'react'
import styled from 'styled-components'
import { Styles, Metrics } from '../../Themes'

const Wrapper = styled(Styles.TableView())`
  max-width: inherit;
  margin: 0 auto;
  padding: 0;
  background: #1A1F22;
  position: relative;
  ${'' /* top: 50%;
  transform: translateY(-50%);
  padding: 50px; */}
  align-self: center;
`

const TableView = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}


export default TableView
