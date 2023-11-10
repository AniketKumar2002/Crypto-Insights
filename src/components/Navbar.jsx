import React, {useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if(screenSize < 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

    const toggleActiveMenu = () => {
        if(activeMenu) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }

    const menuItems = [{
        key: 1,
        label: (
            <Link to='/'>Home</Link>
        ),
        icon: <HomeOutlined />
    },{
        key: 2,
        label: (
            <Link to='/cryptocurrencies'>Crypto Currencies</Link>
        ),
        icon: <FundOutlined />
    },];

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto Insights</Link>
                </Typography.Title>  
                <Button className='menu-control-container' onClick={toggleActiveMenu}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && <Menu theme='dark' items={menuItems} />}
        </div>
    );
};

export default Navbar;