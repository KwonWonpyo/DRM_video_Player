import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

function PageRouter({ isLoggedIn }) {
  return (
    <HashRouter>
      <Routes>
        {isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} />}
      </Routes>
    </HashRouter>
  );
}

export default PageRouter;
