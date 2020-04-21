import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby';
import { Images, Styles } from '../../Themes'

const Card = styled(Styles.gxcCard())`
    min-width: 350px;
    min-height: 400px; 
    &:hover{
        .TextGroup{
            padding: 45px 30px 10px 30px;
            -webkit-transform: translateY(-320px);
            -ms-transform: translateY(-320px);
            transform: translateY(-320px);
            -moz-transition-duration: 0.7s;
            -webkit-transition-duration: 0.7s;
            -o-transition-duration: 0.7s;
            p{
                opacity: 1;
                transition: 1s;
            }
        }
        .More{
            opacity: 1 ;
            transition-delay: .4s;
            -webkit-transform: translateY(-10px);
            -ms-transform: translateY(-10px);
            transform: translateY(-10px);
            -moz-transition-duration: 0.7s;
            -webkit-transition-duration: 0.7s;
            -o-transition-duration: 0.7s;
        }
    }
`

const ImgArea = styled.div`
    background-color: #f5f5f5;
    display: block;
    height: 325px;
`

const CardBG = styled.img`
`

const TextGroup = styled(Styles.gxcTextGroup())`
    position: absolute;
    top: 300px;
    height: 600px;
    padding: 15px 0px 0px 25px;
    h4{
        font-size: 24px;
        padding: 15px 0px;
        color: #000;
    }
    .text{
        opacity: 0;
        color: #000;
    }
    .icon{
        position: absolute;
    }
`

const More = styled.div`
    opacity: 0;
    position: absolute;
    bottom: 280px;
    right: 55px;
    display: inline;
    p{
        font-weight: 500;
        font-size: 20px;
        z-index: 1000;
        color: #1F9CFF;
        display: inline;
    }
    
`

const gxcCardA = props => (
	<Card>
        <ImgArea className='ImgArea'>
            <CardBG className='Img' src={props.img} alt='' />
        </ImgArea>
        <TextGroup className='TextGroup'>
            <h4>簡化的網路架構</h4>
            <p className='text'>簡化網際網路連線架構，避免國內網路節點層層轉接。</p>
            <More className='More'>
                <p>進一步了解</p>
                <img src={Images.arrow_right} alt='' className='icon' />
            </More>
        </TextGroup>
	</Card>
)
export default gxcCardA