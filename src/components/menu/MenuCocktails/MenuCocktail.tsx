import React from 'react'
import './MenuCocktail.scss';
import MenuItemClass from '../../../objects/provincialMenuObjects';
import MenuItem from '../MenuItem/MenuItem';
import Title from 'antd/es/typography/Title';
 
type MenuCocktailProps = {};
 
const MenuCocktail: React.FC<MenuCocktailProps> = (props: MenuCocktailProps) => {

    const signatures = [
        new MenuItemClass('BANK ON IT', 15,undefined, undefined, 'Jalapeño infused Hornitos Plata, Aperol, Yellow Chartreuse, Tomato confit, Agave, Lime, Strawberry Salt'),
        new MenuItemClass('SUPPLY CHAIN', 15,undefined, undefined, 'Roku Gin, Pandan & Wasabi-Rice Syrup, Lime, Himalayan Solution, Fee Brothers Plum Bitters'),
        new MenuItemClass('OLD SCHOOL LOVE', 15,undefined, undefined, 'Plantation 3 star Rum, Camapari, Papaya-Scented Honey, Lemon, In-House Mango Soda'),
        new MenuItemClass('MO MONEY', 15,undefined, undefined, 'Tito\'s Handmade Vodka , Granny Smith Apple, Celery, Lime, Cardamom Syrup'),
        new MenuItemClass('PIVOT POINT', 15,undefined, undefined, 'Zacapa No.23 Centenario, Sombra Mezcal, Cynar, Salted Banana, Bittermens Xocolatl Mole Bitters'),
        new MenuItemClass('IMPERFECT PASSION', 15,undefined, undefined, 'Barsol Pisco, Banana infused Bacardi Anejo 4, Falernum Pasion Fruit, Pistachio Milk, Pineapple, Dale DeGroff\'s Pimento Aromatic Bitters'),
        new MenuItemClass('REDBONE', 14,undefined, undefined, 'Aperol, Dolin Dry Vermouth, Cynar, Lacto-Fermented Strawberry, Mionetto Prosecco Rose, Fee Brothers Rhubarb Bitters'),
        new MenuItemClass('RETURN OF THE MACK', 14,undefined, undefined, 'Melon infused Ketel One Vodka, Avua Cachaca, Basil, Dolin Dry Vermouth, Pink Peppercorn - Grapefruit Cordial'),
        new MenuItemClass('SPICY THIRTY', 15,undefined, undefined, 'Reifel Canadian Rye, Amaretto, Amaro di Serravalle, Blueberry, Lemon, Grapefruit-infused Egg White, Angostura Bitters, Black Peppercorn'),
      ];
      
      const classics = [
        new MenuItemClass('CLOVER CLUB', 13,undefined, undefined, 'Beefeater London Dry Gin, Lemon, Raspberry Syrup, Egg White'),
        new MenuItemClass('NAKED AND FAMOUS', 14,undefined, undefined, 'Creyente Mezcal Joven, Yellow Chartreuse, Aperol, Lime'),
        new MenuItemClass('MARGARITA', 13,undefined, undefined, 'Hornitos Plata, Cointreau, lime juice, agave syrup, kosher salt'),
        new MenuItemClass('OLD FASHIONED', 13,undefined, undefined, 'Jim Beam Black Label, Demerara syrup, angostura bitters, Orange & Lemon Twist'),
        new MenuItemClass('PISCO SOUR', 14,undefined, undefined, 'Miquel Torres Chile Pisco, lemon & lime juice, simple syrup, egg white, angostura bitters'),
        new MenuItemClass('HURRICANE', 14,undefined, undefined, 'Appleton Estate Reserve Rum, Plantation Dark Rum, passion fruit, orange'),
        new MenuItemClass('PAPER PLANE', 14,undefined, undefined, 'Maker\'s Mark Bourbon, Amaro Quintessentia Nonino, Aperol, Lemon'),
        new MenuItemClass('PORNSTAR MARTINI', 14,undefined, undefined, 'Luksusowa Vodka, Passionfruit Purée, Vanilla, Lime, Villa Conchi Cava'),
        new MenuItemClass('ESPRESSO MARTINI', 13,undefined, undefined, 'Skyy Vodka, Kahlua, Espresso, Sugar'),
      ]
      
      const sigCol1 = signatures.filter((_, index) => index % 2 === 0).map((signature, index) => (
        <MenuItem key={index} title={signature.title} price={signature.price} price2={undefined} price3={undefined} description={signature.description}></MenuItem>
      ));
      
      const sigCol2 = signatures.filter((_, index) => index % 2 !== 0).map((signature, index) => (
        <MenuItem key={index} title={signature.title} price={signature.price} price2={undefined} price3={undefined} description={signature.description}></MenuItem>
      ));
      
      const classicCol1 = classics.filter((_, index) => index % 2 === 0).map((classic, index) => (
        <MenuItem key={index} title={classic.title} price={classic.price} price2={undefined} price3={undefined} description={classic.description}></MenuItem>
      ));
      
      const classicCol2 = classics.filter((_, index) => index % 2 !== 0).map((classic, index) => (
        <MenuItem key={index} title={classic.title} price={classic.price} price2={undefined} price3={undefined} description={classic.description}></MenuItem>
      ));

  return (
    <>
      <div className='menuCocktail'>
        <div className='menuSignatureMenu'>
          <Title level={2} className='menuTitle'>Signature</Title>
          <div className='menuItems'>
            <div className='menuCol1'>
              {sigCol1}
            </div>
            <div className='menuCol2'>
              {sigCol2}
            </div>
          </div>
        </div>
        <div className='menuPlateColumn2'>
          <div className='menuClassicMenu'>
            <Title level={2} className='menuTitle'>Classic</Title>
            <div className='menuItems'>
              <div className='menuCol1'>
                {classicCol1}
              </div>
              <div className='menuCol2'>
                {classicCol2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
 
export default(MenuCocktail)
 