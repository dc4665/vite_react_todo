import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

// Import Components
import { Form } from "./components/Form";
import { ToDoList } from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState<string>("");
    const [todos, setTodos] = useState<[]>([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    // Events
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(
                    todos.filter(
                        (todo: { completed: boolean }) =>
                            todo.completed === true
                    )
                );
                break;
            case "uncompleted":
                setFilteredTodos(
                    todos.filter(
                        (todo: { completed: boolean }) =>
                            todo.completed === false
                    )
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    // Local Storage
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos") || "[]");
            setTodos(todoLocal);
        }
    };

    return (
        <div>
            <header>
                <h1>Todo list</h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <ToDoList
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
