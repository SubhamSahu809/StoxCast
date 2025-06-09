import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mb-5'>
                <img src='media/homeHero.png' alt='Hero Image' className='mb-5'></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Invest in stocks, ETFs, options, and cryptocurrencies, all commission-free, right from your phone or desktop.</p>
                <button className='btn btn-primary p-2 fs-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>

            </div>
        </div>
     );
}

export default Hero;

