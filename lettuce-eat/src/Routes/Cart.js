import { useState } from "react"; 
import uniqid from "uniqid";
import Task from "../task";
// import EditTodo from "./EditTodo";
import axios from "axios";
import Navbar from "../Navbar";

function Cart() {

    let [task, setTask] = useState("");
    let [todo, setTodo] = useState([]);
    // let [edit, setEdit] = useState([0])
    
    let handleAdd= async() => {

        let id = uniqid();
        let newTodo = {
            item: task,
            qty: "Complete this task",
            price: new Date().toLocalDataString(),
        };
        
        setTodo([...todo, newTodo]);
        const response = await axios.post("http://localhost:2000")
    };

    // let handleDelete=(id)=>{
    //     let newTodo=todo.filter((todo)=>{

    //         if (todo.id==id)
    //         {
    //             return false;
    //         }
    //         return true;
    //     }
    //     );

    //     setTodo(newTodo)
    // }

    // let handleEdit=(id,task)=>{
    //     let newTodo=todo.map((todo)=> {
    //         if(todo.id==id)
    //         {
    //             todo.task=task;
    //         }
    //         return todo
    //     })
    //     setTodo(newTodo);
    //     setEdit(0);
    // }

    return ( 
    <div className="bg-[#35ced3] relative drop-shadow-2x1 w-[80%] lg:w-[30%] sm:w-[60%] h-[70%] mx-auto mt-12 mt-20">
        <Navbar/>
        <h1 className="text-3x1 text-[#fff] mx-8 pt-4"> Mycart </h1>
        <hr className = "mx-8 mt-2"/>
        {/* {todo.length > 0 ? (
            todo.map((todo) => {
                return (
                    <div>
                        {edit == todo.id ? (
                            <EditTodo todo ={todo} handleEdit={handleEdit}/>
                        ):(
                            <Task todo={todo} handleDelete={handleDelete} setEdit={setEdit} />
                        )
                        }
                    </div>
                )
            })
        ):(
            <></>
        )}
        <div className="w-[80%] mx-10 absolute bottom-4">
            <input
                onChange={(e) => {
                    setTask(e.target.value);
                }}
                className="py-2 px-2 w-[60%]"
                required
            /> */}

            <button 
                className="bg-[#000000] py-2 px-4  text-[#fff]"
                onClick={() => {handleAdd(task)}}
>
                ADD Todo
            </button>
        </div>
    );
}

export default Cart ;