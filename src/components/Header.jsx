import React from 'react';
import 'styles/header.css';

function Header() {
  return (
    <header className="app_header">
      <div id="start">
        <button type="button" id="menu">
          <menu-icon id="guide-icon" icon="yt-icons:menu">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}
            >
              <g>
                <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" />
              </g>
            </svg>
          </menu-icon>
        </button>
        <a href="/">Home</a>
      </div>
      <div id="center">
        <form id="search_form">
          <div id="search_text" role="search">
            <input type="text" placeholder="검색" />
          </div>
        </form>
      </div>
      <div id="end">
        <button type="button">설정</button>
        <button type="button">profile</button>
      </div>
    </header>
  );
}

export default Header;
