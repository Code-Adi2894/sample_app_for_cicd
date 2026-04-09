import "./styles.scss";
import Foobar from "./component/Foobar";
import TodoList from "./component/TodoList";
import Greetings from "./component/Greetings";

function App() {
  return (
    <div className="App">
      <>
        <TodoList />
        <Greetings />
      </>
      <Foobar />
    </div>
  );
}

export default App;
