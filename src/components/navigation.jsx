import { useEffect, useState } from "react"; 
import { connectWallet,getCurrentWalletConnected } from "../interact.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastConfig={
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      };
 
export const Navigation = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");

  const connectWalletPressed = async () => { 
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

   const changeNetwork = async () => {
    if (window.ethereum) {
      try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{ 
                          chainId: '0x89',
                          rpcUrl: ['https://rpc-mainnet.matic.quiknode.pro'],
                          blockExplorerUrls: ['https://polygonscan.com/'],
                          chainName: 'Polygon Mainnet',
                          nativeCurrency: {
                                      name: 'Matic',
                                      symbol: 'MATIC',
                                      decimals: 18
                                }, 
                        }],
                           
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }
    }
  };

  useEffect(() => {
         async function fetchData() {
              const {address} = await getCurrentWalletConnected();
              setWallet(address)
              addWalletListener();
              changeNetwork();
          };
        fetchData();
    }, []);

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
                  <button id="walletButton" className='btn btn-custom'  onClick={connectWalletPressed}>
                    {walletAddress.length > 0 ? (
                      "Connected: " +
                      String(walletAddress).substring(0, 6) +
                      "..." +
                      String(walletAddress).substring(38)
                    ) : (
                      <span>Connect Wallet</span>
                    )}
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
        <ToastContainer />
    </div>
  )


  function addWalletListener() {
  
  if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
              if (accounts.length > 0) {
                setWallet(accounts[0]);
              } else {
                setWallet("");
                toast.error('🦊 Connect to Metamask using the top right button.' , toastConfig);
              }
            });

            window.ethereum.on("chainChanged", (networkId) => {
                console.log('networkId: '+networkId);
                 if (networkId === '0x89') {
                     toast.info('🦊 Connected to Polygon Mainnet and ready to mint.' , toastConfig);
                 }else {
                     toast.error('👆🏽 Please connect to Polygon Mainnet.' , toastConfig);
                  }  
            });

  } else {
    toast.info(({ closeToast }) => 
                  <div>{" "}🦊{" "}
                        <a target="_blank" rel="noopener noreferrer" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual Ethereum wallet, in your browser. 
                        </a>
                  </div>
                  ,toastConfig );

    }
  }

  
}
