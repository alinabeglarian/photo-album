import superagent from 'superagent'

export function setPhotos(photos) {
  return {
    type: 'SET_PHOTOS',
    payload: photos
  }
}

export function getPhotosByAlbum(albumId) {
  return function(dispatch) {
    superagent('https://jsonplaceholder.typicode.com/photos?albumId=:albumId')
    .then(response => 
      dispatch(setPhotos(response.body)))
  }
}

export const SET_PHOTOS = 'SET_PHOTOS'