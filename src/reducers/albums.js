import ADD_ALBUM from '../actions/test'

export default (state = [], action = {}) => {
  switch(action.type) {
    case 'ADD_ALBUM':
      return [
        ...state,
        {...action.payload}
      ]
    default:
      return state
    }
}