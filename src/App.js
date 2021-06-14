import { useState } from "react";
import "./App.css";

const INITAL_LIST = [
  { id: 1, data: "Clear Home", completed: false },
  { id: 2, data: "Get your Desert", completed: false },
];
function App() {
  const [list, setList] = useState(INITAL_LIST);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    setList([
      ...list,
      {
        id: Date.now(),
        data: newItem,
        completed: false,
      },
    ]);
    setNewItem("");
  };

  const clearAll = () => {
    setList(list.filter((item) => !item.completed));
  };

  const completeAction = (id) => {
    setList(
      list.map((it) =>
        it.id === id ? { ...it, completed: !it.completed } : it
      )
    );
  };
  return (
    <div className="App">
      <div className="input-title">TODO APP</div>
      <div className="input-new">
        <input
          className="input-new-task"
          name="newTaskText"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button className="input-new-task-button" onClick={() => addItem()}>
          Add
        </button>
      </div>
      <hr className="input-hr" />
      <div>
        {list.map((item) => {
          return (
            <div
              className={item.completed ? "input-text-line" : ""}
              key={item.id}
              onClick={() => completeAction(item.id)}
            >
              {item.data}
              <hr />
            </div>
          );
        })}
      </div>
      <div>
        <button className="input-new-task-button" onClick={() => clearAll()}>
          Clear All Completed
        </button>
      </div>
    </div>
  );
}

export default App;
