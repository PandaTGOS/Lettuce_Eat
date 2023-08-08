import { MdModeEditOutline, MdDelete } from "react-icons/md";

function Task({todo,handleDelete,setEdit}) {
  return ( <div
    id={todo?.id}
    className="backdrop-opacity-10 backdrop-invert bg-white/30 flex justify-between items-center py-2 px-16 my-1">
    <div className="text-[#fff] text-xl overflow-hidden">
      {todo?.task}
    </div>
    <div className="flex">
      <button
         onClick={() => {
           setEdit(todo.id);
        }}
        className="bg-[#a8dadc] py-2 px-4 mr-2"
      >
        <MdModeEditOutline />
      </button>
      <button
        onClick={() => {
          handleDelete(todo.id);
         }}
        className="bg-[#a8dadc] py-2 px-4"
      >
        <MdDelete />
      </button>
    </div>
  </div> );
}

export default Task;