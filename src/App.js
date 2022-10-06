import './App.css';
import Register from './components/register';
import Customers from './components/customers';
import {Route, Routes, Switch} from 'react-router-dom';
import Products from './components/products';
import LoginForm from './components/loginForm';

function App() {
  return (
    <>
    <Routes>
    <Route path="/login" element={<LoginForm/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/customers" element={<Customers/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/" element={<Customers/>} />
    </Routes>
   {/*  <Register /> */}
    {/* <Customers /> */}
    </>
  );
}

export default App;
