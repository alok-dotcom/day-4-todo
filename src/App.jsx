import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

const App = () => {
    const [todo, setTodo] = useState();

    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;

    const handleDelete = (todo) => {
        dispatch(RemoveTodoAction(todo));
    };

    const handleSubmit = (e) => {
        console.log("called");
        e.preventDefault();
        dispatch(AddTodoAction(todo));
    };

    return (
        <div className="bg-slate-600 flex justify-center h-screen">
            <div className="bg-white rounded-md flex flex-col items-center text-lg p-6">
                <h1 className="font-mono font-bold">Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="enter your todo"
                        className="font-serif bg-indigo-200 rounded-md p-1 border-collapse"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-xl/8 text-green-600 font-extrabold ml-1"
                    >
                        &#10004;
                    </button>
                </form>

                <ul className="w-auto">
                    {todos &&
                        todos.map((t) => (
                            <li key={t.id} className="font-serif">
                                <span className="mr-2">{t.todo}</span>
                                <button
                                    className="text-red-600"
                                    onClick={() => handleDelete(t)}
                                >
                                    &#10006;
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
