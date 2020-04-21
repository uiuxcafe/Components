import React from 'react'
import styled from 'styled-components'
// import { BorderAll } from '../../components'
import { Styles } from '../../Themes'
import Link from 'gatsby-link'
import ProgressiveImage from "react-progressive-graceful-image";

const Wrapper = styled(Styles.CellWrapper())`
    grid-template-columns: 109px 1fr;
    justify-items: center;
    align-items: center;
`
const ImgArea = styled(Styles.CellImgArea())`
    height: 160px;
`
const Thumbnail = styled(Styles.CellThumbnail())`
    margin: 0 auto;
`
const TextArea = styled(Styles.CellTextArea())`
    justify-self: start;
`
const Title = styled(Styles.CellTitle())`
`
const Date = styled(Styles.CellDate())`
    padding: 8px 0;
`
const ActorArea = styled.div`

`
const ActorTitle= styled(Styles.CellExcerpt())`
    display: inline-block;
    padding-top: 0;
`
const Excerpt = styled(Styles.CellExcerpt())`
    display: inline-block;
    padding-right: 10px;
    display: inline-block;
    padding-top: 0;
`

const CellDrama = props => (
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
                <Date> {props.year} {props.region}</Date>
                <ActorArea>
                    <ActorTitle>類型：</ActorTitle>
                    {props.drama_types
                        ? props.drama_types.map((i, index) => (
                            <Excerpt key={`${i.type.name}-${index}`}>{i.type.name}</Excerpt>
                        ))
                        : null}
                </ActorArea>
                <ActorArea>
                    <ActorTitle>主演：</ActorTitle>
                    {props.drama_actors
                        ? props.drama_actors.map((i, index) => (
                            <Excerpt key={`${i.actor.name}-${index}`}>{i.actor.name}</Excerpt>
                        ))
                        : null}
                </ActorArea>
            </TextArea>
        </Wrapper>
        {/* <BorderAll borderColor={Colors.W10} /> */}
    </Link>
)

export default CellDrama