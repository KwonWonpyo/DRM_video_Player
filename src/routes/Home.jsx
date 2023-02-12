import React, { useEffect, useState } from 'react';
import { listVideos } from 'serverAPI';
import Thumbnail from '../components/Thumbnail';
import 'styles/home.css';

function Home() {
  // TODO: 20개씩 끊어서 로딩
  // TODO: onScroll 시에 추가로 더 가져오기
  const [load, setLoad] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    async function loadThumbnails() {
      // You can await here
      const vidoeList = await listVideos();
      const {
        content,
        pageable,
        totalPages,
        totalElements,
        last,
        number,
        sort,
        size,
        numberOfElements,
        first,
        empty,
      } = vidoeList;
      const thumbnailList = content.map(info => <Thumbnail key={info.videoId} info={info} />);
      setThumbnails(thumbnailList);
      // ...
      setLoad(true);
    }
    loadThumbnails();

    if (thumbnails.length === 0) {
      thumbnails.push('업로드 된 동영상이 없습니다.');
    }
  }, []);

  return (
    <div className="home_background">
      <div id="banner">
        <div id="banner_img" />
      </div>
      <div className="video_list_title">업로드된 동영상</div>
      <div className="tag_container">
        <div className="tag">
          <span>Education</span>
        </div>
        <div className="tag">
          <span>Movie</span>
        </div>
        <div className="tag">
          <span>Animation</span>
        </div>
        <div className="tag">
          <span>Life</span>
        </div>
        <div className="tag">
          <span>Landscape</span>
        </div>
      </div>
      <div className="video_list">{load ? thumbnails : '불러오는 중입니다.'}</div>
    </div>
  );
}
export default Home;
