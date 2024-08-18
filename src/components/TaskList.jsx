import { useEffect, useState } from "react";
import Card from "./Card/Card";
import ListIcon from "./ListIcon/ListIcon";
import AddTaskForm from "./AddTaskForm/AddTaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (e, filter) => {
    setActiveFilter(filter);
    let newArr = [];

    if (filter == "concluded") newArr = tasks.filter((task) => task.isConclude);

    if (filter == "not-concluded")
      newArr = tasks.filter((task) => !task.isConclude);

    if (filter == "all") newArr = tasks;

    setFilteredTasks(newArr);
  };

  useEffect(() => {
    setFilteredTasks(tasks);
    setActiveFilter("all");
  }, [tasks]);

  return (
    <>
      <header>
        <h1 className="main-title">Lista de Tarefas</h1>
      </header>

      <div className="container">
        <AddTaskForm tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="container column">
        <div className="group">
          <ListIcon />
          <p className="subtitle"> Suas Tarefas</p>
        </div>
        <div className="group align-start column">
          <p className="subtitle">Filtro</p>
          <div className="container-filter-btns">
            <div
              className={`${activeFilter == "all" ? "active" : "filter-btn"}`}
              onClick={(e) => handleFilter(e, "all")}
            >
              Todas
            </div>
            <div
              className={`${
                activeFilter == "not-concluded" ? "active" : "filter-btn"
              }`}
              onClick={(e) => handleFilter(e, "not-concluded")}
            >
              Não Concluídas
            </div>
            <div
              className={`${
                activeFilter == "concluded" ? "active" : "filter-btn"
              }`}
              onClick={(e) => handleFilter(e, "concluded")}
            >
              Concluídas
            </div>
          </div>
        </div>

        {tasks.length != 0 ? (
          filteredTasks.length != 0 ? (
            filteredTasks.map((task) => (
              <Card
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
                id={task.id}
                title={task.name}
                isConclude={task.isConclude}
              />
            ))
          ) : (
            <p className="no-tasks">Não há tarefas nesse filtro</p>
          )
        ) : (
          <p className="no-tasks">Não há tarefas</p>
        )}
      </div>
    </>
  );
}

export default TaskList;
