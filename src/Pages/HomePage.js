import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { ADD_TO_CART } from "../Providers/types";
import * as data from "../server/data";
import { checkInCart } from "../utils/checkInCart";

const HomePage = () => {
  const dispatch = useCartActions();
  const { cart } = useCart();

  // product button handler
  const addProductHandler = (product) => {
    console.log(product);

    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <Layout>
      <main className='container'>
        <section className='productList'>
          {data.products.map((product) => {
            return (
              <section className='product' key={product.id}>
                <div className='productImg'>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className='productDesc'>
                  <p>{product.name}</p>
                  <p> $ {product.price}</p>
                  <button
                    onClick={() => addProductHandler(product)}
                    className='btn primary'>
                    {checkInCart(cart, product) ? "In cart" : "Add to cart"}
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
