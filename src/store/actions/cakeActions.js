import { ACTIONS } from '../../constants/actionConstants';

export const cakeActions = {
    buyCake,
}

function buyCake() {
    return {
        type: ACTIONS.BUY_CAKE,
        info: 'procure a nice cake'
    }
}
 
