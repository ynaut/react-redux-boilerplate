import * as types from '../constants'

const initialState = {
  exampleList: [],
}

export default function listsReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_LIST:
      return {
        ...state,
        [action.payload.listName]: action.payload.list,
      }
    case types.REMOVE_LIST:
      return {
        ...state,
        [action.payload.listName]: [],
      }
    default:
      return state
  }
}
