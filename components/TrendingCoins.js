import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      //   console.log(response.data.coins)
    });
  }, []);

  return (
    <div className='rounded-div my-12 py-8 text-primary border-none'>
      <h1 className='trending-coins-h1'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {trending.map((coin, idx) => (
          <div key={idx} className='card-trending'>
            
            <div className='flex w-full items-center justify-between'>
              <div className='flex'>
                <img
                  className='mr-4 rounded-full'
                  src={coin.item.small}
                  alt='/'
                />
                <div>
                  <p className='font-bold'>{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className='flex items-center'>
                {/*<img
                  className='w-4 mr-2'
                  src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                  alt='/'
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
