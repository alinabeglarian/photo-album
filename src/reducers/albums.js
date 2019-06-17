import { ADD_ALBUM } from '../actions/albums'
import { SET_ALBUMS } from '../actions/albums'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_ALBUMS:
      return action.payload
    case ADD_ALBUM:
      return [
        ...state,
        {...action.payload}
      ]
    default:
      return state
    }
}