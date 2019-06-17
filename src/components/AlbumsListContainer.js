import React, { Component } from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { setAlbums, getAlbums } from '../actions/albums'


class AlbumsListContainer extends Component {
  componentDidMount() {
    this.props.getAlbums()
  }
  
  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums}/>
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { setAlbums, getAlbums
 })(AlbumsListContainer)