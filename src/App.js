
import './App.css';
import Comments from './jsons/Comments';
//import { InsertStudent } from './jsons/InsertStudent';
//import Products from './jsons/Products';
//import StudentData from './jsons/StudentData';
//import ReadGit from './jsons/ReadGit';
// import CheckBoxEx from './forms/CheckBoxEx';
// import FormEx from './forms/FormEx';
//import UseStateEx from './hooks/UseStateEx';
//import EventEx from './components/EventEx';
//import ChangeName from './components/changeName';
//import Cunter from './counters/Cunter';
//All these link to go from one page to another page
import TotalCounter from './counters/TotalCounter';
import Home from './routing/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './routing/Navbar';
import Parameters from './routing/Parameters';
import Aboutus from './routing/Aboutus';
import AboutOne from './routing/AboutOne';
import AboutTwo from './routing/AboutTwo';
import FormEx from './forms/FormEx';
//import UseStateEx from './hooks/UseStateEx';
import Error from './routing/Error';
function App() {
  
  return (
    <div className="container">
        {/* <Cunter count="1"/>
        <Cunter count ="2"/>
        <Cunter count ="3"/>
        <Cunter count="4"/> */}
         {/* <TotalCounter/>  */}
        {/* <EventEx/> */}
        {/* <UseStateEx/> */}
        {/* <FormEx/>
        <CheckBoxEx/> */}
        {/* <ReadGit/> */}
        {/* <Products/> */}
        
        {/* <InsertStudent/>
        <StudentData/> */}
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/TotalCounter" element={<TotalCounter/>}/>
        </Routes>
        <Comments/> */}
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/cunter" element={<TotalCounter/>}/>
          <Route path='/formEx' element={<FormEx/>}/>
          <Route path='/parameters' element={<Parameters/>}/>
          <Route path="/parameters/:lang" element={<Parameters/>}/>
          <Route path="/aboutus" element={<Aboutus/>}>
            <Route path='aboutone' element={<AboutOne/>}/>
            <Route path="abouttwo" element={<AboutTwo/>}/>
            </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
