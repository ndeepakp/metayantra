import { useEffect, useState } from "react"; 

export const Header = (props) => {
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  
  const tableStyle = {
	  "margin-left": "auto",
	  "margin-right": "auto"
  }
  
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                  <form>
					<table style={tableStyle}>
						<tr >
							<input
							  type="number"
							  min="1"
							  placeholder="NFT Qty"  
							/>
						</tr>
						<br />
						<tr>
							<select defaultValue={value} onChange={handleChange} id="choices">
							  <option value="default" disabled hidden>
								Choose the Token Type
							  </option>
							  <option value="rewards">REWARDS</option>
							  <option value="awards">AWARDS</option>
							  <option value="access">ACCESS</option>
							</select>
						</tr>
						<br />
						<br />
						<tr>
							<font size="5"> Or you can upload file with details</font>
							<br />
							<br />
							<input type="file" id="myFile" name="filename" />
							
						</tr>
						<br />
						<br />
						<tr >
							<input
							  type="string"
							  placeholder="Blockchain Address"  
							/>
						</tr>
						<br />
						<tr>		  
						   <button id="mintButton" className='btn btn-custom btn-lg' >
							Issue NFT
						  </button>
						</tr>
					</table>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )




}


