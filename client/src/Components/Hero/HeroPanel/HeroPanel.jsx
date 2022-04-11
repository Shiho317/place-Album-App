import React from 'react'
import { Panel, PanelContents, PanelWrapper } from './HeroPanel.style'

const HeroPanel = () => {
  return (
    <PanelWrapper>
      <Panel>
        <PanelContents>
          <h1>&ldquo;Using for free.<br/> 
          Any time, Anywhere.&rdquo;</h1>
          <p>We would like to give you spaces to leave your special memory in our application.<br/>
          You can remember your memories with photos and reviews.<br/>
          We don't ask any money. Your memories are priceless.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v</p>
        </PanelContents>
      </Panel>
    </PanelWrapper>
  )
}

export default HeroPanel