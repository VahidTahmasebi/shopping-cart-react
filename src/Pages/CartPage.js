import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";
const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
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
                    <button>-</button>
                    <button>{item.quantity}</button>
                    <button>+</button>
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
