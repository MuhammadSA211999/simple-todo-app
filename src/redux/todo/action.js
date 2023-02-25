import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, SELECTEDCOLOR } from "./actionTypes"

export const addedTodo = (value) => {
    return {
        type: ADDED,
        payload: value
    }
}
export const completedAllTodo = (value) => {
    return {
        type: ALLCOMPLETED,
    }
}
export const toggledTodo = (todoId, value) => {
    return {
        type: ADDED,
        payload: {
            value, todoId
        }
    }
}
export const selectedTodoColor = (id, color) => {
    return {
        type: SELECTEDCOLOR,
        payload: { color, id }
    }
}
export const deletedTodo = (id) => {
    return {
        type: ADDED,
        payload: id
    }
}
export const clearCompleted = (value, status) => {
    return {
        type: CLEARCOMPLETED,
        payload: status
    }
}