import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import RowContainer from "./components/RowContainer";
import "./App.css";
import { useState } from "react";

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  // let todoItems = [
  //   {
  //     name: "Buy Grociries",
  //     dueDate: "26/10/2024"
  //   },
  //   {
  //     name: "goto school",
  //     dueDate: "27/10/24"
  //   },
  //   {
  //     name:'get the app',
  //     dueDate:'tommorow'
  //   },
  //   {
  //     name:'Take the test',
  //     dueDate:'03/11/2024'
  //   }
  // ];

  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChage = (event) => {
    const newtodoText = event.target.value;
    setTodoText(newtodoText);
  };

  const handleOnDateChange = (event) => {
    const newtodoDate = event.target.value;
    setTodoDate(newtodoDate);
  };

  const handleOnClikAdd = () => {
    if (todoText && todoDate) {
      const newTodo = { text: todoText, date: todoDate };
      // setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodos([...todos, newTodo]);
      setTodoText("");
      setTodoDate("");
    } else {
      console.log("todo or date Field empty or not set properly");
    }
  };

  const handleOnClickRemove = (index) => {
    setTodos((prevTodo) => prevTodo.filter((_, i) => i !== index));
  };

  return (
    <>
      <Container>
        <center className="todo-container"></center>
        <AppName />
        <RowContainer>
          <AddTodo
            handleOnChage={(event) => handleOnChage(event)}
            handleOnDateChange={(event) => handleOnDateChange(event)}
            handleOnClikAdd={handleOnClikAdd}
            resetTodoText={todoText}
            resetTodoDate={todoDate}
          />
        </RowContainer>
        <TodoItems todoData={todos} removeTodo={handleOnClickRemove} />
      </Container>
    </>
  );
}

export default App;
