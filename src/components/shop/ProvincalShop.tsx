import React from 'react'
import './ProvincialShop.scss';
import Commerce from '@chec/commerce.js';
 
type ProvincialShopProps = {};
 
const ProvincialShop: React.FC<ProvincialShopProps> = (props: ProvincialShopProps) => {

  const commerce = new Commerce('pk_test_5302070f291e5a5e50a15d660cade2cc090cb782e417d');
  commerce.products.list().then((product) => console.log(product));
  return (
    <></>
  )
}
 
export default(ProvincialShop)
 