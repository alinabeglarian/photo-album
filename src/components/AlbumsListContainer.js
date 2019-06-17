import React, { Component } from 'react'
import superagent from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld } from '../actions/test'

class AlbumsListContainer extends Component {
  state = {}

  componentDidMount() {
    superagent
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))

    this.props.dispatch({
      type: 'HELLO_WORLD',
      payload: {
        firstName: 'Alice',
        lastName: 'McDog'
      }
    }) 
  }
  
  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}

export default connect(helloWorld)(AlbumsListContainer)