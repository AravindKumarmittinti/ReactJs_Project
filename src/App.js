import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Login from './Login';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

import MainLayout from './Layouts/MainLayout';
import ForgetPassword from './ForgetPassword';
import SignUp from './SignUp';
import SideBar from './SideBar';
import { useState } from 'react';

function App() {
  
 const [login,setLogin] = useState(false);

 const loginConfirm = () => {
  setLogin(true);
 }

  return (
   <div>
     
     
  
    <BrowserRouter>
    {login && <SideBar /> }
        <Routes>
                <Route path='/' element = {<Login login = {loginConfirm} /> }/>
                <Route path='/ForgetPassword' element = {<ForgetPassword/>}/>
                <Route path='/SignUp' element= {<SignUp/>}/>
                
                <Route path='/Home' element = {<Home/> } />
                <Route path='/Blog' element = {<Blog/>}/>
                <Route path='/Contact-us' element = {<Contact/>} />
                     
          </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
