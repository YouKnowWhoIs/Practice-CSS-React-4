import { useEffect, useState } from "react";
import "../../style/toDo/toDo.css";

function ToDo() {
  const [text, setText] = useState("");
  const [itemNote, setItemNote] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleAddNote = () => {
    if (text.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: text,
    };

    setItemNote([...itemNote, newTask]);
    setText("");
  };

  const handleRemove = (id) => {
    setItemNote((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(itemNote));
  }, [itemNote]);

  return (
    <>
      <div id="toDo">
        <div className="addControler">
          <input
            type="text"
            placeholder="Нотатка"
            value={text}
            onChange={handleInput}
          />
          <button type="button" onClick={handleAddNote}>
            Додати
          </button>
        </div>
        <ul className="list">
          {itemNote.map((task) => (
            <li key={task.id}>
              <p>{task.text}</p>
              <button type="button" onClick={() => handleRemove(task.id)}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDo;
