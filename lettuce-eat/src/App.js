import Home from "./Routes/Home";
import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup";
import Cart from "./Routes/Cart";
import { BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return ( 
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    
   );
}

export default App;