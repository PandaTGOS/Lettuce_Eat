import { useState } from "react";

function EditTodo({ todo, handleEdit }) {
  let [editTask, setEditTask] = useState(todo.task);
  return (
    <div
      id={todo?.id}
      className="backdrop-opacity-10 backdrop-invert bg-white/30 flex items-center py-2 px-12 my-1"
    >
      <input
        onChange={(e) => {
          setEditTask(e.target.value);
        }}
        className=" py-2 px-2  border-[#000] w-[75%]"
        value={editTask}
        required
      />
      <button
        onClick={() => {
          handleEdit(todo.id, editTask);
        }}
        className="bg-[#a8dadc] py-2 px-8"
      >
        Save
      </button>
    </div>
  );
}

export default EditTodo;