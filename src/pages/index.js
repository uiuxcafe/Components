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
  justify-self: center;
  border-left: 1px solid #FFF;
`

const Option = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  label,p{
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    padding-top: 15px;
  }
  p,input{
    display: inline;
  }
`

const CellPage = () => {
  const [index, setIndex] = useState(0)
  const [imgLo, setImgLo] = useState('left')
  const [openDescription, setOpenDescription] = useState(true)
  const [openIcon, setOpenIcon] = useState(true)
  const [openText, setOpenText] = useState(true)

  console.log(imgLo);

  //set image
  function ImageSetLeft() {
    setImgLo('left')
  }

  function ImageSetRight() {
    setImgLo('right')
  }

  //set description
  function DescriptionOpen() {
    setOpenDescription(true)
  }

  function DescriptionOff() {
    setOpenDescription(false)
  }

  function IconOpen() {
    setOpenIcon(prevOpenIcon => !openIcon);
  }

  function TextOpen() {
    setOpenText(prevOpenText => !openText);
  }



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
                      image={imgLo}
                      description={openDescription ? '' : 'noDescription'}
                    />
                  ))}
            </TableView>
            <OptionArea>
                  <Tab label='Configuration' />
                  <Option>
                    <form>
                      <label for="Img">Img</label>
                        <br/>
                        <input type="radio" name="location" value="left"  onClick={ImageSetLeft} /> <p>Left</p>
                        <br/>
                        <input type="radio" name="location" value="right" onClick={ImageSetRight} /> <p>Right</p>
                        <br/> <br/>
                      <label for="Description">Description</label>
                        <br/> 
                        <input type="radio" name="description" value="none" onClick={DescriptionOff} /> <p>None</p>
                        <br/>
                        <input type="radio" name="description" value="display" onClick={DescriptionOpen} /> <p>Display</p>
                        <br/> <br/>
                    </form>
                  </Option>
            </OptionArea>
          </Demo>
          <Demo>
            <SettingView>
              <CellSetting
                icon={Images.setting_privacy}
                title='隱私權條款'
                image={openIcon ? 'Image' : 'noImage'}
                text={openText ? 'Text' : 'noText'}
              />
              <CellSetting
                icon={Images.setting_service}
                title='服務條款'
                image={openIcon ? 'Image' : 'noImage'}
                text={openText ? 'Text' : 'noText'}
              />
              <CellSetting
                icon={Images.setting_info}
                title='版本編號'
                description='0.0.3'
                image={openIcon ? 'Image' : 'noImage'}
                text={openText ? 'Text' : 'noText'}
              />
            </SettingView>
            <OptionArea>
              <Tab label='Configuration' />
              <Option>
                <form>
                  <input type="checkbox" name="Icon" value="Icon" onClick={IconOpen}  />
                  <label for="Icon">no Icon</label>
                  <br/> <br/>
                  <input type="checkbox" name="Text" value="Text" onClick={TextOpen} />
                  <label for="Text">no Text</label>
                </form>
              </Option>
            </OptionArea>
          </Demo>
        </SwipeableViews>
    <Link to="/card" class='demolink'>To Card</Link>
  </Layout>
  )
}

export default CellPage
