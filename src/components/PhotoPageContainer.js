import React, {Component} from 'react'
import PhotoPage from './PhotoPage'
import { connect } from 'react-redux';
import { setPhotos, getPhotosByAlbum } from '../actions/photos'

class PhotoPageContainer extends Component {
  componentDidMount() {
    const albumId = this.props.match.params.id 
    this.props.getPhotosByAlbum(albumId)
  }

  render() {
    if (!this.props.photos) return 'Loading...'
    return <PhotoPage photos={this.props.photos} />
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, { setPhotos, getPhotosByAlbum })(PhotoPageContainer)