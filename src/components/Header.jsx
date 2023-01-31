import React, { useState, useEffect } from 'react';
import 'styles/header.css';

function Header(prop) {
  const { collapsed } = prop;

  return (
    <header className="app_header">
      <div id="left">
        <a href="/" id="home_btn">
          <img src="/DRM_PLAYER_LOGO.png" alt="DRM PLAYER" />
        </a>
      </div>
      <div id="center">
        <form id="search_form">
          <div id="search_text" role="search">
            <input type="text" placeholder="검색" />
          </div>
        </form>
      </div>
      <div id="right">
        {
          collapsed ? <button type="button" id="menu">
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
          </button> : <>
            <button className="btn_right_menu" type="button">
              Setting
            </button>
            <button className="btn_right_menu" type="button">
              Profile
            </button>
            <button id="btn_upload" type="button">
              Upload
            </button>
          </>
        }
      </div>
    </header>
  );
}

export default Header;
