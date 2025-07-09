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

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element = {<Login />}/>
                <Route path='/ForgetPassword' element = {<ForgetPassword/>}/>
                <Route path='/SignUp' element= {<SignUp/>}/>
                <Route element={<MainLayout />}>
                      <Route path='/Home' element = {<Home/> } />
                      <Route path='/Blog' element = {<Blog/>}/>
                      <Route path='/Contact-us' element = {<Contact/>} />
                </Route>
                 
          </Routes>
    </BrowserRouter>
  );
}

export default App;
