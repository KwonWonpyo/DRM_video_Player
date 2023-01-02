/* eslint-disable no-unreachable */
import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
// import axios from 'axios';
import 'shaka-player-react/dist/controls.css';

const STREAMS = [
  {
    id: 1,
    name: 'Angel One MPEG-DASH',
    src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',
  },
  {
    id: 2,
    name: 'Big Buck Bunny HLS',
    src: 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8',
  },
  {
    id: 3,
    name: '웬 이상한 테스트 영상',
    src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
  },
];

function VideoPlayer() {
  const ref = React.useRef(null);

  const { id } = useParams();

  // 서버에 요청해서 정보 가져오기
  const { src } = STREAMS[id - 1];

  React.useEffect(() => {
    window.getShakaInst = () => ref.current;
  }, []);

  return (
    <div>
      <ShakaPlayer ref={ref} autoPlay src={src} />
    </div>
  );
}

function Legacy() {
  const controllerRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const { player, ui, videoElement } = controllerRef.current; // FIXME: no-unused-vars

    async function loadAsset() {
      player.configure({
        drm: {
          clearKeys: {
            c9a79d0804d45264f7de2f66af75688c: '158f25eeb81dc3a4cc9a28262cd05d7d',
            '34fe57f3db8f512da22effc10f899bca': 'ebd8161cb76ff291e13264d4f1cab0dd',
            e980393035649b5cc082908d195cbeb4: '0abb8bb3c6f31fc313c3d28f9ff28667',
            c9c26935e8a9f12899f4b7c77426204f: '37461a165d13227beea8fde9d3367306',
            ebd5d6544486ec5a872991c8ff854ce2: 'ade581f0b8e3743d7fd93beff971a946',
          },
        },
      });
      // Load an asset.
      await player.load('http://192.168.153.159:8081/videos/dash/test_video_id_fixed/h264.mpd');

      // Trigger play
      videoElement.play();
    }

    loadAsset();
  }, []);

  return <ShakaPlayer ref={controllerRef} />;
}

export default VideoPlayer;
