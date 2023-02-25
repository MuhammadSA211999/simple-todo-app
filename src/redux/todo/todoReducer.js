import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, SELECTEDCOLOR, TOGGLED } from "./actionTypes";
import { initialSatate } from "./initialState";

const nextTodoId = (todos) => {
    const topId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return topId + 1
}

const todoReducer = (state = initialSatate, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case SELECTEDCOLOR:
            const { id, color } = action.payload
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }
                return {
                    ...todo,
                    color: color
                }
            })
        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }

            })
        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}
export default todoReducer