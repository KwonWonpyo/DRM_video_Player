import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import Thumbnail from 'components/Thumbnail';
import { listVideos } from 'serverAPI';
import 'styles/home.css';

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
    src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  },
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
    src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  },
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
    src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  },
];

async function Home() {
  // TODO: 20개씩 끊어서 로딩
  // TODO: onScroll 시에 추가로 더 가져오기
  const vidoeList = await listVideos();

  const { content, pageable, totalPages, totalElements, last, number, sort, size, numberOfElements, first, empty } = vidoeList;

  const thumbnailList = content.map(video => <Thumbnail video={video} />);

  return (
    <div className="home_background">
      <div className="video_list">
        <div className="video_list_title">업로드된 동영상</div>
        {thumbnailList}
      </div>
      <div className="video_player">{VideoPlayer}</div>
    </div>
  );
}
export default Home;
