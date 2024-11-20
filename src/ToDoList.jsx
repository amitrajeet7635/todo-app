import { useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    function handleAddTodo() {
        const newTodo = document.getElementById("Todo").value;
        if (newTodo === "") {
            return;
        }
        document.getElementById("Todo").value = "";

        setTodos((t) => [...t, newTodo]);
        
    }

    function handleRemoveTodo(index) {
        const taskToMove = todos[index];
        setTodos(todos.filter((_, i) => i !== index));
        if (taskToMove) {
            setCompletedTasks((c) => [...c, taskToMove]);
        }
    }

    function handleCompleteTodo(index){
        setCompletedTasks(completedTasks.filter((_, k) =>k != index));
    }

    function showCompletedTodo(){
        document.getElementsByClassName("comp-list")[0].style.transform = "translateX(0)";

    }
    function hideCompletedTodo(){
        document.getElementsByClassName("comp-list")[0].style.transform = "translateX(110%)";
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
          handleAddTodo(); 
        }
      }

   

    return (
        <>
            <div className="bg-img"></div>
            <div className="main-body">
                <div className="main-content">
                    <h1>To-Do List</h1>
                    <div className="input-section">
                        <input type="text" id="Todo" placeholder="Chal Add Kar..." onKeyDown={handleKeyDown} />
                        <button className="add-btn" onClick={handleAddTodo}>
                            Add Kar
                        </button>
                    </div>
                    <div>
                        <ul className="list-section">
                            {todos.map((todo, index) => (
                                <div className="item-del" key={index}>
                                    <li>{todo}</li>
                                    <button onClick={() => handleRemoveTodo(index)}>Delete</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                <button className="completed-to-do" onClick={showCompletedTodo} onDoubleClick={hideCompletedTodo}>Completed Tasks</button>
                <div className="comp-list">
                    <ul className="list-section">
                        {completedTasks.length === 0 ? (
                            <p>No Completed Tasks</p>
                        ) : (
                            completedTasks.map((task, index) => (
                                <div className="item-del">
                                    <li key={index}>{task}</li>
                                    <button onClick={() => handleCompleteTodo(index)}>Delete</button></div>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ToDoList;
