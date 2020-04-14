import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import 'moment/locale/zh-tw'
// import { BorderAll } from '../../components'
import { Styles, Colors } from '../../Themes'
import ProgressiveImage from "react-progressive-graceful-image";

const Wrapper = styled(Styles.CellWrapper())`
  grid-template-columns: 100%;
  padding: 14px 16px;
`
const SourceArea = styled.div`
  padding-bottom: 10px;
`
const SourceImg = styled.img`
  display: inline-block;
  width: 25px;
  height: auto;
`
const Author = styled(Styles.CellExcerpt())`
  display: inline-block;
  margin: inherit;
  padding-left: 8px;
`
const Date = styled(Styles.CellDate())`
  display: inline-block;
  float: right;
  margin: inherit;
`
const ContentArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`
const TextArea = styled(Styles.CellTextArea())`
  min-width: auto;
  padding: 0px;
  padding-right: 5px;
`
const Title = styled(Styles.CellTitle())`
`
const ImgArea = styled(Styles.CellImgArea())`
  max-height: 67px;
  max-width: 100px !important;
  justify-self: end;
  align-self: end;
  overflow: hidden;
  border-radius: 6px;
  
`
const Thumbnail = styled(Styles.CellThumbnail())`
  width: auto;
  height: auto;
  max-width: 100px;
`

const DiscuList = props => (
  <a href={props.source_url}>
    <Wrapper onClick={props.onClick}>
      <SourceArea>
        <SourceImg src={props.img_profile} />
        <Author>{props.author}</Author>
        <Date>
          <Moment fromNow>{props.created_at}</Moment>
        </Date>
      </SourceArea>
      <ContentArea>
        <TextArea>
          <Title>{props.title}</Title>
        </TextArea>
        <ImgArea>
          <ProgressiveImage
            // src={props.thumbnail}
            placeholder="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder_featured_image.svg"
          >
            {src => <Thumbnail src={props.thumbnail} alt="" />}
          </ProgressiveImage>
          {/* <Thumbnail src={props.thumbnail} /> */}
        </ImgArea>
      </ContentArea>
    </Wrapper>
    {/* <BorderAll borderColor={Colors.W10} /> */}
  </a>
)

export default DiscuList
