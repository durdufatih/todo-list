import { useState } from "react";

const TodoComponent = () => {
  const [list, setList] = useState(INITAL_LIST);
  const [newItem, setNewItem] = useState("");
  return (
    <div>
      <input
        name="newTaskText"
        onChange={(e) =>
          setNewItem({
            id: Date.now,
            data: e.target.value,
            completed: false,
          })
        }
      ></input>
    </div>
  );
};

export default TodoComponent;
