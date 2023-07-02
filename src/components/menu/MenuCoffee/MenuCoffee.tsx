import React from 'react'
import './MenuCoffee.scss';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import coffeeImg1 from '../../../assets/Provincial/coffeeImg1.jpeg'
import MenuItem from '../MenuItem/MenuItem';
import MenuItemClass from '../../../objects/provincialMenuObjects';
 
type MenuCoffeeProps = {};
 
const MenuCoffee: React.FC<MenuCoffeeProps> = (props: MenuCoffeeProps) => {

    const coffees = [
        new MenuItemClass('BAILEYS COFFEE', 10, undefined, undefined, 'BAILEYS, AMERICANO, WHIPPED CREAM'),
        new MenuItemClass('MONTE CRISTO', 10, undefined, undefined, 'KAHLUA, COINTREAU, AMERICANO, WHIPPED CREAM'),
        new MenuItemClass('IRISH COFFEE', 10, undefined, undefined, 'JAMESON IRISH WHISKEY, DEMERA SYRUP, AMERICANO, WHIPPED CREAM'),
        new MenuItemClass('SPANISH COFFEE', 10, undefined, undefined, 'ST REMY XO BRANDY, COINTREAU, AMERICANO, WHIPPED CREAM'),
        new MenuItemClass('AFTER EIGHT', 10, undefined, undefined, 'CRÈME DE CACAO, AMAERICANO, PEPPERMINT SCHNAPPS'),
        new MenuItemClass('ESPRESSO', 3, undefined, undefined, ''),
        new MenuItemClass('AMERICANO', 3, undefined, undefined, ''),
        new MenuItemClass('CAFFE LATTE', 5, undefined, undefined, ''),
        new MenuItemClass('MOCHA LATTE', 5, undefined, undefined, ''),
        new MenuItemClass('CAPPUCCINO', 5, undefined, undefined, ''),
        new MenuItemClass('HERBAL TEA', 3, undefined, undefined, ''),
    ];

    const coffeeCol1 = coffees.filter((_, index) => index % 2 === 0).map((coffee, index) => (
        <MenuItem key={index} title={coffee.title} price={coffee.price} price2={coffee.price2 || undefined} price3={coffee.price3 || undefined} description={coffee.description || undefined}></MenuItem>
      ));
      
      const coffeeCol2 = coffees.filter((_, index) => index % 2 !== 0).map((coffee, index) => (
        <MenuItem key={index} title={coffee.title} price={coffee.price} price2={coffee.price2 || undefined} price3={coffee.price3 || undefined} description={coffee.description || undefined}></MenuItem>
      ));

  return (
    <>
      <div className='menuCoffee'>
        <div className='menuCoffeeMenu'>
          <Title level={2} className='menuTitle'>SPECIALTY COFFEE</Title>
          <div className='menuItems'>
            <div className='menuCol1'>
                {coffeeCol1}
            </div>
            <div className='menuCol2'>
                {coffeeCol2}
            </div>
          </div>
        </div>
        <div className='menuCoffeeImg1'>
            <img src={coffeeImg1} className='img'></img>
        </div>
      </div>
    </>
  )
}
 
export default(MenuCoffee)
 