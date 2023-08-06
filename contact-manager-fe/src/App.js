import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage/homepage';
import FormPage from './Pages/FormPage/formpage';


function App() {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/add" element={<FormPage/>} />
    </Routes> 
  );
}

export default App;
