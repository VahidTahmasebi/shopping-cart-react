import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { ADD_TO_CART, REMOVE_PRODUCT } from "../Providers/cartTypes";
import "./cartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const decHandler = (cartItem) => {
    dispatch({ type: REMOVE_PRODUCT, payload: cartItem });
  };
  const incHandler = (cartItem) => {
    dispatch({ type: ADD_TO_CART, payload: cartItem });
  };

  return (
    <Layout>
      <main className='container'>
        <section className='cartCenter'>
          <section className='cartItemList'>
            {cart.map((item) => {
              return (
                <div className='cartItem' key={item.id}>
                  <div className='itemImg'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.offPrice * item.quantity}</div>
                  <div className='btnGroup'>
                    <button onClick={() => decHandler(item)}>-</button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incHandler(item)}>+</button>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
