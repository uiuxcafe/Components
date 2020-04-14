import React, { useState } from 'react'
import { Link } from "gatsby"
import {
  SEO,
  Layout,
  TableView,
  CellSetting,
  SettingView,
  CellNews,
} from '../components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import { Images } from '../Themes'
import NewsList from '../data/newsList'
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

const CellPage = () => {
  const [index, setIndex] = useState(0)
  const [openIcon, setOpenIcon] = useState(true)

  return(
  <Layout>
    <SEO title="Home" />
        <Tabs
          value={index}
          className='ForumTab'
          variant={'fullWidth'}
          onChange={(event, value) => setIndex(value)}
        >
          <Tab label='Cell_a' />
          <Tab label='Cell_b' />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={setIndex} enableMouseEvents>
          <Demo>
            <TableView>
                  {NewsList.data.news.map(content => (
                    <CellNews 
                      thumbnail={content.thumbnail}
                      title={content.title}
                      excerpt={content.excerpt}
                      created_at={content.created_at}
                    />
                  ))}
            </TableView>
            <OptionArea>
                  <Tab label='Configuration' />
                  <Option>
                    <h4>Icon</h4>
                    <h4>Text</h4>
                  </Option>
            </OptionArea>
          </Demo>
          <Demo>
            <SettingView>
              <CellSetting
                icon={Images.setting_privacy}
                title='隱私權條款'
              />
              <CellSetting
                icon={Images.setting_service}
                title='服務條款'
              />
              <CellSetting
                icon={Images.setting_info}
                title='版本編號'
                description='0.0.3'
              />
            </SettingView>
            <OptionArea>
              <Tab label='Configuration' />
              <Option>
                <h4>Img</h4>
                <h4>Description</h4>
              </Option>
            </OptionArea>
          </Demo>
        </SwipeableViews>
    <Link to="/card"  class='demolink'> To Card</Link>
  </Layout>
  )
}

export default CellPage
