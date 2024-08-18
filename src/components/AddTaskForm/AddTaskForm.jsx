import { useState } from "react";

function AddTaskForm({tasks, setTasks}) {

    const [inputValue, setInputValue] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
    
        if (!inputValue) return;
    
        const newTask = {
          id: Math.floor(Math.random() * 10000),
          name: inputValue,
          isConclude: false,
        };
        const newArr = [...tasks, newTask];
        setTasks(newArr);
        setInputValue("");
      };

    return ( 
        <form>
        <div className="input-group">
          <label htmlFor="new-task">Adicione uma nova tarefa</label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`main-input`}
            type="text"
            id="new-task"
            placeholder="Digite nova tarefa..."
          />
          <button
            onClick={handleAddTask}
            className={` ${inputValue != "" ? "main-btn" : "disabled"} `}
          >
            Adicionar
          </button>
        </div>
      </form>
     );
}

export default AddTaskForm;