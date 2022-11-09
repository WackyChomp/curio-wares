import React from 'react';

const Home = () => {
  return (
    <>
    HeroBanner    {/* component */}

    <div>
      <h2>Happy Wares :)</h2>
      <p>You've come to the right place!</p>
    </div>

    <div> {/* placeholder */}
      {['Product 1', 'Product 2'].map((product) => product)}
    </div>

    Footer        {/* component */}
    </>
  )
}

export default Home