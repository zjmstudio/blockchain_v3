import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeCoins from '../routes/HomeCoins';
import CoinPage from '../components/CoinPage';
import axios from 'axios'



function MoreCoinsApp() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=true'

  useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data)
   // console.log(response.data)
  })
},[url])
  
  return (
  <>
    
        <Routes>
          <Route path='/' element={<HomeCoins coins={coins} />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
          </Route>
        </Routes>
    
  </>
  );
}

export default MoreCoinsApp;
