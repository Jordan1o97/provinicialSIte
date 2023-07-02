import React from 'react'
import './MenuTap.scss';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import tapImg1 from '../../../assets/Provincial/tapImg1.jpeg'
 
 
type MenuTapProps = {};
 
const MenuTap: React.FC<MenuTapProps> = (props: MenuTapProps) => {
  return (
    <>
      <div className='menuTap'>
        <div className='menuTapMenu'>
          <Title level={2} className='menuTitle'>ROTATING TAP</Title>
          <Text>Ask your server for full selection of domestic & craft beer</Text>
          <div className='menuItems'>
            <div className='menuCol1'>
                <Title level={4}>HALF CUT</Title>
                <Title level={4}>RED ROVER</Title>
                <Title level={4}>GREYSTONE</Title>
            </div>
            <div className='menuCol2'>
                <Title level={4}>TRAILWAY</Title>
                <Title level={4}>GRIMEROSS</Title>
            </div>
          </div>
        </div>
        <div className='menuTapImg1'>
            <img src={tapImg1} className='img'></img>
        </div>
      </div>
    </>
  )
}
 
export default(MenuTap)
 