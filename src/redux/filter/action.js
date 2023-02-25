import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const changedColor = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            changeType,
            color
        }
    }
}
export const changedStatus = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
}