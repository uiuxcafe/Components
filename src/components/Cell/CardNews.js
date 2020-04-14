import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Moment from 'react-moment'
import 'moment/locale/zh-tw'
import { Styles, Colors } from '../../Themes'
import ProgressiveImage from "react-progressive-graceful-image";

const Wrapper = styled(Styles.CellWrapper())`
  grid-template-columns: repeat(1, 100%);
  height: auto;
  padding: 8px 0 10px;
  &:hover{
    background: inherit;
    cursor: inherit;
  }
`
const Card = styled.div`
  border-radius: 8px;
  background: ${Colors.dp06};
  overflow: hidden;
  position: relative;
  &:hover{
    transition: .4s;
    background: ${Colors.dp24};
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }
`
const ImgArea = styled(Styles.CellImgArea())`
  height: 200px;
  overflow: hidden;
`
const Thumbnail = styled(Styles.CellThumbnail())`
  border-radius: 0;
`
const TextArea = styled(Styles.CellTextArea())`
  padding: 0px 16px 12px;
  border-top: 1px solid ${Colors.W10}
`
const Title = styled(Styles.CellTitle())`
  padding-top: 8px;
`
const Excerpt = styled(Styles.CellExcerpt())``
const Date = styled(Styles.CellDate())`
  margin: 0 auto;
`
const BoxShadow = styled.div`
  box-shadow: inset 0 0 3px rgba(255,255,255,0.4), inset 0 1px 1px rgba(255,255,255,0.3);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0
`

const CardNews = props => (
  
    <Wrapper>
      <Card>
        <BoxShadow/>
        <ImgArea>
          <ProgressiveImage
            src={props.thumbnail}
            placeholder="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder_featured_image.svg"
          >
            {src => <Thumbnail src={src} alt="" />}
          </ProgressiveImage>
        </ImgArea>
        <TextArea>
          <Title>{props.title}</Title>
          <Excerpt>{props.excerpt}</Excerpt>
          <Date>
            <Moment format='YYYY年 MMM Do'>{props.created_at}</Moment>
          </Date>
        </TextArea>
      </Card>
    </Wrapper>
  
)

export default CardNews
