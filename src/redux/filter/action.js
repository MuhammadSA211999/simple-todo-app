import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const changedColor = (changeType, color) => {
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