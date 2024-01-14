import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer, toast} from "react-toastify";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import {Button} from "reactstrap";
import Dashboard from './pages/Bill';
import Customer from './pages/Customer';
import CustomerDetails from './pages/CustomerDetails';
import Stock from './pages/Stock';
import AddStock from './pages/AddStock';
import Product from './pages/Product';
import Model from './pages/AddStock/Model';
import Brand from './pages/AddStock/Brand';
import Size from './pages/AddStock/Size';
import ProductForm from './pages/AddStock/ProductForm';
import Bill from './pages/Bill';

function App() {
  return (
    
    <Router>
      <Header>
    <Routes>
      <Route path="/"element={<Customer/>}/>
      <Route path="/customerdetails"element={<CustomerDetails/>}/>
      <Route path="/bill"element={<Bill/>}/>
      <Route path="/product"element={<Product/>}/>
      <Route path="/stock"element={<Stock/>}/>
      <Route path="/addstock/*"element={<AddStock/>}/>
      {/* <Route path='/product/brand'element={<Brand/>}/>
      <Route path='/product/model'element={<Model/>}/>
      <Route path='/product/size'element={<Size/>}/>
      <Route path='/product/productForm'element={<ProductForm/>}/> */}
    </Routes>
    {/* <Product>
      <Routes>
      <Route path='/product/brand'element={<Brand/>}/>
      <Route path='/model'element={<Model/>}/>
      <Route path='/size'element={<Size/>}/>
      <Route path='/productForm'element={<ProductForm/>}/>
      </Routes>
    </Product> */}
    </Header>

    </Router>
     
    
  );
}

export default App;
