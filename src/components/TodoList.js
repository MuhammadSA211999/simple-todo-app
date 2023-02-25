import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    const { status, colors } = useSelector((state) => state.filter)
    const statusFilter = (todo) => {
        switch (status) {
            case 'complete':
                return todo.completed
            case 'incomplete':
                return !todo.completed
            default:
                return true
        }
    }
    const colorsFilter = (todo) => {
        if (colors.length > 0) {
            return colors.includes(todo?.color)
        }
        return true
    }

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                // filter todos for status property
                todos.filter(statusFilter)
                    // filter todos arrya for color
                    .filter(colorsFilter)
                    .map(todo => <Todo todo={todo} key={todo.id} />)
            }

        </div>
    );
}
