import React from 'react'
import styled from 'styled-components'
// import { BorderAll } from '../../components'
import { Styles, Colors } from '../../Themes'
import ProgressiveImage from "react-progressive-graceful-image";

const Wrapper = styled(Styles.CellWrapper())`
  grid-template-columns: 140px 1fr;
  justify-items: center;
`
const ImgArea = styled(Styles.CellImgArea())`
  height: 100px;
  position: relative;
`
const Thumbnail = styled(Styles.CellThumbnail())`
`
const ImgShadow = styled.div`
  height: 100px;
  width: 140px;
  border-radius: 6px;
  background: linear-gradient(
    224.3deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`
const Number = styled.h3`
  color: ${Colors.W87};
  position: absolute;
  z-index: 100;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  margin: 0;
`
const TextArea = styled(Styles.CellTextArea())`
  justify-self: start;
`
const Title = styled(Styles.CellTitle())`
  -webkit-line-clamp: 1;
`
const Excerpt = styled(Styles.CellExcerpt())`
  -webkit-line-clamp: 3;
`

const CellEpisode = props => (
  <div>
    <Wrapper onClick={props.onClick}>
      <ImgArea>
        <ProgressiveImage
          src={props.thumbnail}
          placeholder="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder_featured_image.svg"
          >
            {src => <Thumbnail src={src} alt="" />}
        </ProgressiveImage>
        {/* <Thumbnail src={props.thumbnail} /> */}
      <ImgShadow />
        <Number>{props.episode}</Number>
      </ImgArea>
      <TextArea>
        <Title> {props.title} </Title>
        <Excerpt>{props.excerpt}</Excerpt>
      </TextArea>
    </Wrapper>
    {/* <BorderAll borderColor={Colors.W10} /> */}
  </div>
)

export default CellEpisode
