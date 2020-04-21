import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby';
import { Images, Styles } from '../../Themes'

const Card = styled(Styles.gxcCard())`
    max-width: 350px;
    min-height: 380px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background-color: #FFF;
`

const ImgCard = styled.div`
   
`

const ImgArea = styled.div`
    background-color: #f5f5f5;
    display: block;
    -webkit-transition: 0.35s;
    transition: 0.35s;
    min-height: 124px;
    display: block;
`

const CardBG = styled.img`
    width: 100%;
`

const TextGroup = styled.div`
    padding: 20px 35px;
    text-align: center;
    max-height: 450px;
    background-color: #FFF;
    h4{
        font-size: 24px;
        padding: 15px 0px;
        color: #000;
    }
    .text{
        padding: 0px 0px;
        position: relative;
        color: #000;
    }
    .icon{
        box-shadow: inherit;
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
        <ImgCard>
            <ImgArea className='ImgArea'>
                <CardBG className='Img' src={props.img} alt='' />
            </ImgArea>
            <TextGroup className='TextGroup'>
                <h4>網路託管中心 NOC</h4>
                <p className='text'>企業建置維運如何降低成本，提高競爭力</p>
                <More className='More'>
                    <p>查看解決方案</p>
                    <img src={Images.arrow_right} alt='' className='icon' />
                </More>
            </TextGroup>
        </ImgCard>
	</Card>
)
export default gxcCardB