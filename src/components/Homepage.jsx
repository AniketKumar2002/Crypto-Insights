import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import Cryptocurrencies from './Cryptocurrencies';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';


const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(100);
    const globalStats = data?.data?.stats;
    
    if(isFetching) return <Loader />;

    return (
        <div>
            <>
                <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
                <Row>
                    <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.totalCoins} /></Col>
                    <Col span={12}><Statistic title='Total Exchanges' value={globalStats.totalExchanges} /></Col>
                    <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                    <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} /></Col>
                    <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
                </Row>
                <div className='home-heading-container'>
                    <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies at the moment</Typography.Title>
                    <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
                </div>
                <Cryptocurrencies simplified />
            </>
        </div>
    );   
}

export default Homepage;