import styled from 'styled-components'
import Metrics from './Metrics';

const type = {
  base: 'PingFang TC,"微軟正黑體", sans-serif',
}

const Fonts = {
  handWrite: 'AsparagusSprouts-o4Po',
  h1: () => styled.h1`
    font-family: ${type.base} ;
    font-weight: bold;
    font-size: 60px;
    line-height: 84px;
    @media (max-width: ${Metrics.tablet}) {
		  font-weight: bold;
      font-size: 40px;
      line-height: inherit;
  	}
  `,
  h2: () => styled.h2`
    font-family: ${type.base} ;
    font-weight: bold;
    font-size: 48px;
    line-height: 52px;
    @media (max-width: ${Metrics.tablet}) {
		  font-weight: bold;
      font-size: 36px;
  	}
  `,
  h3: () => styled.h3`
    font-family: ${type.base} ;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;

    @media (max-width: ${Metrics.tablet}) {
		  font-weight: bold;
      font-size: 28px;
  	}
  `,
  h4: () => styled.h4`
    font-family: ${type.base} ;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    @media (max-width: ${Metrics.tablet}) {
		  font-weight: bold;
      font-size: 20px;
  	}
  `,
  h5: () => styled.h5`
    font-family: ${type.base} ;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    @media (max-width: ${Metrics.tablet}) {
		  font-weight: bold;
      font-size: 20px;
  	}
  `,
  h6: () => styled.h6`
    font-family: ${type.base} ;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    @media (max-width: ${Metrics.tablet}) {
		  font-weight: bold;
      font-size: 14px;
  	}
  `,
  p: () => styled.p`
    font-family: ${type.base} ;
    font-weight: regular;
    font-size: 16px;
    `
    ,
    span: () => styled.span`
    font-family: ${type.base} ;
    font-weight: regular;
    font-size: 20px;
    @media (max-width: ${Metrics.tablet}) {
		  font-weight: regular;
      font-size: 20px;
  	}
    `
}

export default Fonts;