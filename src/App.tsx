import React from 'react';
import './App.css';
import ProvincalHeader from './components/header/ProvincalHeader';
import Home from './components/home/ProvincalHome';
import Story from './components/story/ProvincalStory';
import Menu from './components/menu/ProvincalMenu';
import Shop from './components/shop/ProvincalShop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProvincialFooter from './components/footer/ProvincialFooter';

function App() {
  return (
    <Router>
      <div className="App">
        <ProvincalHeader></ProvincalHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="menu/*" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <ProvincialFooter></ProvincialFooter>
      </div>
    </Router>
  );
}

export default App;
