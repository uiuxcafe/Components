import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby';
import { Images, Styles } from '../../Themes'

const Card = styled(Styles.gxcCard())`
    max-width: 350px;
    max-height: 250px;
    height: 95%;
    width: 95%;
    min-width: 350px;
    min-height: 250px;
    &:hover{
        .TextGroup,.More{
            -moz-transition-duration: 0.5s;
            -webkit-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            transition: 0.5s;
        }
        .TextGroup{
            -webkit-transform: translateY(-70px);
            -ms-transform: translateY(-70px);
            transform: translateY(-70px);
        }
        .More{
            opacity: 1 !important;
            -webkit-transform: translateY(-15px);
            -ms-transform: translateY(-15px);
            transform: translateY(-15px);
        }
    }
`
const ImgArea = styled.div`
    width: 100%;
    height: 160px;
    overflow: hidden;
`

const CardBG = styled.img`
    width: 100%;
`

const TextGroup = styled(Styles.gxcTextGroup())`
    height: 250px;
    width: 100%;
    word-wrap: break-word;
    top: 130px;
    padding: 15px 30px;
    h4{
        font-size: 24px;
        padding: 8px 0px;
        color: #000;
    }
    .text{
        margin: 0;
        padding-bottom: 35px;
        font-size: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #000;
    }
    .icon{
        position: absolute;
    }
`

const More = styled.div`
    opacity: 0;
    margin-left: 160px;
    padding-top: 30px;
    display: inline;
    color: #1F9CFF;
    p{
        font-weight: 500;
        font-size: 20px;
        color: #1F9CFF;
        display: inline;
    }
    &:hover{
        text-decoration: underline;
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition: 0.3s;
    }
    
`

const gxcCardA = props => (
	<Card>
        <ImgArea className='ImgArea'>
            <CardBG className='Img' src={props.img} alt='' />
        </ImgArea>
        <TextGroup className='TextGroup'>
            <h4>運輸業</h4>
            <p className='text'>快速且彈性的海外建置服務</p>
            <More className='More'>
                <p>查看此案例</p>
                <img src={Images.arrow_right} alt='' className='icon' />
            </More>
        </TextGroup>
	</Card>
)
export default gxcCardA