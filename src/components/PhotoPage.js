import * as React from 'react'

export default function PhotoPage(props) {
  console.log(props)
  return (<div>
    <h1>Photos in this album</h1>

   { props.photos.map(photo => <img key={photo.url} src={photo.url} alt="AlbumPhoto" />) }
  </div>)
}