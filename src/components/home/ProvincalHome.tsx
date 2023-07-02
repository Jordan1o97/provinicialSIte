import React from 'react'
import './ProvincialHome.scss';
import homeImg1 from '../../assets/Provincial/homeImg1.jpeg';
import homeImg2 from '../../assets/Provincial/homeImg2.jpeg';
import { Typography} from 'antd';

const { Title, Text } = Typography;
 
type ProvincialHomeProps = {};
 
const ProvincialHome: React.FC<ProvincialHomeProps> = (props: ProvincialHomeProps) => {
  return (
    <div className='ProvincialHome'>
      <div className='homeAbout2'>
        <div className='homeTextContainer'>
          <Title level={1} className='titleText'>
            Downtown Cocktail Lounge 
          </Title>
          <Text className='parText'>
            Locally Sourced  /  Crafted with Love
          </Text>
        </div>
      </div>
      <div className='homeImg2'>
          <img src={homeImg2} className='img'></img>
      </div>
      <div className='homeImg1'>
          <img src={homeImg1} className='img'></img>
      </div>
      <div className='homeAbout1'>
        <div className='homeTextContainer'>
          <Title level={2} className='titleText'>
            We strive to support local in all we do. Many of our food and beverage offerings are produced in New Brunswick.
          </Title>
          <Text className='parText'>
            The Provincial Lounge is a beautifully designed mid-century modern space. Offering Craft Cocktails, Craft Beer,
            Wine, Food Menu & Coffee. We use NB produced products primarily. Our food and beverage menus change seasonally.
          </Text>
        </div>
      </div>
    </div>
  )
}
 
export default(ProvincialHome)
 