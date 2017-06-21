import * as types from '../constants'

export function addList () {
  return (dispatch) => {
    dispatch({
      type: types.ADD_LIST,
      payload: {
        listName: 'exampleList',
        list: [1, 2, 3, 4, 5],
      },
    })
  }
}

export function removeList () {
  return (dispatch) => {
    dispatch({
      type: types.REMOVE_LIST,
      payload: {
        listName: 'exampleList',
      },
    })
  }
}
