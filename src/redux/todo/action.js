import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, SELECTEDCOLOR, TOGGLED } from "./actionTypes"

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
export const toggledTodo = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}
export const selectTodoColor = (id, color) => {
    return {
        type: SELECTEDCOLOR,
        payload: { color, id }
    }
}
export const deletedTodo = (id) => {
    return {
        type: DELETED,
        payload: id
    }
}
export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}