import React, { Component } from 'react'
import superagent from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/test'

class AlbumsListContainer extends Component {
  state = {}

  componentDidMount() {
    superagent
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))

    this.props.addAlbum(5, 'Enjoying Sunshine')
    this.props.addAlbum(10, 'Having fun in the US')
  }
  
  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums}/>
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { addAlbum })(AlbumsListContainer)