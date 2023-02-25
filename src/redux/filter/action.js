import { COLORCHANGED } from "./actionTypes"

export const changedColor = (todoId, color) => {
    return {
        type: COLORCHANGED,
        payload: {
            todoId,
            color
        }
    }
}
export const changedStatus = (status) => {
    return {
        type: COLORCHANGED,
        payload: status
    }
}