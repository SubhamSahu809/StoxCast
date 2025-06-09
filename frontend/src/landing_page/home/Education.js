import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/education.svg' alt='Education' style={{width:"80%"}}/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p className='mb-2 fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}} >Varsity <i class="fa fa-long-arrow-right"></i></a>

                    <p className='mb-2 mt-5 fs-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right"></i></a>
                
                    
                </div>
            </div>
        </div>
     );
}

export default Education;