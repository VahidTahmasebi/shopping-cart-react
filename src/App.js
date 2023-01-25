import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import SignupPage from "./Pages/SignupPage";
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
