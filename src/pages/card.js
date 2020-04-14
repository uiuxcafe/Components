import React, { useState } from 'react'
import { Link } from "gatsby"
import {
  SEO,
  Layout,
  TableViewCard,
  CardJobs,
  CardWorks,
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
  h4{
    font-size: 18px;
    font-weight: 300;
  }
`

const SecondPage = () => {
  const [index, setIndex] = useState(0)
  return(
  <Layout>
    <SEO title="Page two" />
    <Tabs
      value={index}
      className='ForumTab'
      variant={'fullWidth'}
      onChange={(event, value) => setIndex(value)}
    >
      <Tab label='Card_a' />
      <Tab label='Card_b' />
    </Tabs>
    <SwipeableViews class="uiux" index={index} onChangeIndex={setIndex} enableMouseEvents>
        <Demo>
          <TableViewCard>
            <CardJobs 
              cover={Images.fulltime_card_designer}
              linkColor={Colors.PRed}
              title='UI UX Designer'
              text='UI / UX 設計師' />
          </TableViewCard>
          <OptionArea>
            <Tab label='Configuration' />
            <Option>
              <h4>Radius</h4>
              <h4>Shadow</h4>
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
            />
          </TableViewCard>
          <OptionArea>
            <Tab label='Configuration' />
            <Option>
              <h4>Radius</h4>
              <h4>Shadow</h4>
            </Option>
          </OptionArea>
        </Demo>
  
    </SwipeableViews>
    <Link to="/" class='demolink'> To Cell</Link>
  </Layout>
  )
}

export default SecondPage
