import superagent from 'superagent'

export function setAlbums(albums) {
  console.log('albums:', albums)
  return {
    type: 'SET_ALBUMS',
    payload: albums
  }
}

export function addAlbum(id, title) {
  return {
    type: 'ADD_ALBUM',
    payload: {
      id,
      title
    }
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
export const ADD_ALBUM = 'ADD_ALBUM'
