import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";

const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className='container'>
        <Link to='/'>go to shopping</Link>
      </main>
    );

  return (
    <main className='container'>
      <section className='cartCenter'>
        {auth ? (
          <>
            <section className='cartCast'>
              <h3>checkout detail</h3>
              <p>name: {auth.name}</p>
              <p>email: {auth.email}</p>
              <p>phone number: {auth.phoneNumber}</p>
            </section>
            <section className='cartCast'>
              {cart &&
                cart.map((c) => {
                  return (
                    <div>
                      {c.name} * {c.quantity} : {c.quantity * c.offPrice}
                    </div>
                  );
                })}
              <hr />
              <div>total price : {total}</div>
            </section>
          </>
        ) : (
          <p>please login !</p>
        )}
      </section>
    </main>
  );
};

export default Checkout;
