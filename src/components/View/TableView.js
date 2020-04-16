import React from 'react'
import styled from 'styled-components'
import { Styles } from '../../Themes'

const Wrapper = styled(Styles.TableView())`
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
