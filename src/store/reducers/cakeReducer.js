import { ACTIONS } from '../../constants/actionConstants';

const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.BUY_CAKE: return {
            ... state, 
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state
    }
}

export default cakeReducer;