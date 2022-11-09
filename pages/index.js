import React from 'react';

const Home = () => {
  return (
    <>
    HeroBanner    {/* component */}

    <div className='products-heading'>
      <h2>Happy Wares :)</h2>
      <p>You've come to the right place!</p>
    </div>

    <div className='products-container'> {/* placeholder */}
      {['Product 1', 'Product 2'].map((product) => product)}
    </div>

    Footer        {/* component */}
    </>
  )
}

export default Home