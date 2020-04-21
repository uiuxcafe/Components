import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby';
import { Images, Styles } from '../../Themes'

const Card = styled(Styles.gxcCard())`
    max-width: 350px;
    min-height: 375px;
`

const ImgArea = styled.div`
    min-height: 124px;
`

const CardBG = styled.img`
    width: 100%;
`

const TextGroup = styled.div`
    padding: 20px 35px;
    text-align: center;
    max-height: 450px;
    h4{
        font-size: 24px;
        padding: 15px 0px;
        color: #000;
    }
    .text{
        color: #000;
    }
    .icon{
        position: absolute;
    }
`

const More = styled.div`
    position: absolute;
    bottom: 30px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    display: inline;
    p{
        color: #1F9CFF;
        display: inline;
    }
`

const gxcCardB = props => (
	<Card>
        <ImgArea>
            <CardBG src={props.img} alt='' />
        </ImgArea>
        <TextGroup>
            <h4>網路託管中心 NOC</h4>
            <p className='text'>企業建置維運如何降低成本，提高競爭力</p>
            <More>
                <p>查看解決方案</p>
                <img src={Images.arrow_right} alt='' className='icon' />
            </More>
        </TextGroup>
	</Card>
)
export default gxcCardB