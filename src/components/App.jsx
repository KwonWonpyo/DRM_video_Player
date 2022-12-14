/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PageRouter from 'components/PageRouter';
import Header from 'components/Header';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import initApp from '../firebase';
import 'styles/app.css';

function App() {
  const FirebaseApp = initApp; // initilize firebase server
  const auth = getAuth(); // 로그인된 계정 정보

  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  // 로딩이 너무 빨라서 나중에 꾸며도 될 듯
  const onLoadingMessage = (
    <div className="loading_page">
      <p className="loading_message">서버를 불러오는 중입니다...</p>
    </div>
  );

  return (
    <div className="drm_player_app">
      <Header />
      <div className="page_container">
        {init ? <PageRouter isLoggedIn={isLoggedIn} /> : '서버를 불러오는 중입니다...'}
      </div>
      <footer className="app_footer">
        <div className="copyright">&copy;copyright 2023, DRM Player by 권원표, 김두희</div>
      </footer>
    </div>
  );
}

export default App;
