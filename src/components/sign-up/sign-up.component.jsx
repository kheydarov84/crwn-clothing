import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import 'sign-up.styles.scss';

class SignUp {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <FormInput type='text' name='displayName' value={displayName} >
      </div>
    )
  }
    
}
