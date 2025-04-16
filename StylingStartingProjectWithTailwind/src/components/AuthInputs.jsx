import { useState } from 'react';
import { styled } from 'styled-components';
import StyledButton from './Button.jsx';
import CustomInput from './CustomInput.jsx';

export default function AuthInputsStyledComponents() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <div>
          <CustomInput
            label="Email"
            type="email"
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <CustomInput
            label="Password"
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </div>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <StyledButton className='button' onClick={handleLogin}>Sign In</StyledButton>
      </div>
    </div>
  );
}
