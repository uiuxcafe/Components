import React from "react"
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 93%;
    margin: 0px auto;
`
const Border = styled.div`
    background: ${props => props.borderColor};
    height: 1px;
`

const BorderAll = props => (
    <Wrapper>
        <Border borderColor={props.borderColor} />
    </Wrapper>
)

export default BorderAll