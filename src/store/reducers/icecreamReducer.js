import { ACTIONS } from '../../constants/actionConstants';

const initialState = {
    numberOfIceCreams: 30
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.BUY_CAKE: return {
            ... state, 
            numberOfIceCreams: state.numberOfIceCreams - 1
        }

        default: return state
    }
}

export default iceCreamReducer;