import { useEffect, useState } from "react"; 
 
export const Navigation = (props) => {

 return (
    <div>
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <div className='navbar-header'>
              <a className='navbar-brand page-scroll' href='#page-top'>
                JPMC Meta Yantra
              </a>{' '}
            </div>

            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <button id="walletButton" className='btn btn-custom' >
                   
                      <span>Connect Wallet</span>
                   
                  </button>
                </li>
                <li>
                  <a href='#issuenft' className='page-scroll'>
                    ISSUE NFT
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        
    </div>
  )


  
}
