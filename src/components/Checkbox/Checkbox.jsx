function Checkbox({handleConcludeTask, isConclude, id}) {
    return ( 
        <div onClick={handleConcludeTask} className="checkbox center">
            <div id={`hint-modal-${id}`} className="hint-modal">
              Marcar como concluído
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#90ee90"
              className={`bi bi-check-lg ${isConclude ? null : "d-none"}`}
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 011.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 01-1.065.02L3.217 8.384a.757.757 0 010-1.06.733.733 0 011.047 0l3.052 3.093 5.4-6.425z"></path>
            </svg>
          </div>
     );
}

export default Checkbox;