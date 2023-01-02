/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import 'styles/auth.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const onSignUp = async event => {
    event.preventDefault();
    try {
      const auth = getAuth();

      // create acoount and also log in automatically
      const accountLoggedIn = await createUserWithEmailAndPassword(auth, email, password);
      console.log(accountLoggedIn);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const onLogin = async event => {
    event.preventDefault();
    try {
      const auth = getAuth();
      const accountLoggedIn = await signInWithEmailAndPassword(auth, email, password);
      console.log(accountLoggedIn);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='auth_page'>
      <form onSubmit={onLogin}>
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
            <span className='btn_text'>로그인</span>
          </button>
        </div>
      </form>
      <div className='btn_sign_up_wrap'>
        <button className='btn_sign_up' type='button' onClick={onSignUp}>새 계정 생성</button>
      </div>
      <div className='btn_social_login_wrap'>
        <button className='btn_social_login' type='button' style={{backgroundColor: 'blue'}}>
          <div style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            marginRight: '12px',
            backgroundImage: 'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)'
          }}/>
        </button>
        <button className='btn_social_login' type='button' style={{backgroundColor: 'white'}}>
          <div style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            marginRight: '12px',
            backgroundImage: 'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)'
          }}/>
        </button>
        <button className='btn_social_login' type='button' style={{backgroundColor: 'green'}}>
          <div style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            marginRight: '12px',
            backgroundImage: 'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)'
          }}/>
        </button>
        <button className='btn_social_login' type='button' style={{backgroundColor: 'yellow'}}>
          <div style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            marginRight: '12px',
            backgroundImage: 'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)'
          }}/>
        </button>
      </div>
      <div className='error_text' style={{height: '20px'}}>
        {errorMessage}
      </div>
    </div>
  );
}

export default Auth;
