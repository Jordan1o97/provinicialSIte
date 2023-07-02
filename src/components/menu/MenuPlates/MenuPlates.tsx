import React from 'react'
import './MenuPlates.scss';
import MenuItem from '../MenuItem/MenuItem';
import { Typography} from 'antd';
import MenuItemClass from '../../../objects/provincialMenuObjects';
import plateImg1 from '../../../assets/Provincial/menuPlateImg1.jpg';

const { Title, Text } = Typography;
 
type MenuPlatesProps = {};
 
const MenuPlates: React.FC<MenuPlatesProps> = (props: MenuPlatesProps) => {

  const plates = [
    new MenuItemClass('CAESAR SALAD', 16, undefined, undefined, 'Romaine Lettuce, Herb Butter Garlic, Candied Lardons, Crispy Capers, Honey Lemon Caesar Vinaigrette'),
    new MenuItemClass('OCTOPUS OKONOMIYAKI', 28, undefined, undefined, 'Cabbage, Sweet Potato Pancake, Kewpie Mayo, Takoyaki Sauce, Horissa Sauce'),
    new MenuItemClass('SOUP DU JOUR', 12,undefined, undefined, 'Served with Rosemary Focaccia, Balsamic Vinegar and Olive Oil'),
    new MenuItemClass('BONE MARROW TARTARE', 25,undefined, undefined, 'Beef Tenderloin, Crispy Shallots, Herb Butter, Crostini'),
    new MenuItemClass('MUSHROOM ON TOAST', 14,undefined, undefined, 'Roasted Mushroom Ragu, Garlic Baguette,Truffle Oil, Parmesan Cheese'),
    new MenuItemClass('AFRICAN CURRY GOAT', 34,undefined, undefined, 'Ferron Family Farms Goat, Jollof Rice, Scallions'),
    new MenuItemClass('SWEET CHILI CHICKEN BITES', 16,undefined, undefined, 'Fried Chicken Bites, Cucumbers, Crispy Wontons, Sweet Thai Chili Sauce'),
    new MenuItemClass('TUNA TATAKI', 22,undefined, undefined, 'Seared Tuna, Korean Potato Pancake, Japanese Style Mayo, Takoyaki Sauce, Pickled Fingerling Chilis'),
    new MenuItemClass('COCONUT TEMPURA SHRIMP', 24,undefined, undefined, 'Coconut Shrimp, Sweet Potato Purée Salsa, Taquera'),
    new MenuItemClass('STEAK & POTATOES', 42,undefined, undefined, '7oz Beef Tenderloin, Herb Butter Smashed Potatoes, Veal Reduction, Asparagus, Horseradish Crema'),
    new MenuItemClass('FRIED GNOCCHI', 20,undefined, undefined, 'Potato Gnocchi, Creamy Basil, Pesto Sauce, Pickled Red Onions'),
    new MenuItemClass('CHEFS BOARD', 32,undefined, undefined, '3 Cured Meats, 2 Cheese, House Pickles, Tomato Jam, Crostini, Truffle Honey,Dijon Mustard, Candied Pecans & Berries, Toasted Naan'),
  ]
  
  const desserts = [
    new MenuItemClass('BANANA CRUNCH CAKE', 14,undefined, undefined, 'Coconut Banana Crunch Cake, with Vanilla Creme Anglaise and Rum Caramel'),
    new MenuItemClass('CHOCOLATE GANACHE', 12,undefined, undefined, 'Chocolate Ganache with Rum Caramel and Berries'),
  ]
  
  const plateCol1 = plates.filter((_, index) => index % 2 === 0).map((plate, index) => (
    <MenuItem key={index} title={plate.title} price={plate.price} price2={undefined} price3={undefined} description={plate.description}></MenuItem>
  ));
  
  const plateCol2 = plates.filter((_, index) => index % 2 !== 0).map((plate, index) => (
    <MenuItem key={index} title={plate.title} price={plate.price} price2={undefined} price3={undefined} description={plate.description}></MenuItem>
  ));
  
  const dessertCol1 = desserts.filter((_, index) => index % 2 === 0).map((dessert, index) => (
    <MenuItem key={index} title={dessert.title} price={dessert.price} price2={undefined} price3={undefined} description={dessert.description}></MenuItem>
  ));
  
  const dessertCol2 = desserts.filter((_, index) => index % 2 !== 0).map((dessert, index) => (
    <MenuItem key={index} title={dessert.title} price={dessert.price} price2={undefined} price3={undefined} description={dessert.description}></MenuItem>
  ));

  return (
    <>
      <div className='menuPlate'>
        <div className='menuPlateMenu'>
          <Title level={2} className='menuTitle'>Plates</Title>
          <div className='menuItems'>
            <div className='menuCol1'>
              {plateCol1}
            </div>
            <div className='menuCol2'>
              {plateCol2}
            </div>
          </div>
        </div>
        <div className='menuPlateColumn2'>
          <div className='menuDessertMenu'>
            <Title level={2} className='menuTitle'>Desserts</Title>
            <div className='menuItems'>
              <div className='menuCol1'>
                {dessertCol1}
              </div>
              <div className='menuCol2'>
                {dessertCol2}
              </div>
            </div>
          </div>
          <div className='menuPlateImg1'>
            <img src={plateImg1} className='img'></img>
          </div>
        </div>
      </div>
    </>
  )
}
 
export default(MenuPlates)
 
