import { ACTIONS } from "../../constants/actionConstants";
import { VISIBILITY_FILTERS } from '../../constants/filterConstants';

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
