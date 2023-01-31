import React, { useState } from 'react';
import axios from 'axios';
import config from '../config.json';

function VideoUpload() {
  const { SERVER_ADDRESS } = config;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [uploadFlag, setUploadFlag] = useState(0);
  const form = new FormData();

  const submitVideo = e => {
    e.preventDefault();
    const json = JSON.stringify({
      title,
      description,
      exposure: 'public',
    });
    const blob = new Blob([json], { type: 'application/json' });
    form.append('body', blob);
    form.append('video', selectedVideo);
    form.append('thumbnail', selectedImage);
    axios
      .post(`${SERVER_ADDRESS}/videos/`, form, {
        headers: {
          Authorization: sessionStorage.getItem('authToken'),
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json, application/xml, text/plain, text/html, */*',
        },
      })
      .then(response => {
        setUploadFlag(1);
      })
      .catch(response => {
        setUploadFlag(-1);
      });
  };

  if (uploadFlag === 0) {
    return (
      <form onSubmit={submitVideo}>
        <input type="file" onChange={e => setSelectedVideo(e.target.files[0])} />
        <input type="file" onChange={e => setSelectedImage(e.target.files[0])} />
        <input type="text" placeholder="제목" onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="영상 설명" onChange={e => setDescription(e.target.value)} />

        <button type="submit">업로드</button>
      </form>
    );
  }
  if (uploadFlag === 1) {
    return (
      <div>
        <h3>업로드가 완료되었습니다.</h3>
        <h6>영상은 인코딩 후 표시됩니다(최대 한시간 소요)</h6>
      </div>
    );
  } // uploadFlag == -1
  return <h1>업로드에 실패하였습니다.</h1>;
}

export default VideoUpload;
