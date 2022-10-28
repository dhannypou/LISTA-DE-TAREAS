import { useState } from "react"
import Todo from "./todo";
import "./todoApp.css";


export default function TodoApp(){
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };
    
        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
        setTitle("");
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter((item) => item.id !== id);

        setTodos(temp);
    }


    return (
        <div className="todoConteiner">
            <h1 className="titulo">LISTA DE TAREAS</h1>
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title}/>
                <input onClick={handleSubmit} type="submit" value="OK" className="buttonCreate"/>
            </form>
            <div className="todosConteiner">
                {todos.map(item => (
                    <div>
                        <Todo key={item.id}item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    </div>
                ))}
                </div>
        </div>
    )
}