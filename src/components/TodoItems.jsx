import TodoItem from "./TodoItem";
import styles from "../CssStyles/Items.module.css";

const TodoItems = ({ todoData, removeTodo }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoData.map((item, index) => (
        <TodoItem
          todoName={item.text}
          todoDate={item.date}
          key={index}
          removeTodo={() => removeTodo(index)}
        />
      ))}
      {}
    </div>
  );
};

export default TodoItems;
