import { ACTIONS } from '../constants/actionConstants'

let nextItemId = 0;

export const addItem = content => ({
  type: ACTIONS.ADD_ITEM,
  payload: {
    id: ++nextItemId,
    content
  }
});

export const toggleItem = id => ({
  type: ACTIONS.TOGGLE_ITEM,
  payload: { id }
});


export const setFilter = filter => ({
  type: ACTIONS.SET_FILTER,
  payload: { filter }
});

export const deleteItems = () => ({
  type: ACTIONS.DELETE_ITEMS
})