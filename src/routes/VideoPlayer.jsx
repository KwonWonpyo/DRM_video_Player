import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
import axios from 'axios';
import config from '../config.json';
import 'shaka-player-react/dist/controls.css';
import 'styles/videoplayer.css';
import CommentWrapper from '../components/CommentWrapper';

function VideoPlayer() {
  const { videoId } = useParams();
  const filename = `${videoId}/h264.mpd`;
  const { sessionStorage } = window;
  const { SERVER_ADDRESS } = config;
  const [drmKey, setDrmKey] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`${SERVER_ADDRESS}/keys/${videoId}`, {
  //       headers: {
  //         Authrization: sessionStorage.getItem('authToken'),
  //       },
  //     })
  //     .then(response => {
  //       setDrmKey(response.data);
  //     });
  // }, []);

  // if (drmKey === null) {
  //   return <div> Loading... </div>;
  // }

  if (drmKey === null) {
    return (
      <>
        <div className="player_wrap">
          <ShakaPlayer
            autoPlay
            src="https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8"
          />
        </div>
        <CommentWrapper />
      </>
    );
  }

  const src = `${SERVER_ADDRESS}/videos/dash/${filename}`;

  return (
    <>
      <div className="player_wrap">
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
      <CommentWrapper />
    </>
  );
}

export default VideoPlayer;
