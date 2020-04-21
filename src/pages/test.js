import React, { useState } from 'react'
import { Link } from "gatsby"
import {
  SEO,
  Layout,
  CardView,
  CardHover,
  GameTyper,
  ReactTyper,
} from '../components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import styled from 'styled-components'

const Demo = styled.div`
  display: grid;
  grid-template-columns: repeat(2,auto);
  min-height: 500px; 
`

const TestPage = () => {
  const [index, setIndex] = useState(0)

  return(
  <Layout>
    <SEO title="Test" />
        <Tabs
          value={index}
          className='ForumTab'
          variant={'fullWidth'}
          onChange={(event, value) => setIndex(value)}
        >
          <Tab label='CardHover' />
          <Tab label='Typewriter_css' />
          <Tab label='Typewriter_JS' />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={setIndex} enableMouseEvents>
          <Demo>
            <CardView>
              <CardHover />
              <CardHover />
            </CardView>
          </Demo>
          <Demo>
            <CardView>
              <GameTyper
              text='正在輸入中...範例正在輸入中...範例正在輸入中...範例'
              />
            </CardView>
          </Demo>
          <Demo>
            <CardView>
              <ReactTyper />
            </CardView>
          </Demo>
        </SwipeableViews>
    <Link to="/" class='demolink'>To Cell</Link>
  </Layout>
  )
}

export default TestPage
