import React from 'react'
import './MenuSpirits.scss';
import Title from 'antd/es/typography/Title';
import MenuItemClass from '../../../objects/provincialMenuObjects';
import MenuItem from '../MenuItem/MenuItem';
 
type MenuSpiritsProps = {};
 
const MenuSpirits: React.FC<MenuSpiritsProps> = (props: MenuSpiritsProps) => {
    const vodkas = [
        new MenuItemClass('SKYY VODKA', 5, 9),
        new MenuItemClass('Ciroc', 6, 10),
        new MenuItemClass('Devil Keep Handcrafted', 5, 9),
        new MenuItemClass('FILS DU ROY GRANDE BAGOSSE', 5, 9),
        new MenuItemClass('Grey Goose', 8, 12),
        new MenuItemClass('VIRITUS ORGANIC VODKA', 6, 10),
        new MenuItemClass('TITO’S HANDMADE', 6, 10),
        new MenuItemClass('BELVEDERE', 7, 11),
        new MenuItemClass('KETEL ONE', 6, 10),
        new MenuItemClass('HAKU VODKA', 7, 11),
    ];

    const flavVodkas = [
        new MenuItemClass('CIROC PEACH', 10, 12),
        new MenuItemClass('KETEL ONE BOTANICALS GRAPEFRUIT & ROSE', 6, 10),
        new MenuItemClass('KETEL ONE BOTANICALS PEACH & ORANGE BLOSSOM', 6, 10),
        new MenuItemClass('KETEL ONE BOTANICALS CUCUMBER & MINT', 6, 10),
    ];

    const gins = [
        new MenuItemClass('FILS DU ROY GIN THUYA', 6, 10),
        new MenuItemClass('HENDRICKS', 10, 12),
        new MenuItemClass('BEEFEATER LONDON DRY GIN', 6, 10),
        new MenuItemClass('TANQUERAY LONDON DRY', 7, 11),
        new MenuItemClass('ROKU GIN', 8, 12),
        new MenuItemClass('BOMBAY SAPPHIER GIN', 7, 11),
        new MenuItemClass('GIN MARE', 10, 14),
        new MenuItemClass('SIPSMITH', 8, 12),
        new MenuItemClass('UNGAVA', 7, 11),
        new MenuItemClass('THE BOTANIST ISLAY GIN', 10, 14),
        new MenuItemClass('CITADELLE', 7, 11),
    ];

    const tequilas = [
        new MenuItemClass('PATRON SILVER TEQUILA', 13, 17),
        new MenuItemClass('HORNITOS REPOSADO', 6, 10),
        new MenuItemClass('HORNITOS PLATA', 6, 10),
    ];

    const rums = [
        new MenuItemClass('BARCADI CARTA BLANCA', 5, 9),
        new MenuItemClass('PLANTATION 3 STAR', 6, 10),
        new MenuItemClass('PLANTATION PINEAPPLE', 8, 12),
        new MenuItemClass('SAILOR JERRY SPICED RUM', 6, 10),
        new MenuItemClass('PLANTATION DARK', 6, 10),
        new MenuItemClass('BUMBU CRAFT RUM', 10, 14),
        new MenuItemClass('APPLETON ESTATE 8 YO', 7, 11),
    ];

    const bourbons = [
        new MenuItemClass('MARKERS MARK', 7, 11),
        new MenuItemClass('BUFFALLO TRACE', 7, 11),
        new MenuItemClass('WILD TURKEY LONGBRANCH', 10, 14),
        new MenuItemClass('BASIL HAYDEN', 8, 12),
        new MenuItemClass('ELIJAH CRAIG SMALL BRANCH', 8, 12),
        new MenuItemClass('WOODFORD RESERVE DISTLLERS SELECT', 8, 12),
        new MenuItemClass('BARKER’S BOURBON 7 YO', 12, 16),
        new MenuItemClass('LEGENT', 9, 13),
    ];

    const cadWhiskeys = [
        new MenuItemClass('CANADIAN CLASSIC 100% RYE', 6, 10),
        new MenuItemClass('CROWN ROYAL', 6, 10),
        new MenuItemClass('GLEN BRETON RARE', 9, 13),
        new MenuItemClass('CROWN ROYAL BLACK', 7, 11),
        new MenuItemClass('CROWN ROYAL LIMITED EDITION', 8, 12),
        new MenuItemClass('LOT 40 SINGLE COPPER POT STILL CANADIAN WHISKY', 7, 11),
    ];

    const cognacs = [
        new MenuItemClass('HENNESSY VS', 10, 14),
        new MenuItemClass('HENNESSY VSOP', 18, 22),
        new MenuItemClass('COURVOISIER VS', 12, 16),
        new MenuItemClass('MIGUEL TORRES CHILE PISCO', 7, 11),
        new MenuItemClass('ST REMY XO', 6, 10),
    ];

    const malts = [
        new MenuItemClass('HIGHLAND PARK 12YO', 12, 16),
        new MenuItemClass('MACALLAN DOUBLE CASK 12YO', 13, 17),
        new MenuItemClass('MACALLAN 1824 SIENNA', 21, 25),
        new MenuItemClass('AUCHENTOSHAN THREE WOOD', 10, 14),
        new MenuItemClass('AUCHENTOSHAN AMERICAN OAK', 8, 12),
        new MenuItemClass('THE BALVENIE DOUBLE WOOD', 14, 18),
        new MenuItemClass('KILCHOMAN SANAIG ISLAY SINGLE MALT', 13, 17),
        new MenuItemClass('JOHNNIE WALKER RED', 6, 10),
        new MenuItemClass('JOHNNIE WALKER BLACK', 9, 13),
        new MenuItemClass('LAPHROAIG QUARTER CASK', 14, 18),
    ];

    const irishWhiskeys = [
        new MenuItemClass('JAMESON DISTILERS SAFE IRISH WHISKEY', 14, 18),
        new MenuItemClass('JAMESON IRISH', 6, 10),
        new MenuItemClass('BUSHMILLS BLACK BUSH', 7, 11),
    ];

    const japWhiskeys = [
        new MenuItemClass('TOKI JAPANESE WHISKY', 12, 24),
        new MenuItemClass('HIBIKI HARMONY', 16, 20),
    ];

    const liqueurs = [
        new MenuItemClass('GREEN CHARTREUSE', 8, 12),
        new MenuItemClass('DISARRONO AMARETTO', 6, 10),
        new MenuItemClass('AMARO AVERNA', 5, 9),
        new MenuItemClass('APEROL', 5, 9),
        new MenuItemClass('CAMPARI', 5, 9),
        new MenuItemClass('DRAMBUIE', 7, 11),
        new MenuItemClass('BAILEYS', 5, 9),
        new MenuItemClass('KHALUA', 5, 9),
        new MenuItemClass('MY LIMONCHELLO', 6, 10),
        new MenuItemClass('MATHILDE CASSIS', 6, 10),
        new MenuItemClass('CHAMBORD', 7, 11),

    ];

    const vodkaCol1 = vodkas.filter((_, index) => index % 2 === 0).map((vodka, index) => (
        <MenuItem key={index} title={vodka.title} price={vodka.price} price2={vodka.price2 || undefined} price3={vodka.price3 || undefined} description={vodka.description || undefined}></MenuItem>
    ));
      
    const vodkaCol2 = vodkas.filter((_, index) => index % 2 !== 0).map((vodka, index) => (
        <MenuItem key={index} title={vodka.title} price={vodka.price} price2={vodka.price2 || undefined} price3={vodka.price3 || undefined} description={vodka.description || undefined}></MenuItem>
    ));

    const flavVodkaCol1 = flavVodkas.filter((_, index) => index % 2 === 0).map((flavVodka, index) => (
        <MenuItem key={index} title={flavVodka.title} price={flavVodka.price} price2={flavVodka.price2 || undefined} price3={flavVodka.price3 || undefined} description={flavVodka.description || undefined}></MenuItem>
    ));

    const flavVodkaCol2 = flavVodkas.filter((_, index) => index % 2 !== 0).map((flavVodka, index) => (
        <MenuItem key={index} title={flavVodka.title} price={flavVodka.price} price2={flavVodka.price2 || undefined} price3={flavVodka.price3 || undefined} description={flavVodka.description || undefined}></MenuItem>
    ));

    const ginCol1 = gins.filter((_, index) => index % 2 === 0).map((gin, index) => (
        <MenuItem key={index} title={gin.title} price={gin.price} price2={gin.price2 || undefined} price3={gin.price3 || undefined} description={gin.description || undefined}></MenuItem>
    ));

    const ginCol2 = gins.filter((_, index) => index % 2 !== 0).map((gin, index) => (
        <MenuItem key={index} title={gin.title} price={gin.price} price2={gin.price2 || undefined} price3={gin.price3 || undefined} description={gin.description || undefined}></MenuItem>
    ));

    const tequilaCol1 = tequilas.filter((_, index) => index % 2 === 0).map((tequila, index) => (
        <MenuItem key={index} title={tequila.title} price={tequila.price} price2={tequila.price2 || undefined} price3={tequila.price3 || undefined} description={tequila.description || undefined}></MenuItem>
    ));

    const tequilaCol2 = tequilas.filter((_, index) => index % 2 !== 0).map((tequila, index) => (
        <MenuItem key={index} title={tequila.title} price={tequila.price} price2={tequila.price2 || undefined} price3={tequila.price3 || undefined} description={tequila.description || undefined}></MenuItem>
    ));

    const rumCol1 = rums.filter((_, index) => index % 2 === 0).map((rum, index) => (
        <MenuItem key={index} title={rum.title} price={rum.price} price2={rum.price2 || undefined} price3={rum.price3 || undefined} description={rum.description || undefined}></MenuItem>
    ));

    const rumCol2 = rums.filter((_, index) => index % 2 !== 0).map((rum, index) => (
        <MenuItem key={index} title={rum.title} price={rum.price} price2={rum.price2 || undefined} price3={rum.price3 || undefined} description={rum.description || undefined}></MenuItem>
    ));

    const bourbonCol1 = bourbons.filter((_, index) => index % 2 === 0).map((bourbon, index) => (
        <MenuItem key={index} title={bourbon.title} price={bourbon.price} price2={bourbon.price2 || undefined} price3={bourbon.price3 || undefined} description={bourbon.description || undefined}></MenuItem>
    ));

    const bourbonCol2 = bourbons.filter((_, index) => index % 2 !== 0).map((bourbon, index) => (
        <MenuItem key={index} title={bourbon.title} price={bourbon.price} price2={bourbon.price2 || undefined} price3={bourbon.price3 || undefined} description={bourbon.description || undefined}></MenuItem>
    ));

    const cadWhiskeyCol1 = cadWhiskeys.filter((_, index) => index % 2 === 0).map((cadWhiskey, index) => (
        <MenuItem key={index} title={cadWhiskey.title} price={cadWhiskey.price} price2={cadWhiskey.price2 || undefined} price3={cadWhiskey.price3 || undefined} description={cadWhiskey.description || undefined}></MenuItem>
    ));

    const cadWhiskeyCol2 = cadWhiskeys.filter((_, index) => index % 2 !== 0).map((cadWhiskey, index) => (
        <MenuItem key={index} title={cadWhiskey.title} price={cadWhiskey.price} price2={cadWhiskey.price2 || undefined} price3={cadWhiskey.price3 || undefined} description={cadWhiskey.description || undefined}></MenuItem>
    ));

    const cognacCol1 = cognacs.filter((_, index) => index % 2 === 0).map((cognac, index) => (
        <MenuItem key={index} title={cognac.title} price={cognac.price} price2={cognac.price2 || undefined} price3={cognac.price3 || undefined} description={cognac.description || undefined}></MenuItem>
    ));

    const cognacCol2 = cognacs.filter((_, index) => index % 2 !== 0).map((cognac, index) => (
        <MenuItem key={index} title={cognac.title} price={cognac.price} price2={cognac.price2 || undefined} price3={cognac.price3 || undefined} description={cognac.description || undefined}></MenuItem>
    ));

    const maltCol1 = malts.filter((_, index) => index % 2 === 0).map((malt, index) => (
        <MenuItem key={index} title={malt.title} price={malt.price} price2={malt.price2 || undefined} price3={malt.price3 || undefined} description={malt.description || undefined}></MenuItem>
    ));

    const maltCol2 = malts.filter((_, index) => index % 2 !== 0).map((malt, index) => (
        <MenuItem key={index} title={malt.title} price={malt.price} price2={malt.price2 || undefined} price3={malt.price3 || undefined} description={malt.description || undefined}></MenuItem>
    ));

    const irishWhiskeyCol1 = irishWhiskeys.filter((_, index) => index % 2 === 0).map((irishWhiskey, index) => (
        <MenuItem key={index} title={irishWhiskey.title} price={irishWhiskey.price} price2={irishWhiskey.price2 || undefined} price3={irishWhiskey.price3 || undefined} description={irishWhiskey.description || undefined}></MenuItem>
    ));

    const irishWhiskeyCol2 = irishWhiskeys.filter((_, index) => index % 2 !== 0).map((irishWhiskey, index) => (
        <MenuItem key={index} title={irishWhiskey.title} price={irishWhiskey.price} price2={irishWhiskey.price2 || undefined} price3={irishWhiskey.price3 || undefined} description={irishWhiskey.description || undefined}></MenuItem>
    ));

    const japWhiskeyCol1 = japWhiskeys.filter((_, index) => index % 2 === 0).map((japWhiskey, index) => (
        <MenuItem key={index} title={japWhiskey.title} price={japWhiskey.price} price2={japWhiskey.price2 || undefined} price3={japWhiskey.price3 || undefined} description={japWhiskey.description || undefined}></MenuItem>
    ));

    const japWhiskeyCol2 = japWhiskeys.filter((_, index) => index % 2 !== 0).map((japWhiskey, index) => (
        <MenuItem key={index} title={japWhiskey.title} price={japWhiskey.price} price2={japWhiskey.price2 || undefined} price3={japWhiskey.price3 || undefined} description={japWhiskey.description || undefined}></MenuItem>
    ));

    const liqueurCol1 = liqueurs.filter((_, index) => index % 2 === 0).map((liqueur, index) => (
        <MenuItem key={index} title={liqueur.title} price={liqueur.price} price2={liqueur.price2 || undefined} price3={liqueur.price3 || undefined} description={liqueur.description || undefined}></MenuItem>
    ));

    const liqueurCol2 = liqueurs.filter((_, index) => index % 2 !== 0).map((liqueur, index) => (
        <MenuItem key={index} title={liqueur.title} price={liqueur.price} price2={liqueur.price2 || undefined} price3={liqueur.price3 || undefined} description={liqueur.description || undefined}></MenuItem>
    ));



  return (
    <>
      <div className='menuSpirits'>
        <div className='menuVodkaMenu'>
          <Title level={2} className='menuTitle'>VODKA</Title>
          <div className='menuItems'>
            <div className='menuCol1'>
              {vodkaCol1}
            </div>
            <div className='menuCol2'>
              {vodkaCol2}
            </div>
          </div>
        </div>
        <div className='menuFlavVodkaMenu'>
            <Title level={2} className='menuTitle'>FLAVORED VODKA</Title>
            <div className='menuItems'>
              <div className='menuCol1'>
                {flavVodkaCol1}
              </div>
              <div className='menuCol2'>
                {flavVodkaCol2}
              </div>
            </div>
          </div>
        <div className='menuGinMenu'>
            <Title level={2} className='menuTitle'>GIN</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {ginCol1}
                </div>
                <div className='menuCol2'>
                {ginCol2}
                </div>
            </div>
        </div>
        <div className='menuTequilaMenu'>
            <Title level={2} className='menuTitle'>TEQUILA</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {tequilaCol1}
                </div>
                <div className='menuCol2'>
                {tequilaCol2}
                </div>
            </div>
        </div>
        <div className='menuRumMenu'>
            <Title level={2} className='menuTitle'>RUM</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {rumCol1}
                </div>
                <div className='menuCol2'>
                {rumCol2}
                </div>
            </div>
        </div>
        <div className='menuBourbonMenu'>
            <Title level={2} className='menuTitle'>BOURBON</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {bourbonCol1}
                </div>
                <div className='menuCol2'>
                {bourbonCol2}
                </div>
            </div>
        </div>
        <div className='menuCadWhiskyMenu'>
            <Title level={2} className='menuTitle'>CANADIAN WHISKY</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {cadWhiskeyCol1}
                </div>
                <div className='menuCol2'>
                {cadWhiskeyCol2}
                </div>
            </div>
        </div>
        <div className='menuCognacMenu'>
            <Title level={2} className='menuTitle'>COGNAC / BRANDY</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {cognacCol1}
                </div>
                <div className='menuCol2'>
                {cognacCol2}
                </div>
            </div>
        </div>
        <div className='menuMaltMenu'>
            <Title level={2} className='menuTitle'>SINGLE MALT / BLENDED</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {maltCol1}
                </div>
                <div className='menuCol2'>
                {maltCol2}
                </div>
            </div>
        </div>
        <div className='menuIrishWhiskyMenu'>
            <Title level={2} className='menuTitle'>IRISH WHISKEY</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {irishWhiskeyCol1}
                </div>
                <div className='menuCol2'>
                {irishWhiskeyCol2}
                </div>
            </div>
        </div>
        <div className='menuJapWhiskyMenu'>
            <Title level={2} className='menuTitle'>JAPANESE WHISKY</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {japWhiskeyCol1}
                </div>
                <div className='menuCol2'>
                {japWhiskeyCol2}
                </div>
            </div>
        </div>
        <div className='menuLiqueursMenu'>
            <Title level={2} className='menuTitle'>LIQUEURS/ APERETIFS / AMARO</Title>
            <div className='menuItems'>
                <div className='menuCol1'>
                {liqueurCol1}
                </div>
                <div className='menuCol2'>
                {liqueurCol2}
                </div>
            </div>
        </div>
        {/* <div className='menuWineImg1'>
            <img src={wineImg1} className='img'></img>
        </div> */}
      </div>
    </>
  )
}
 
export default(MenuSpirits)
 