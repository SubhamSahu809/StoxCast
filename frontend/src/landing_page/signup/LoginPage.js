import React from 'react'
import Signup from './Signup';
import OpenAccount from '../OpenAccount';
import FAQ from './FAQ';
import Feature from './Feature';


function LoginPage() {
    return ( 
        <>
            <div className='text-center p-5'>
                <h1 className='mb-3'>Open a free demat and trading account online</h1>
                <p className='fs-5 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <Signup/>
            <Feature/>
            <FAQ/>
            <OpenAccount/>
        </>
     );
}

export default LoginPage;