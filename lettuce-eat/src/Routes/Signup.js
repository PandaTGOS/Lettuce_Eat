import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";

function SignUp() {
    let navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let handleAdd = async (e) => {
        e.preventDefault();
        try {
        let response = await axios.post("http://localhost:2000/api/signup", {
            email: email,
            password: password,
        });
        console.log(response.data);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/Signin")
        }
        } catch (err) {
        console.log(err);
        }
    };
  
    return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#1d73a9]">
        <Navbar/>
        <div className="w-96 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6 " action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up</h5>
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={(e) => {setEmail(e.target.value);}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="name@company.com" required/>
            </div>
            <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={(e) => {setPassword(e.target.value);}} type="password" name="password" id="password" placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required/>
            </div>
            <Link to="/signin" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Already Registered? Log In</Link>
            <div></div>
            <div></div>
            <button type="submit" onClick={handleAdd} className="w-full text-white bg-[#457b9d] hover:bg-[#457b8a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;