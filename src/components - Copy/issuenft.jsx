import { useState } from 'react'
import emailjs from 'emailjs-com'


const initialState = {
  name: '',
  email: '',
  message: '',
}
export const IssueNft = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)


  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='IssueNft'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Issue NFT</h2>
                
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='BlockChain Address'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
				<div>
				<label for="choices">NFT Type</label>

<select id="choices">
  <option value="rewards">REWARDS</option>
  <option value="awards">AWARDS</option>
  <option value="access">ACCESS</option>
</select>
				</div>

                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Submit
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Meta Yantra
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
