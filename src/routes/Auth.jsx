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
      // eslint-disable-next-line no-restricted-globals
      location.replace('/');
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  const onSignUp = async event => {
    event.preventDefault();
    try {
      // create acoount and also log in automatically
      const accountLoggedIn = await userSignUp(username, password, 'nick');
      console.log(accountLoggedIn);

      alert('계정이 생성되었습니다.');
      onLogin(event);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const onLoginKeep = event => {
    setLoginKeep(event.target.checked);
  };

  return (
    <div className="auth_page">
      <div className="auth_logo">DRM PLAYER</div>
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
            <input
              type="checkbox"
              id="keep"
              name="keep"
              className="input_keep"
              onClick={onLoginKeep}
              checked={loginKeep}
            />
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
      <div
        className="error_text"
        style={{ height: '20px', color: 'rgb(253, 57, 57)', textAlign: 'center' }}
      >
        {errorMessage}
      </div>
      <div className="btn_social_login_wrap">
        <button className="btn_social_login" type="button" style={{ backgroundColor: '#1977f3' }}>
          <svg className="btn_social_login--logo" viewBox="0 0 14222 14222">
            <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
            <path
              d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
              fill="#fff"
            />
          </svg>
        </button>
        <button className="btn_social_login" type="button" style={{ backgroundColor: 'white' }}>
          <svg
            className="btn_social_login--logo"
            style={{ width: '35px', height: '35px' }}
            viewBox="0 0 24 24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
        </button>
        <button className="btn_social_login" type="button" style={{ backgroundColor: '#03C75A' }}>
          <img className="btn_social_login--logo" src="./btnG_icon.png" alt="naver_logo" />
        </button>
        <button className="btn_social_login" type="button" style={{ backgroundColor: '#ffeb00' }}>
          <svg
            className="btn_social_login--logo"
            style={{ width: '50px', height: '50px' }}
            viewBox="0 0 48 48"
            focusable="false"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" fillRule="evenodd">
              <path
                fill="#FFEB00"
                d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
              />
              <path
                fill="#3C2929"
                d="M24 11.277c8.284 0 15 5.306 15 11.85 0 6.545-6.716 11.85-15 11.85-.92 0-1.822-.066-2.697-.191l-6.081 4.105a.43.43 0 0 1-.674-.476l1.414-5.282C11.777 31.031 9 27.335 9 23.127c0-6.544 6.716-11.85 15-11.85zm6.22 8.407c-.416 0-.718.297-.718.707v5.939c0 .41.289.686.718.686.41 0 .718-.295.718-.686v-1.932l.515-.526 1.885 2.57c.277.374.426.54.691.568.037.003.075.005.112.005.154 0 .66-.04.716-.563.038-.293-.137-.52-.348-.796l-2.043-2.675 1.727-1.743.176-.196c.234-.26.353-.39.353-.587.009-.422-.34-.652-.687-.661-.274 0-.457.15-.57.262l-2.528 2.634v-2.3c0-.422-.288-.706-.717-.706zm-9.364 0c-.56 0-.918.432-1.067.837l-2.083 5.517a.84.84 0 0 0-.065.315c0 .372.31.663.706.663.359 0 .578-.162.69-.51l.321-.97h2.999l.313.982c.111.335.34.498.7.498.367 0 .655-.273.655-.62 0-.056-.017-.196-.081-.369l-2.019-5.508c-.187-.53-.577-.835-1.069-.835zm-2.92.064h-4.452c-.417 0-.642.337-.642.654 0 .3.168.652.642.652h1.51v5.21c0 .464.274.752.716.752.443 0 .718-.288.718-.751v-5.21h1.508c.474 0 .643-.352.643-.653 0-.317-.225-.654-.643-.654zm7.554-.064c-.442 0-.717.287-.717.75v5.707c0 .497.28.794.75.794h2.674c.434 0 .677-.321.686-.627a.642.642 0 0 0-.17-.479c-.122-.13-.3-.2-.516-.2h-1.99v-5.195c0-.463-.274-.75-.717-.75zm-4.628 1.306l.008.01 1.083 3.265h-2.192L20.842 21a.015.015 0 0 1 .028 0z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Auth;
