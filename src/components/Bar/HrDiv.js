import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
    background: ${props => props.borderColor};
    height: 1px;
    width: calc(100% - ${props => props.left} - ${props => props.right});
    left: ${props => props.left};
    position: absolute;
    top: 0px;
`

const HrDiv = props => (
    <Wrapper className='border'
        borderColor={props.borderColor} 
        left={props.left}
        right={props.right}
    />
)

export default HrDiv