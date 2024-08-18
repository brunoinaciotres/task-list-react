function ExlcudeModal({ id, title, tasks, setTasks }) {

  const hideModal = () => {
    const confirmExcludeTaskModal = document.querySelector(`#modal-${id}`);
    confirmExcludeTaskModal.classList.add("d-none");
  };

  const handleExcludeTask = () => {
    hideModal();

    const taskCard = document.querySelector(`#card-${id}`);
    taskCard.classList.add("fade");
    setTimeout(() => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
          tasks.splice(i, 1);
        }
      }
      let newTasksArr = [...tasks];

      setTasks(newTasksArr);
    }, 300);
  };

  return (
    <div id={`modal-${id}`} className="confirm-exclude-task-modal d-none">
      <div className="modal-content">
        <p>Deseja excluir a tarefa "{title}" ?</p>
        <div className="confirm-exclude-actions ">
          <div className="main-btn" onClick={hideModal}>
            Não
          </div>
          <div className="main-btn danger" onClick={handleExcludeTask}>
            Sim
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExlcudeModal;
