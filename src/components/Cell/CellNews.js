import React from 'react'
import styled from 'styled-components'
// import { BorderAll } from '../../components'
import { Styles, Colors } from '../../Themes'
import Link from 'gatsby-link'
import ProgressiveImage from "react-progressive-graceful-image";

const Wrapper = styled(Styles.CellWrapper())`
    grid-template-columns: 140px 1fr;
`
const ImgArea = styled(Styles.CellImgArea())`
    height: 100px;
`
const Thumbnail = styled(Styles.CellThumbnail())`
`
const TextArea = styled(Styles.CellTextArea())`
`
const Title = styled(Styles.CellTitle())`
`
const Excerpt = styled(Styles.CellExcerpt())`
`
// const Date = styled(Styles.CellDate())`
//     margin: 0 auto;
// `

const News = props => (
    <Link to={props.href}>
        <Wrapper>
            <ImgArea>
                <ProgressiveImage
                    src={props.thumbnail}
                    placeholder="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder_featured_image.svg"
                >
                    {src => <Thumbnail src={src} alt="" />}
                </ProgressiveImage>
                {/* <Thumbnail src={props.thumbnail} /> */}
            </ImgArea>
            <TextArea>
                <Title>{props.title}</Title>
                <Excerpt>{props.excerpt}</Excerpt>
            </TextArea>
        </Wrapper>
        {/* <BorderAll borderColor={Colors.W10} /> */}
    </Link>
)

export default News