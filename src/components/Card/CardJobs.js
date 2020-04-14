import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { Colors, Styles, Metrics , Fonts} from '../../Themes'

const Card = styled(Styles.card())`
	max-width: 400px;
	margin: ${Metrics.px3} 8px;
	max-height: 360px;
	margin: 0 auto;
`
const CoverGroup = styled.div`
	background: ${Colors.W5};
	border-radius: ${Metrics.pxM} ${Metrics.pxM} 0 0;
	border-bottom: ${Colors.W10} 1px solid;
	text-align: center;
	padding: 0 15px;
`

const SectionCover = styled.img`
	max-width: 400px;
	width: 100%;
	height: auto;
	max-height: 196px;
`
const TitleGroup = styled.div`
	padding: ${Metrics.pxM};
	overflow: scroll;
	height: 140px;
	::-webkit-scrollbar {
      display: none;
    }
`

const SectionTitle = styled(Fonts.h2())`
	color: ${props => props.linkColor};
	margin: 0;
`

const SectionText = styled(Fonts.h5())`
	color: ${Colors.G10};
	line-height: ${Metrics.pxM};
	margin: ${Metrics.pxS} 0 ${Metrics.pxS};
`

const CardJobs = props => (
	<Card>
		<CoverGroup>
			<SectionCover src={props.cover}/>
		</CoverGroup>
		<TitleGroup>
			<SectionTitle linkColor={props.linkColor}>{props.title}</SectionTitle>
			<SectionText>{props.text}</SectionText>
		</TitleGroup>
	</Card>
)
export default CardJobs