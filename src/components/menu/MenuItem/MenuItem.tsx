import React from 'react'
import './MenuItem.scss';
import { Typography} from 'antd';

const { Title, Text } = Typography;
 
type MenuItemProps = {
    title: string
    price: number
    price2: number | undefined
    price3: number | undefined
    description: string | undefined
};
 
const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    const {title, price, price2, price3, description} = props;

    let priceBox;

    if(price2 && price3){
        priceBox = '$' + price + '/$' + price2 + '/$' + price3;
    }else if(price2 && !price3) {
        priceBox = '$' + price + '/$' + price2;
    }else if(!price2 && price3) {
        priceBox = '$' + price + '/$' + price3;
    }else{
        priceBox = '$' + price;
    }
  return (
    <div className='menuItem'>
        <div className='menuItemHeader'>
            <div className='menuItemTitle'>
                <Title level={5}>
                    {title}
                </Title>
            </div>
            <div className='menuItemPrice'>
            <Title level={5}>
                    {priceBox}
                </Title>
            </div>
        </div>
        <div className='menuItemDescription'>
            <Text>
                {description}
            </Text>
        </div>
    </div>
  )
}
 
export default(MenuItem)
 