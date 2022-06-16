import Web3 from 'web3';  
import erc721 from "./MetaYantra.json";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const web3 = new Web3(window.ethereum);

let networkId = 80001;
console.log('networkId', networkId);

let deployedNetwork = erc721.networks[networkId];
if (!deployedNetwork) {
  console.warn('web3 provider is connected to a network ID that does not matched the deployed network ID');
  console.warn('Pls make sure that you are connected to the right network, defaulting to deployed network ID');
  networkId = Object.keys(erc721.networks)[0];
  deployedNetwork = erc721.networks[networkId];
}
console.log('deployedNetwork.address', deployedNetwork.address);

// initialise the contract
const contract = new web3.eth.Contract(
      erc721.abi,
      deployedNetwork.address,
    );

const toastConfig={
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      };
  
export const mintNFT = async(person) => {
  try {
        console.log('Mint NFT');
        await contract.methods.awardItem("0x3167Aca31e1b24E900794A64f4d873B24f79AA1b","https://metayantra.com").send({
                              from: window.ethereum.selectedAddress, // default from address
                              gasPrice: web3.eth.getGasPrice()*1 // default gas price in wei, 100 gwei in this case
                            }).on('transactionHash', function(hash){
                               console.log("hash : "+hash);  
                               toast.success('We sent an transaction to the network! Check your Opensea & Wallet after few minutes', toastConfig);
                            }).on('error', function(error, receipt) {
                               console.log("Error: "+error+" , receipt "+receipt);
                            });
        var finalStatus = ' NFT is now on block chain for forever.';
        
        return {
            success: true,
            status: finalStatus
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
        
}


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Click here to mint NFT.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noopener noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};


export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noopener noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};