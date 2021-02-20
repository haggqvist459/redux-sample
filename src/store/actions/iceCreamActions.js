import { ACTIONS } from '../../constants/actionConstants';

export const icecreamActions = {
    buyIceCream,
}

function buyIceCream() {
    return {
        type: ACTIONS.BUY_ICECREAM,
        info: 'get that vanilla cream'
    }
}