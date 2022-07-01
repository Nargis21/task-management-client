import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CompleteTask from './components/CompleteTask';
import ToDo from './components/ToDo';
import Calender from './components/Calender';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/complete' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
