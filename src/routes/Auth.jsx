/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { userLogIn, userSignUp } from '../serverAPI';
import 'styles/auth.css';

function Auth() {
  const [username, setUsername] = useState('ut elit');
  const [password, setPassword] = useState('mollit est in');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginKeep, setLoginKeep] = useState(true);

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSignUp = async event => {
    event.preventDefault();
    try {
      // create acoount and also log in automatically
      const accountLoggedIn = await userSignUp(username, password, 'nick');
      console.log(accountLoggedIn);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const onLogin = async event => {
    event.preventDefault();
    try {
      const user = await userLogIn(username, password);
      console.log(user.token);

      if (loginKeep) {
        localStorage.setItem('drm_cur_user', username);
      } else {
        sessionStorage.setItem('drm_cur_user', username);
      }
        
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const onLoginKeep = event => {
    setLoginKeep(event.target.checked);
  }

  return (
    <div className="auth_page">
      <div className="auth_logo">
        DRM PLAYER
      </div>
      <form onSubmit={onLogin}>
        <input
          className="input_text_login"
          name="username"
          type="text"
          placeholder="아이디"
          value={username}
          onChange={onChange}
          required
        />
        <input
          className="input_text_login"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
          required
        />
        <div className="login_keep_wrap" id="login_keep_wrap">
          <div className="keep_check">
            <input type="checkbox" id="keep" name="keep" className="input_keep" onClick={onLoginKeep} checked={loginKeep}/>
            <label htmlFor="keep" className="keep_text">
              로그인 상태 유지
            </label>
          </div>
        </div>
        <div className="btn_login_wrap">
          <button type="submit" className="btn_login" id="login">
            <span className="btn_text">로그인</span>
          </button>
        </div>
      </form>
      <div className="btn_sign_up_wrap">
        <button className="btn_sign_up" type="button" onClick={onSignUp}>
          계정 만들기
        </button>
      </div>
      <div className="btn_social_login_wrap">
        <button className="btn_social_login" type="button" style={{ backgroundColor: 'blue' }}>
          <div
            style={{
              display: 'inline-block',
              width: '24px',
              height: '24px',
              marginRight: '12px',
              backgroundImage:
                'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)',
            }}
          />
        </button>
        <button className="btn_social_login" type="button" style={{ backgroundColor: 'white' }}>
          <div
            style={{
              display: 'inline-block',
              width: '24px',
              height: '24px',
              marginRight: '12px',
              backgroundImage:
                'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)',
            }}
          />
        </button>
        <button className="btn_social_login" type="button" style={{ backgroundColor: 'green' }}>
          <div
            style={{
              display: 'inline-block',
              width: '24px',
              height: '24px',
              marginRight: '12px',
              backgroundImage:
                'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)',
            }}
          />
        </button>
        <button className="btn_social_login" type="button" style={{ backgroundColor: 'yellow' }}>
          <div
            style={{
              display: 'inline-block',
              width: '24px',
              height: '24px',
              marginRight: '12px',
              backgroundImage:
                'url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png)',
            }}
          />
        </button>
      </div>
      <div className="error_text" style={{ height: '20px' }}>
        {errorMessage}
      </div>
    </div>
  );
}

export default Auth;
