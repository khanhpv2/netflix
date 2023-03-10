import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {FirebaseContext} from '../context/firebase'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import { Form } from '../components'
import * as ROUTES from '../components/constants/routes'

export default function SignUp() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('')
  const [emailAddress,setEmailAddress] = useState('');
  const [password,setPassWord] = useState('');
  const [error,setError] = useState('');
  const isInvalid =  firstName === '' || password === '' || emailAddress === ''; 

  const handleSignup = (event) => {
    event.preventDefault();

     firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <div>
       <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base  onSubmit={handleSignup} method='POST'>
            <Form.Input
              placeholder="First Name"
              value = {firstName}
              onChange = {({target}) => setFirstName(target.value)  }
            />
            <Form.Input
              placeholder="Email address"
              value = {emailAddress}
              onChange = {({target}) => setEmailAddress(target.value)  }
            />
            <Form.Input
              type ="password"
              placeholder="Password"
              autoComplete = "off"
              value = {password}
              onChange = {({target}) => setPassWord(target.value)  }
            />
            <Form.Submit disable={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user ? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
            This page is protected by Google reCAPCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
       </HeaderContainer>
       <FooterContainer /> 
    </div>
  )
}
