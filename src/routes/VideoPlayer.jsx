import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
import axios from 'axios';
import config from '../config.json';
import 'shaka-player-react/dist/controls.css';

function VideoPlayer() {
  const { videoId } = useParams();
  const filename = `${videoId}/h264.mpd`;
  const { sessionStorage } = window;
  const { SERVER_ADDRESS } = config;
  const [drmKey, setDrmKey] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_ADDRESS}/keys/${videoId}`, {
        headers: {
          Authrization: sessionStorage.getItem('authToken'),
        },
      })
      .then(response => {
        setDrmKey(response.data);
      });
  }, []);

  if (drmKey === null) {
    return <div> Loading... </div>;
  }

  const src = `${SERVER_ADDRESS}/videos/dash/${filename}`;

  return (
    <div>
      <ShakaPlayer
        autoPlay
        src={src}
        config={{
          drm: {
            clearKeys: drmKey,
          },
        }}
      />
    </div>
  );
}

export default VideoPlayer;
