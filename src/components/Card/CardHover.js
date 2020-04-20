import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { Colors, Styles, Metrics , Fonts} from '../../Themes'
import Tilt from 'react-tilt'

const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Tilt{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        border-radius: 16px;
        transform-style: preserve-3d;
    }
    .Tilt-inner{
        transform: translateZ(20px);
    }

`

const CardHover = props => {
    return(
        <Card>
            <Tilt className="Tilt" 
            options={{ max : 35, scale: 1, reverse: true, easing: 'cubic-bezier(.03,.98,.52,.99)' }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"> 👽 </div>
            </Tilt>
        </Card>
    )
}
export default CardHover