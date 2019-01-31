import { BUTTON_CLICKED } from '../actions/buttonActions'

const defaultState = {
    clicked: false
}

const button = (state = defaultState, action) => {
    switch (action.type) {
        case BUTTON_CLICKED:
            return Object.assign({}, state, {
                clicked: !state.clicked
            });
        default:
            return state;
    }
}

export default button;