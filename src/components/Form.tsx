import React, {
    ChangeEvent,
    ChangeEventHandler,
    JSXElementConstructor,
    SelectHTMLAttributes,
} from "react";
import { CustomEventName } from "vite/types/customEvent";

const Form = (props: {
    todos: [];
    setTodos: (value: any) => void;
    inputText: string;
    setInputText: (value: string) => void;
    setStatus: (value: string) => void;
}) => {
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputText(e.target.value);
    };

    const submitTodoHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos,
            {
                text: props.inputText,
                completed: false,
                id: Math.random() * 1000,
            },
        ]);
        props.setInputText("");
    };

    const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log();
        props.setStatus(e.target.value);
    };

    return (
        <form>
            <input
                value={props.inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button
                onClick={submitTodoHandler}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export { Form };
