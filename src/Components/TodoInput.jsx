import React, { useState } from 'react'
import { useTodo } from '../Context/Context'

function TodoInput() {
    const { addTodo } = useTodo()
    const [todo, setTodo] = useState('')

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo: todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full rounded-l-lg px-3 outline-none duration-150 bg-white text-black py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-orange-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoInput;


