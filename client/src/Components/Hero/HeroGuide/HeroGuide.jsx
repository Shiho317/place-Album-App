import React from 'react';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GuideTitle, GuideWrapper } from './HeroGuide.style';

const HeroGuide = () => {
  return (
    <GuideWrapper id='guide'>
      <GuideTitle>
        <h1>3 Steps Using Guide</h1>
      </GuideTitle>
      <VerticalTimeline lineColor='#334257' className='time-line'>
        <VerticalTimelineElement
        className='time-line-el'
        contentStyle={{ background: '#548CA8', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid #548CA8' }}
        iconStyle={{ background: '#334257', color: '#334257' }}>
          <img className='step-img' src='https://cdn.dribbble.com/users/1148081/screenshots/17008012/media/2c7016364ba97baeb63c03ee8ca39427.png?compress=1&resize=1200x900&vertical=top' alt='step1' />
          <p>Create your account from here to start our application.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='time-line-el'
        contentStyle={{ background: '#548CA8', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid #548CA8' }}
        iconStyle={{ background: '#334257', color: '#334257' }}>
          <img className='step-img' src='https://cdn.dribbble.com/users/112330/screenshots/17630861/media/440da32189eba3f0218127e3e272b76f.png?compress=1&resize=1200x900&vertical=top' alt='step1' />
          <p>Search a place where you want to make a pin by using search bar.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='time-line-el'
        contentStyle={{ background: '#548CA8', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid #548CA8' }}
        iconStyle={{ background: '#334257', color: '#334257' }}>
          <img className='step-img' src='https://cdn.dribbble.com/users/76454/screenshots/17201743/media/3c80ca657e1c6d32736a7daea1b3dce0.png?compress=1&resize=1200x900&vertical=top' alt='step1' />
          <p>In the place you pinned, you can leave a photo and reviews.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Link to='/login'>
        <button>Start Now</button>
      </Link>
    </GuideWrapper>
  )
}

export default HeroGuide