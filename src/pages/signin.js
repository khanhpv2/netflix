import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {FirebaseContext} from '../context/firebase'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import { Form } from '../components'
import * as ROUTES from '../components/constants/routes'

export default function SignIn() {
  const history = useHistory();
  const { firebase} = useContext(FirebaseContext)
  const [emailAddress,setEmailAddress] = useState('');
  const [password,setPassWord] = useState('');
  const [error,setError] = useState('');
 
  const isInvalid = password === '' || emailAddress === ''; 
  const handleSignIn = (event) => {
    event.preventDefault()
    // firebase work here !!
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress,password)
      .then ( () => {
        // push to the browse page
        history.push(ROUTES.BROWSE)
      })
      .catch( (error) => {
        setEmailAddress('');
        setPassWord('');
        setError(error.message);
      }) 
  }
  return (
    <div>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
              <Form.Input
                placeholder = "Email address"
                value = {emailAddress}
                onChange = { ({target}) => setEmailAddress(target.value) }
               />
               <Form.Input
                type = "password"
                autoComplate = "off"
                placeholder = "Password"
                value = {password}
                onChange = { ({target}) => setPassWord(target.value) }
               />
               <Form.Submit disable={isInvalid} type="submit">
                  Sign In
               </Form.Submit>                
          </Form.Base>

          <Form.Text>
            New to Netflix ? <Form.Link to="/signup"> Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
          
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </div>
  )
}



