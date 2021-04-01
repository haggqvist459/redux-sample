import { ACTIONS } from "../../constants/actionConstants";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            picked: false
          }
        }
      };
    }
    case ACTIONS.TOGGLE_ITEM: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            picked: !state.byIds[id].picked
          }
        }
      };
    }
    case ACTIONS.DELETE_ITEM: {
    
      delete state.byIds[action.payload.id]; //probably not the way to go about it. check the javascript stuff project!
      return {
        allIds: state.allIds.filter(item => item !== action.payload.id),
        byIds: state.byIds
      };
    }
    case ACTIONS.DELETE_ALL: {
      return state = initialState
    }
    default:
      return state;
  }
}
