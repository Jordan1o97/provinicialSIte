import React from 'react'
import './ProvincialStory.scss';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import storyImg1 from '../../assets/Provincial/storyImg1.jpeg';
 
type ProvincialStoryProps = {};
 
const ProvincialStory: React.FC<ProvincialStoryProps> = (props: ProvincialStoryProps) => {
  return (
    <div className='ProvincialStory'>
      <div className='storyAbout1'>
        <div className='homeTextContainer'>
          <Title level={2} className='titleText'>
            Locally owned and operated, we strive to support local in all we do. Many of our food and beverage offerings are produced in New Brunswick.
          </Title>
          <Text className='parText'>
            We are here to serve and support our community. For private bookings, events, fundraising events, please contact us via info@theprovinciallounge.ca .
          </Text>
        </div>
      </div>
      <div className='storyImg1'>
          <img src={storyImg1} className='img'></img>
      </div>
    </div>
  )
}
 
export default(ProvincialStory)
 