import NavBar from "./component/NavBar";
import { motion } from "framer-motion";
import Sidebar from "./component/Sidebar";
import {
 
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App landing__page">
     <section className="hero__wrapper">
     <div className='container'>
      <Routes>
        <Route element={<>Home</>} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </div>
    </section>
    </div>
  );
}

export default App;
