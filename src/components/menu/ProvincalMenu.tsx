// ProvincialMenu.tsx
import React from 'react';
import './ProvincialMenu.scss';
import MenuHeader from './MenuHeader/Menuheader'
import Plates from './MenuPlates/MenuPlates';
import Cocktails from './MenuCocktails/MenuCocktail';
import Wine from './MenuWine/MenuWine';
import Spirits from './MenuSpirits/MenuSpirits';
import Tap from './MenuTap/MenuTap';
import Coffee from './MenuCoffee/MenuCoffee';
import { Routes, Route } from 'react-router-dom';

type ProvincialMenuProps = {};

const ProvincialMenu: React.FC<ProvincialMenuProps> = (props: ProvincialMenuProps) => {
  return (
    <>
      <MenuHeader />
      <Routes>
        <Route path="/" element={<Plates />} index />
        <Route path="plates" element={<Plates />} />
        <Route path="cocktails" element={<Cocktails />} />
        <Route path="wine" element={<Wine />} />
        <Route path="spirits" element={<Spirits />} />
        <Route path="tap" element={<Tap />} />
        <Route path="coffee" element={<Coffee />} />
      </Routes>
    </>
  );
};

export default ProvincialMenu;