import React from "react"
import styled from 'styled-components'
import { Colors, Styles } from '../../Themes'
import Typewriter from 'typewriter-effect'

const Wrapper = styled(Styles.Wrapper())`
    width: auto;
    overflow: inherit;
    span{
        color: #FFF;
    }
    .Typewriter{
        display: grid;
        grid-template-columns: repeat(2,auto);
        align-items: center;
    }
    .typeCursor{
        color: ${Colors.PRed};
        font-size: 28px;
        align-self: center;
        margin-top: -3px;
    }
`
  
const ReactTyper = props => (
    <Wrapper>
        <Typewriter
            options={{
                strings: ['我是示範第一句', '我是範例第二句','而我現在是第三句'],
                autoStart: true,
                loop: true,
                cursorClassName: 'typeCursor',
                wrapperClassName: 'typeWrapper'
            }}
        />
    </Wrapper>
)

export default ReactTyper