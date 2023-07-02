import React from 'react'
import './MenuWine.scss';
import Title from 'antd/es/typography/Title';
import MenuItemClass from '../../../objects/provincialMenuObjects';
import MenuItem from '../MenuItem/MenuItem';
import wineImg1 from '../../../assets/Provincial/wineImg1.webp'
 
type MenuWineProps = {};
 
const MenuWine: React.FC<MenuWineProps> = (props: MenuWineProps) => {

    const sparklings = [
        new MenuItemClass('VILLA CONCHI CAVA BRUT SELECCION, SPAIN', 10, 40),
        new MenuItemClass('MIONETTO SPARKLING ROSÉ - ITALY', 40),
        new MenuItemClass('CHAMPAGNNE BRUT, VEUVE CLICQUOT YELLOW LABEL, REIMS, FRANCE', 140),
        new MenuItemClass('CHAMPAGNE ROSE BRUT, DOM PERIGNON, EPERNARY, FRANCE', 440),
        new MenuItemClass('CHAMPAGNE BRUT, DOM PERIGNON, EPENARY, FRANCE', 340),
    ];

    const whites = [
        new MenuItemClass('PINOT GRIGIO, NUGAN ESTATE ANNELISE, AUSTRALIA', 11, 15, 40),
        new MenuItemClass('SAUVIGNON BLANC, SANTA CAROLINA RESERVA, CHILE', 11, 15, 40),
        new MenuItemClass('CHARDONNAY, ANGOVE ORGANIC, AUSTRALIA', 10, 14, 35),
        new MenuItemClass('SAUVIGNON BLANC, SAINT CLAIR FAMILY ESTATE, NEW ZELAND', 40),
        new MenuItemClass('CHARDONNAY, DREAMING TREE, USA', 40),
        new MenuItemClass('RIESLING, DR LOOSEN, GERMANY', 40),
    ];

    const reds = [
        new MenuItemClass('PINOT NOIR, MIRASSOU, USA', 11, 15, 40),
        new MenuItemClass('MALBEC, DON DAVID, ARGENTINA', 11, 15, 40),
        new MenuItemClass('CABERNET SAUVIGNON, CARMEN RESERVA, CHILE', 10, 14, 35),
        new MenuItemClass('TOMMASI VALPOLICELLA CLASSICO SUPERIORE DOC, ITALY', 40),
        new MenuItemClass('CABERNET SAUVIGNON, KAIKEN RESERVA ESPECIAL', 42),
        new MenuItemClass('CHATEAU PUYFROMAGE, FRANCE', 50),
    ];

    const sparkCol1 = sparklings.filter((_, index) => index % 2 === 0).map((sparking, index) => (
        <MenuItem key={index} title={sparking.title} price={sparking.price} price2={sparking.price2 || undefined} price3={sparking.price3 || undefined} description={sparking.description || undefined}></MenuItem>
      ));
      
      const sparkCol2 = sparklings.filter((_, index) => index % 2 !== 0).map((sparking, index) => (
        <MenuItem key={index} title={sparking.title} price={sparking.price} price2={sparking.price2 || undefined} price3={sparking.price3 || undefined} description={sparking.description || undefined}></MenuItem>
      ));
      
      const whiteCol1 = whites.filter((_, index) => index % 2 === 0).map((white, index) => (
        <MenuItem key={index} title={white.title} price={white.price} price2={white.price2 || undefined} price3={white.price3 || undefined} description={white.description || undefined}></MenuItem>
      ));
      
      const whiteCol2 = whites.filter((_, index) => index % 2 !== 0).map((white, index) => (
        <MenuItem key={index} title={white.title} price={white.price} price2={white.price2 || undefined} price3={white.price3 || undefined} description={white.description || undefined}></MenuItem>
      ));

      const redCol1 = reds.filter((_, index) => index % 2 === 0).map((red, index) => (
        <MenuItem key={index} title={red.title} price={red.price} price2={red.price2 || undefined} price3={red.price3 || undefined} description={red.description || undefined}></MenuItem>
      ));

      const redCol2 = reds.filter((_, index) => index % 2 !== 0).map((red, index) => (
        <MenuItem key={index} title={red.title} price={red.price} price2={red.price2 || undefined} price3={red.price3 || undefined} description={red.description || undefined}></MenuItem>
      ));

  return (
    <>
      <div className='menuWine'>
        <div className='menuSparklingMenu'>
          <Title level={2} className='menuTitle'>SPARKLING / ROSE</Title>
          <div className='menuItems'>
            <div className='menuCol1'>
              {sparkCol1}
            </div>
            <div className='menuCol2'>
              {sparkCol2}
            </div>
          </div>
        </div>
        <div className='menuWhiteMenu'>
            <Title level={2} className='menuTitle'>WHITE</Title>
            <div className='menuItems'>
              <div className='menuCol1'>
                {whiteCol1}
              </div>
              <div className='menuCol2'>
                {whiteCol2}
              </div>
            </div>
          </div>
        <div className='menuRedMenu'>
            <Title level={2} className='menuTitle'>RED</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {redCol1}
                </div>
                <div className='menuCol2'>
                {redCol2}
                </div>
            </div>
        </div>
        <div className='menuWineImg1'>
            <img src={wineImg1} className='img'></img>
        </div>
      </div>
    </>
  )
}
 
export default(MenuWine)
 