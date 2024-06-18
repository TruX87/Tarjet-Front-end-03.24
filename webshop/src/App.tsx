import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from './pages/global/NotFound';
import HomePage from './pages/global/HomePage';
import SingleProduct from './pages/global/SingleProduct';
import { ContactUs } from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NavigationBar from './components/NavigationBar';
import Supplier from './pages/admin/Supplier';
import BookSupplier from './pages/admin/BookSupplier';
import MaintainPictures from './pages/admin/MaintainPictures';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
import CheckPayment from './pages/global/CheckPayment';



function App() {
  const {loggedIn} = useContext(AuthContext);

    return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } /> 
        <Route path="/contact" element={ <ContactUs /> } />
        <Route path="/shops" element={ <Shops /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/product/:title" element={ <SingleProduct /> } />

        {loggedIn === true && 
        <>
        <Route path="/admin" element={ <AdminHome /> } />
        <Route path="/admin/add-product" element={ <AddProduct /> } />
        <Route path="/admin/edit-product/:productId" element={ <EditProduct /> } />
        <Route path="/admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="/admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="/admin/maintain-pictures" element={ <MaintainPictures /> } />
        <Route path="/admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="/admin/supplier" element={ <Supplier /> } />
        <Route path="/admin/book-supplier" element={ <BookSupplier /> } />
        </>}

        {loggedIn === false &&
          // <Route path="/admin/*" element={ <Login /> } />
          <Route path="/admin/*" element={ <Navigate to={"/login"} /> } />
        }
        {/* loggedIn === false, siis näita neid */}
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        {/* loggedIn === true, siis manuaalselt /login või /signup lehele minnes, suuna /admin */}

        <Route path="*" element={ <NotFound /> } />
        <Route path="/payment" element={ <CheckPayment /> } />
      </Routes>
    </div>
  );
}

export default App;
