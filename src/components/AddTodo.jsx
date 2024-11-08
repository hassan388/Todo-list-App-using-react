import styles from "../CssStyles/RowContainer.module.css";

export default function AddTodo({
  handleOnChage,
  handleOnDateChange,
  handleOnClikAdd,
  resetTodoText,
  resetTodoDate
}) {
  return (
    <div className="container  add-container">
      <div className={`row kg-row ${styles.RowLayout}`}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo"
            value={resetTodoText}
            onChange={handleOnChage}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleOnDateChange}
            value={resetTodoDate}
          />
        </div>
        <div className="col-2 kg-button-container">
          <button
            type="button"
            className="btn btn-success kg-button "
            onClick={handleOnClikAdd}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
