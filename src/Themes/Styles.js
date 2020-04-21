import styled from 'styled-components'
import {
    Colors,
    Metrics,
} from '../Themes';

const Styles = {
    Wrapper: () => styled.div`
        max-width: ${Metrics.mobile};
        margin: 0 auto;
        overflow: hidden;
    `,
    TableView: () => styled.div`
        ${'' /* max-width: ${Metrics.mobile}; */}
        margin: 0 auto;
        padding: 0;
        background: ${Colors.dp00};    
    `,
    CollectionView: () => styled.div`
        display: grid;
        grid-template-columns: repeat(3, 33.3%);
        max-width: ${Metrics.mobile};
        margin: 0 auto;
        justify-self: center;
        align-self: center;
        justify-content: center;
        min-height: 160px;
        padding: 0px 16px;
        @media (max-width: 425px) {
            grid-template-columns: repeat(3, 33.3%);
        }
    `,
    CollectionThumbnail: () => styled.img`
        width: auto;
        height: 160px;
        min-width: 100%;
    `,
    CellWrapper: () => styled(Styles.Wrapper())`
        display: grid;
        grid-column-gap: 8px;
        margin: 0 auto;
        padding: ${Metrics.px3} ${Metrics.px4};
        &:hover{
            transition: .4s;
            background: ${Colors.dp08};
            cursor: pointer;
        }
    `,
    CellTitle: () =>  styled.h3`
        color: ${Colors.W87};
        font-size: ${Metrics.px4};
        letter-spacing: 1px;
        line-height: ${Metrics.px6};
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    `,
    CellDate: () =>  styled.p`
        color: ${Colors.W60};
        // color: rgba(255, 255, 255, 0.50);
        font-size: ${Metrics.px3};
        letter-spacing: 1px;
        line-height: 14px;
        padding-top: 4px;
    `,
    CellExcerpt: () => styled.p`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0 auto;
        color: ${Colors.W60};
        // color: rgba(255, 255, 255, 0.68);
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 22px;
        padding-top: 4px;
    `,
    CellTextArea: () => styled.div`
        padding: 0px 4px;
    `,
    CellImgArea: () => styled.div`
        width: 100%;
    `,
    CellThumbnail: () => styled.img`
        width: 100%;
        height: 100%;
        border-radius: 6px;
        object-fit: cover;
    `,
    DetailWrapper: () => styled.div`
        max-width: ${Metrics.mobile};
        margin: 0 auto;
        padding: 8px 15px;
    `,
    DetailTitle:() => styled.h2`
        font-size: ${Metrics.px5};
        letter-spacing: 1px;
        line-height: 28px;
        margin: 5px auto;
        color: ${Colors.W87};
    `,
    DetailSubTitle:() => styled.h4`
        color: ${Colors.W60};
        // color: rgba(255, 255, 255, 0.50);
        font-size: ${Metrics.px3};
        line-height: 20px;
        letter-spacing: 1px;
        padding-bottom: 10px;
    `,
    DetailDate: () =>  styled.p`
        margin: 0 auto;
        color: ${Colors.W60};
        font-size: ${Metrics.px3};
        letter-spacing: 1px;
        line-height: 20px;
    `,
    DetailExcerpt:() => styled.div`
        color: ${Colors.W87};
        font-size: ${Metrics.px4};
        letter-spacing: 1px;
        line-height: 24px;
        img {
          width: 100%;
        }
    `,
    Select:() => styled.select`
        display: inline-block;
        float: right;
        background: ${Colors.W10};
        border: 0px;
        color: ${Colors.W87};
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        padding: 4px 8px;
        height: 28px;
        width: 72px;
        border-radius: 6px;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        background-repeat: no-repeat;
        background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
        background-position: right 12px top 12px, right 8px top 12px;
        background-size: 4px 4px, 4px 4px;
    `,
    card: () => styled.div`
    background: ${Colors.G50};
    border-radius: ${Metrics.pxM};
    transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);
    &:hover {
      transform: translateY(-3px)   scale(0.95, 0.95);
      ${'' /* box-shadow:inset 0px 0px 0px 1px ${Colors.W10}, 10px 15px 40px 0 ${Colors.B50};    */}
      }
    `,
    gxcCard:() => styled.div`
        border: 0px;
        -webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: .8rem !important;
        -webkit-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: #FFF;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        &:hover{
            -webkit-box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.15);
            box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.15);
        }
    `,
    gxcTextGroup:() => styled.div`
        position: absolute;
        background: #FFF;
        color: #000;
        -webkit-transition:  0.35s;
        transition:  0.35s;
        overflow: hidden;
    `
  

}
export default Styles