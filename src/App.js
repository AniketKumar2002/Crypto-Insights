import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies/>
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Crypto Insights <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link> &nbsp; &nbsp; &nbsp;
            <Link to='/cryptocurrencies'>Crypto Currencies</Link> &nbsp; &nbsp; &nbsp;
            <a href='https://twitter.com/PopAnri'>Twitter</a> &nbsp; &nbsp; &nbsp;
            <a href='mailto:aniket83839@gmail.com'>Email</a>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
