import Home from './pages/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Utilty/NavBarLogin';
import LogIn from './pages/Auth/LogIn';
import Return from './pages/ReturnOrder/Return';
import LogUp from './pages/Auth/LogUp';
import AllCategoryPage from './pages/Category/AllCategoryPage';
import BestBrandPage from './pages/BestBrand/BestBrandPage';
import AllProductPage from './pages/AllProductPage/AllProductPage';
import ProductDetalisPage from './pages/AllProductPage/ProductDetalisPage';
import CartPage from './pages/Cart/CartPage';
import ChoosePayMethoouds from './pages/Pay/ChoosePayMethoouds';
import AdminAllProductPage from './pages/Admin/AdminAllProductPage';
import AdminAllOrderPage from './pages/Admin/AdminAllOrderPage';
import AdminOrderDetalisPage from './pages/Admin/AdminOrderDetalisPage';
import AdminAddBrandPage from './pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/Admin/AdminAddCategoryPage';
import AdminAddSubcategoryPage from './pages/Admin/AdminAddSubcategoryPage';
import AdminAddProductPage from './pages/Admin/AdminAddProductPage';
import UserAllOrderPage from './pages/User/UserAllOrderPage';
import UserProductLikePage from './pages/User/UserProductLikePage';
import UserAddressPersonalPage from './pages/User/UserAddressPersonalPage';
import UserEditAddressPage from './pages/User/UserEditAddressPage';
import UserNewAddressPage from './pages/User/UserNewAddressPage';
import UserProfilePersonlyPage from './pages/User/UserProfilePersonlyPage';
import ForgetPasswordPage from './pages/Auth/forgetPasswordPage';


function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/return' element={<Return />} />
          <Route path='/LogUp' element={<LogUp />} />
          <Route path='/allCategory' element={<AllCategoryPage />}/>
          <Route path='/AllProduct' element={<AllProductPage />} />
          <Route path='/BestBrand' element={<BestBrandPage />} />
          <Route path='/ProductDetalis/:id' element={<ProductDetalisPage />} />
          <Route path='/Cart' element={<CartPage />} />
          <Route path='/ChoosePay' element={<ChoosePayMethoouds/>} />
          <Route path='/admin/allproduct' element={<AdminAllProductPage/>} />
          <Route path='/admin/allorder' element={<AdminAllOrderPage/>} />
          <Route path='/admin/order/:id' element={<AdminOrderDetalisPage/>} />
          <Route path='/admin/addbrand' element={<AdminAddBrandPage/>} />
          <Route path='/admin/addcategory' element={<AdminAddCategoryPage/>} />
          <Route path='/admin/addSubcategory' element={<AdminAddSubcategoryPage/>} />
          <Route path='/admin/addproduct' element={<AdminAddProductPage/>} />
          <Route path='/user/allorder' element={<UserAllOrderPage/>} />
          <Route path='/user/productlike' element={<UserProductLikePage/>} />
          <Route path='/user/addresspersonal' element={<UserAddressPersonalPage/>} />
          <Route path='/user/editaddress' element={<UserEditAddressPage/>} />
          <Route path='/user/newaddress' element={<UserNewAddressPage/>} />
          <Route path='/user/profilepersonly' element={<UserProfilePersonlyPage/>} />
          <Route path='/user/forgetPassword' element={<ForgetPasswordPage/>} />


          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
