import Checkbox from "../Checkbox/Checkbox";
import ExcludeIcon from "../ExcludeIcon/ExcludeIcon";
import ExlcudeModal from "../ExcludeModal/ExcludeModal";
import "./Card.css";

function Card({ title, isConclude, id, tasks, setTasks }) {
  const handleConcludeTask = () => {
    const hintModal = document.querySelector(`#hint-modal-${id}`);
    hintModal.innerText = "Marcar como concluído";
    tasks.forEach((task) => {
      if (task.id == id) {
        task["isConclude"] = !task["isConclude"];
        if (task["isConclude"]) {
          const hintModal = document.querySelector(`#hint-modal-${id}`);
          hintModal.innerText = "Marcar como não concluído";
        }
      }
    });
    let newTasksArr = [...tasks];

    setTasks(newTasksArr);
  };

  const showModal = () => {
    const confirmExcludeTaskModal = document.querySelector(`#modal-${id}`);
    confirmExcludeTaskModal.classList.remove("d-none");
  };

  return (
    <>
      <div
        id={`card-${id}`}
        className={`card ${isConclude ? "success" : null}`}
      >
        <div className="card-body">
          <Checkbox
            handleConcludeTask={handleConcludeTask}
            isConclude={isConclude}
            id={id}
          />
          <div className="card-title">{title}</div>
          <div className="card-action">
           <ExcludeIcon showModal={showModal}/>
          </div>
        </div>
      </div>

      <ExlcudeModal title={title} id={id} tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default Card;
