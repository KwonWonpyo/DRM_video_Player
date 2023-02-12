/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PageRouter from 'components/PageRouter';
import Header from 'components/Header';
import 'styles/app.css';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  window.onstorage = event => {
    if (event.key !== 'drm_cur_user') return;

    if (sessionStorage.getItem('drm_cur_user') || localStorage.getItem('drm_cur_user')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    console.log('onstorage called');
  };

  useEffect(() => {
    if (sessionStorage.getItem('drm_cur_user') || localStorage.getItem('drm_cur_user')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setInit(true);
  }, []);

  // 로딩이 너무 빨라서 나중에 꾸며도 될 듯
  const onLoadingMessage = (
    <div className="loading_page">
      <p className="loading_message">서버를 불러오는 중입니다...</p>
    </div>
  );

  const handleScroll = event => {
    const headerComponent = document.getElementById('app_header');
    if (!headerComponent) return;

    if (headerComponent.clientWidth < 500) setCollapsed(true);
    else setCollapsed(false);
  };

  return (
    <div className="drm_player_app" onMouseMove={handleScroll} onScroll={handleScroll}>
      <Header collapsed={collapsed} />
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
