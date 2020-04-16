import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { Colors, Metrics, Styles , Fonts } from '../../Themes'

const Card = styled(Styles.card())`
	max-height: 300px;
	${'' /* max-width: 400px; */}
	padding-bottom: 8px;
	justify-self: center;
    align-self: center;
	position: relative;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
`

const ImgShadow = styled.div`
	box-shadow: inset 0 0 3px rgba(255,255,255,0.3);
	border-radius: ${Metrics.pxM};
	position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
	z-index: 10;
`

const SectionCover = styled.img`
	width: 100%;
	max-height: 200px;
	border-radius: ${Metrics.pxM} ${Metrics.pxM} 0 0;
	border-bottom: 1px solid ${Colors.W10};
	margin: 0;
`

const TitleGroup = styled.div`
	padding: ${Metrics.px3} ${Metrics.pxM};
`

const SectionTitle = styled(Fonts.h4())`
	color:  ${Colors.G10};
	margin: 0;
`
const SectionSubTitle = styled(Fonts.p())`
	color:  ${Colors.G10};
	margin: 0;
	font-size: 20px;
`
const SectionText =  styled(Fonts.span())`
	color:  ${Colors.G30};
	font-size: 16px;
	margin: 0;
`

const CardWorks = props => (
	<Card className={`${props.radius} ${props.shadow}`}>
		<Link to={props.href}>
			<SectionCover src={props.cover}/>
			<ImgShadow />
			<TitleGroup>
				<SectionTitle>{props.title}</SectionTitle>
				<SectionSubTitle>{props.product}</SectionSubTitle>
				<SectionText>{props.type}</SectionText>
				<SectionText> | </SectionText>
				<SectionText>{props.year}</SectionText>
			</TitleGroup>
		</Link>
	</Card>
)
export default CardWorks