import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Homes from "./pages/Homes";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Annoucement from "./components/Annoucement";
import Navbars from "./components/Navbars";



const App = () => {
  return(
    
   


   <Router>
  
    <Annoucement/>
    <Navbars/>

    <Routes>
      <Route path='/' element={ <Homes/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route/>
      <Route/>
    </Routes>
   </Router>
    
  )
};

export default App;