import { SET_ALBUMS } from '../actions/albums'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_ALBUMS:
      return action.payload
    default:
      return state
    }
}