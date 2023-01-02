import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import VideoPlayer from './VideoPlayer';

function PageRouter({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} />}
        <Route path="/videoplayer/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
