import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { initialSatate } from "./initialState";

const filterReducer = (state = initialSatate, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }
        case COLORCHANGED:
            const { color, changeType } = action.payload
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [...state.colors, color]
                    }
                case 'remove':
                    return {
                        ...state,
                        colors: state.colors.filter(exstColor => exstColor !== color)
                    }

                default:
                    return state
            }
        default:
            return state
    }
}
export default filterReducer