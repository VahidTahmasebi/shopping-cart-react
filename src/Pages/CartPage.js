import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { ADD_TO_CART, REMOVE_PRODUCT } from "../Providers/cartTypes";
import "./cartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  // if the shopping cart is empty
  if (!cart.length) {
    return (
      <Layout>
        <main>
          <h2>cart is empty!</h2>
          <hr />
          <Link to='/'>Go to shopping</Link>
        </main>
      </Layout>
    );
  }

  // add product quantity reduction operations
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
          <CartCast total={total} cart={cart} />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;

// Cart cast box
const CartCast = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className='cartCast'>
      <h2>cart cast</h2>
      <div className='CastItem'>
        <p>original total price</p>
        <p>{originalTotalPrice} $</p>
      </div>
      <div className='CastItem'>
        <p>cart discount</p>
        <p>{originalTotalPrice - total} $</p>
      </div>
      <div className='CastItem'>
        <p>net price</p>
        <p>{total} $</p>
      </div>
      <Link to='checkout'>
        <button
          className='btn primary'
          style={{ marginTop: "20px 0", width: "100%" }}>
          Go to checkout
        </button>
      </Link>
    </section>
  );
};
