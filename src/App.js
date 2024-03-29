import React from "react";
import {
  Navbar,
  Homepage,
  CryptoDetails,
  News,
  Exchanges,
  Cryptocurrencies,
} from "./components";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Layout, Typography, Space } from "antd";
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route
                exact
                path='/crypto_currencies'
                element={<Cryptocurrencies />}
              />

              <Route exact path='/cryptodetails' />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />

              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
