import { ACTIONS } from '../constants/actionConstants';
import { v4 as uuid} from 'uuid';


export const addItem = content => ({
  type: ACTIONS.ADD_ITEM,
  payload: {
    id: uuid(),
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