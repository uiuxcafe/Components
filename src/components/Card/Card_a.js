import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby';
import { Images } from '../../Themes'

const Card = styled.div`
    border: 0px;
    -webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: .8rem !important;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    overflow: hidden;
    position: relative;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    min-width: 350px;
    min-height: 400px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover{
        -webkit-box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.15);
        box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.15);
        .Img{
            box-shadow: 0px 15px 25px #D2D3D4;
            transform: translate3d(0,0px,0) ;
            -moz-transition-duration: 0.5s;
            -webkit-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            }
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
                transition: .2s;
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

const ImgCard = styled.div`
`

const ImgArea = styled.div`
    background-color: #f5f5f5;
    display: block;
    height: 325px;
    -webkit-transition: 0.35s;
    transition: 0.35s;
`

const CardBG = styled.img`
`

const TextGroup = styled.div`
    position: absolute;
    background: #FFF;
    color: #000;
    height: 600px;
    z-index: 1000;
    -webkit-transition:  0.35s;
    transition:  0.35s;
    overflow: hidden;
    margin-top: 160px;
    top: 140px;
    padding: 15px 0px 0px 25px;
    h4{
        font-size: 24px;
        padding: 15px 0px;
        color: #000;
    }
    .text{
        padding: 0px 0px;
        opacity: 0;
        position: relative;
        color: #000;
    }
    .icon{
        box-shadow: inherit;
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

const CardA = props => (
	<Card>
        <ImgCard>
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
        </ImgCard>
	</Card>
)
export default CardA