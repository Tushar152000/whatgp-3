import React from 'react'
import { Button ,Menu,Typography ,Avater } from 'antd'
import { Link } from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined, BulbOutlined,FundOutline,MenuOutlined} from "@ant-design/icons";
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
             <Avater  src={icon} size="large" />
             <Typography.title level={2} className="logo">
                <Link to='/'>CryptoVerese</Link>
             </Typography.title>
            {/* <Button className='menu-control-container'>

            
            </Button> */}
        </div>
      
      <Menu theme="dark">
        <Menu.item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>

        </Menu.item>
        <Menu.item icon={<FountOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>

        </Menu.item>
        <Menu.item icon={< MoneyCollectOutlined/>}>
            <Link to="/exchange">Exchange</Link>

        </Menu.item>
        <Menu.item icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>

        </Menu.item>
      </Menu>
    </div>
  )
}

export default Navbar
