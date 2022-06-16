import { useEffect, useState } from "react"; 
import { mintNFT } from "../interact.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = (props) => {

  //State variables
  const [status, setStatus] = useState("");
  const [numberNFT, setNumberNFT] = useState("");
 
  useEffect(() => { 
     async function fetchData() {
        setNumberNFT(1) ;
        setStatus('');
     };
     fetchData();
  }, []);


  const onMintPressed = async () => { 
     const { success,status } = await mintNFT(numberNFT);
     if(success=== true){
          toast.success(status, {
                                        position: "bottom-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        });
     }else{
         toast.error(status , {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
     }
    
  };

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                  <form>
                    <input
                      type="number"
                      value={numberNFT}
                      min="1"
                      placeholder="e.g. 5"
                      onChange={(event) => setNumberNFT(event.target.value)}
                    />
                  </form>
                   <button id="mintButton" className='btn btn-custom btn-lg' onClick={onMintPressed}>
                    Issue NFT
                  </button>
                   <p id="status">
                    {status}
                   </p>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                {' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )




}


