import React from "react";

const Todo = (props: {
    todos: [];
    todo: { id: number; completed: boolean };
    setTodos: any;
    text: string;
}) => {
    // Events
    const deleteHandler = () => {
        props.setTodos(
            props.todos.filter((el: { id: number }) => el.id !== props.todo.id)
        );
    };

    const completeHandler = () =>
        props.setTodos(
            props.todos.map((item: { id: number; completed: boolean }) => {
                if (item.id === props.todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );

    return (
        <div className="todo">
            <li
                className={`todo-item ${
                    props.todo.completed ? "completed" : ""
                }`}
            >
                {props.text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export { Todo };
