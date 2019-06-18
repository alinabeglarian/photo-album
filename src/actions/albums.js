import superagent from 'superagent'

export function setAlbums(albums) {
  return {
    type: 'SET_ALBUMS',
    payload: albums
  }
}

export function getAlbums() {
  return function(dispatch) {
    superagent('https://jsonplaceholder.typicode.com/albums')
    .then(response => 
      dispatch(setAlbums(response.body)))
  }
}

export const SET_ALBUMS = 'SET_ALBUMS'
