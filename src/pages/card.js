import React, { useState } from 'react'
import { Link } from "gatsby"
import {
  SEO,
  Layout,
  TableViewCard,
  CardJobs,
  CardWorks,
  GxcCardA,
  GxcCardB,
  GxcCardC,
  WCardView,
} from '../components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import { Images,Colors } from '../Themes'
import styled from 'styled-components'

const Demo = styled.div`
  display: grid;
  grid-template-columns: repeat(2,auto);
  min-height: 500px;
`

const OptionArea = styled.div`
`

const Option = styled.div`
  padding-top: 20px;
  label{
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    padding-top: 15px;
    padding-left: 5px;
  }
`

const SecondPage = () => {
  const [index, setIndex] = useState(0)
  const [radius,setRadius] = useState(false)
  const [shadow,setShadow] = useState(false)

  function openRadius(){
    setRadius(prevRadius => !radius)
    console.log(radius)
  }

  function openShadow(){
    setShadow(prevShadow => !shadow)
    console.log(shadow)
  }

  function setDefult(){
    setRadius(false)
    setShadow(false)
  }

  
  return(
  <Layout>
    <SEO title="Card" />
    <Tabs
      value={index}
      className='ForumTab'
      variant={'fullWidth'}
      onChange={(event, value) => setIndex(value)}
    >
      <Tab label='Card_a' onClick={setDefult} />
      <Tab label='Card_b' onClick={setDefult} />
      <Tab label='Card_c' onClick={setDefult} />
      <Tab label='Card_d' onClick={setDefult} />
      <Tab label='Card_e' onClick={setDefult} />
    </Tabs>
    <SwipeableViews class="uiux" index={index} onChangeIndex={setIndex} enableMouseEvents>
        <Demo>
          <TableViewCard>
            <CardJobs 
              cover={Images.fulltime_card_designer}
              linkColor={Colors.PRed}
              title='UI UX Designer'
              text='UI / UX 設計師' 
              radius={radius ? '' : 'noRadius'}
              shadow={shadow ? '' : 'noShadow'}
            />
          </TableViewCard>
          <OptionArea>
            <Tab label='Configuration' />
            <Option>
              <form>
                <input type="checkbox" id='radius' name="Radius" value="Radius" onClick={openRadius} />
                <label htmlFor="radius">Radius</label>
                <br/> <br/>
                <input type="checkbox" id='shadow' name="Shadow" value="Shadow" onClick={openShadow} />
                <label htmlFor="shadow">Box Shadow</label>
              </form>
            </Option>
          </OptionArea>
        </Demo>
        <Demo>
          <TableViewCard>
            <CardWorks
              href='/works/hamiwallet'
              cover={Images.client_hamiwallet}
              title='中華電信'
              product='雙平台 App 設計開發'
              type='電信業'
              year='2017 年 10 月'
              radius={radius ? '' : 'noRadius'}
              shadow={shadow ? '' : 'noShadow'}
            />
          </TableViewCard>
          <OptionArea>
            <Tab label='Configuration' />
            <Option>
              <form>
                <input type="checkbox" id='radius' name="Radius" value="Radius" onClick={openRadius} />
                <label htmlFor="radius" >Radius</label>
                <br/> <br/>
                <input type="checkbox"  id='shadow' name="Shadow" value="Shadow" onClick={openShadow} />
                <label htmlFor="shadow" >Shadow</label>
              </form>
            </Option>
          </OptionArea>
        </Demo>
        <Demo>
          <WCardView>
            <GxcCardA
              img={Images.card_a_sdwan_01}
            />
          </WCardView>
          <Option>
              {/* <form>
                <input type="checkbox" name="Radius" value="Radius" onClick={openRadius} />
                <label for="Radius">Radius</label>
                <br/> <br/>
                <input type="checkbox" name="Shadow" value="Shadow" onClick={openShadow} />
                <label for="Shadow">Shadow</label>
              </form> */}
            </Option>
        </Demo>
        <Demo>
          <WCardView>
            <GxcCardB 
              img={Images.card_b_sdwan_01}
            />
          </WCardView>
          <Option>
              {/* <form>
                <input type="checkbox" name="Radius" value="Radius" onClick={openRadius} />
                <label for="Radius">Radius</label>
                <br/> <br/>
                <input type="checkbox" name="Shadow" value="Shadow" onClick={openShadow} />
                <label for="Shadow">Shadow</label>
              </form> */}
            </Option>
        </Demo>
        <Demo>
          <WCardView>
            <GxcCardC 
              img={Images.card_b_sdwan_01}
            />
          </WCardView>
          <Option>
              {/* <form>
                <input type="checkbox" name="Radius" value="Radius" onClick={openRadius} />
                <label for="Radius">Radius</label>
                <br/> <br/>
                <input type="checkbox" name="Shadow" value="Shadow" onClick={openShadow} />
                <label for="Shadow">Shadow</label>
              </form> */}
            </Option>
        </Demo>
    </SwipeableViews>
    <Link to="/" class='demolink'> To Cell</Link>
  </Layout>
  )
}

export default SecondPage
