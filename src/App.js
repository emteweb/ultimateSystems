import './App.css';
import Register from './components/register';
import Customers from './components/customers';
import {Route, Routes, Switch} from 'react-router-dom';
import Products from './components/products';
import LoginForm from './components/loginForm';
import Details from './components/details';
import RegisterForm from './components/registerForm';
import CustomerForm from './components/customerForm';


function App() {
  return (

    <Routes>
    <Route path="/login" element={<LoginForm/>} /> 
    <Route path="/registerqqq" element={<Register/>} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/products/:id" element={<Details/>} />
    <Route path="/customers/new" element={<CustomerForm/>} />
    <Route path="/customers" element={<Customers/>} />
    <Route path="/products" element={<Products/>}  /> 
    <Route path="/" element={<Customers/>} />
    </Routes>
  );
}

export default App;
