import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
