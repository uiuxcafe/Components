import React from "react"
import styled from 'styled-components'
import { Colors, Styles, Fonts } from '../../Themes'

const Wrapper = styled(Styles.Wrapper())`
    width: auto;
    overflow: inherit;
`

const Text = styled(Fonts.p())`
    color: ${Colors.W87};
    position: relative;
    margin: 0 auto;
    width: 100%;
    border-right: 2px solid rgba(255,255,255);
    font-size: 18px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(35) 1s alternate both,
               blinkTextCursor 500ms steps(44) infinite normal;
    }
    @keyframes typewriter{
    from{width: 0;}
    to{width: 100%;}
    }
    @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255);}
    to{border-right-color: transparent;}
    }
`
  
const GameTyper = props => (
    <Wrapper>
        <Text >{props.text}</Text>
    </Wrapper>
)

export default GameTyper