import config from './config.json';

const baseURL = config.SERVER_ADDRESS;

/**
 * ClearKey DRM media server API List
 *
 * _user-controller_
 * 1. userLogIn
 * 2. userSignUp
 * _video-controller_
 * 1. listVideos
 * 2. uploadVideoFile
 * 3. getVidoeWithDash
 * _key-controller_
 * 1. getVideoKey
 * _comment-controller_
 * 1. writeComment
 * 2. modifyComment
 * 3. listAllComments
 * 4. deleteComment
 */

/**
 * Asynchronously signs in using an username and password.
 * @param {string} username The users id
 * @param {string} password The users password
 */
export async function userLogIn(username, password) {
  const response = await fetch(`${baseURL}/users/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    body: JSON.stringify({
      password,
      username,
    }),
  });
  if (!(response.status === 200 || response.status === 201)) {
    console.error('Error', response.status, response.statusText);
    throw new Error('로그인에 실패했습니다.');
  }
  const result = await response.json();
  return result;
}

/**
 * Creates a new user account associated with the specified username, password, and nickname.
 * @param {string} username The users id
 * @param {string} password The users password
 * @param {string} nickname The nickname for the user. it can be changed later.
 * @param {string} authority Authority of the users (ex. ROLE_USER)
 */
export async function userSignUp(username, password, nickname, authority) {
  const authorityDtoSet = [];
  if (authority) {
    authorityDtoSet.push({
      authorityName: authority,
    });
  } else {
    authorityDtoSet.push({
      authorityName: 'ROLE_USER',
    });
  }

  const response = await fetch(`${baseURL}/users/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    body: JSON.stringify({
      authorityDtoSet,
      nickname,
      password,
      username,
    }),
  });
  if (response.status !== 200) {
    console.error('Error', response.status, response.statusText);
    throw new Error('회원가입에 실패했습니다.');
  }
  const result = await response.json();
  return result;
}

export async function listVideos(keyword = '', page = 0, uploaderId = '') {
  const response = await fetch(`${baseURL}/videos/`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: '*/*',
    },
  });
  if (response.status !== 200) {
    console.error('Error', response.status, response.statusText);
    throw new Error('영상 목록을 불러올 수 없습니다.');
  }
  const result = await response.json();
  return result;
}
