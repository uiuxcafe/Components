import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Styles, Metrics } from '../../Themes'

const Wrapper = styled(Styles.TableView())`
  min-width: 350px;
  align-self: center;
`

const SettingView = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
export default SettingView
