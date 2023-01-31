import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import VideoUpload from '../routes/VideoUpload';
import VideoPlayer from '../routes/VideoPlayer';

function PageRouter({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} />}
        <Route path="/videoplayer/:videoId" element={<VideoPlayer />} />
        <Route path="/upload" element={<VideoUpload />} />
        <Route path="/authtest" element={<Auth />} />
        <Route path="/hometest" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
