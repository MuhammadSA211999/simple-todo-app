import { useDispatch, useSelector } from "react-redux";
import { changedColor, changedStatus } from "../redux/filter/action";
const findNumTodo = (length) => {
    switch (length) {
        case 0:
            return 'No task is'
        case 1:
            return 'One task is'
        default:
            return `${length} tasks are`
    }
}

export default function Footer() {
    const todos = useSelector((state) => state.todos)
    const length = todos.filter(todo => !todo.completed).length
    const { colors, status } = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const statusChange = (value) => {
        dispatch(changedStatus(value))
    }

    const handleColor = (color) => {
        if (colors.includes(color)) {
            dispatch(changedColor(color, 'remove'))
        }
        else {
            dispatch(changedColor(color, 'add'))
        }

    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{findNumTodo(length)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => statusChange('all')} className={`cursor-pointer ${status === 'all' && 'font-bold'}`}>All</li>
                <li>|</li>
                <li onClick={() => statusChange('incomplete')}
                    className={`cursor-pointer ${status === 'incomplete' && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => statusChange('complete')} className={`cursor-pointer ${status === 'complete' && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => handleColor('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}></li>
                <li onClick={() => handleColor('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}></li>
                <li onClick={() => handleColor('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}></li>
            </ul>
        </div>
    );
}
