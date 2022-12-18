/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import 'styles/auth.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async event => {
    event.preventDefault();
    try {
      const auth = getAuth();
      let accountLoggedIn;

      // 임시
      setNewAccount(true);
      if (newAccount) {
        // create acoount and also log in automatically
        accountLoggedIn = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // log inProfile
        accountLoggedIn = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(accountLoggedIn);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className='auth_page'>
      <form onSubmit={onSubmit}>
        <input
          className='input_text_login'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={onChange}
          required
        />
        <input
          className='input_text_login'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
          required
        />
        <div className='login_keep_wrap' id='login_keep_wrap'>
          <div className='keep_check'>
            <input type='checkbox' id='keep' name='nvlong' className='input_keep' value='off'/>
            <label htmlFor='keep' className='keep_text'>로그인 상태 유지</label>
          </div>
        </div>
        <div className='btn_login_wrap'>
          <button type='submit' className='btn_login' id='log.login'>
            <span className='btn_text'>{newAccount ? '새 계정 생성' : '로그인'}</span>
          </button>
        </div>
        <div className='error_text'>
          {errorMessage}
        </div>
      </form>
      {/* <span onClick={toggleAccount}>{newAccount ? 'Login' : 'Create'} </span> */}
      <div className='social_login_wrapper'>
        <button className='social_login' type='button' style={{backgroundColor: 'white'}}>
          <div style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            marginRight: '12px',
            backgroundImage: 'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)'
          }}/>
          Google 계정으로 로그인
        </button>
        <button className='social_login' type='button' style={{backgroundColor: 'lightgray'}}>
          <div style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            marginRight: '12px',
            backgroundImage: 'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)'
          }}/>
          GitHub 계정으로 로그인
        </button>
      </div>
    </div>
  );
}

export default Auth;
