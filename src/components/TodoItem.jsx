import RowContainer from "./RowContainer";
import styles from "../CssStyles/RowContainer.module.css";
export default function TodoItem({ todoName, todoDate, removeTodo }) {
  return (
    <RowContainer>
      <div className="container ">
        <div className={`row kg-row ${styles.RowLayout}`}>
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2 ">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={removeTodo}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </RowContainer>
  );
}
