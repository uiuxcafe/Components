import React from "react"
import styled from 'styled-components'
import { HrDiv } from '../../components'
import { Styles, Metrics, Colors, Fonts } from '../../Themes';
import Link from 'gatsby-link'


const Wrapper = styled(Styles.Wrapper())`
    padding: 16px 16px;
    background: ${Colors.dp06};
    position: relative;
    :first-child {
        border-top: 1px ${Colors.W10} solid;
        & .border{
            display: none;
        }
    }
    :last-child{
        border-bottom: 1px ${Colors.W10} solid;
    }
    :only-child {
        border: 1px ${Colors.W10} solid;
    }
`
const Icon = styled.img`
    display: inline-block;
    vertical-align: middle;
`
const Title = styled(Fonts.p())`
    color: ${Colors.W87};
    display: inline-block;
    padding-left: 8px;
`
const Description = styled(Fonts.p())`
    color: ${Colors.W87};
    display: inline-block;
    float: right;
    padding-right: ${Metrics.px6};
`

const CellSetting = props => (
    <Wrapper>
        <HrDiv className='border' borderColor={Colors.W10} left='44px' right='0px'/>
        <Link to={props.href}>
        <Icon src={props.icon} />
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        </Link>
    </Wrapper>
)

export default CellSetting