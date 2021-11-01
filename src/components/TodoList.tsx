import React from "react";

// Import Components
import { Todo } from "./Todo";

const ToDoList = (props: {
    todos: [];
    setTodos: (value: any) => void;
    filteredTodos: any[];
}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(
                    (todo: {
                        text: string;
                        id: number;
                        completed: boolean;
                    }) => (
                        <Todo
                            todos={props.todos}
                            setTodos={props.setTodos}
                            text={todo.text}
                            todo={todo}
                            key={todo.id}
                        />
                    )
                )}
            </ul>
        </div>
    );
};

export { ToDoList };
