import PropTypes from 'prop-types';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './CartItem.module.css';

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { updateProduct } = useOutletContext();

  const updateProductQuantityInCart = (newQuantity) => {
    updateProduct({
      ...product,
      quantity: newQuantity,
    });
  };

  const removeProductFromCart = () => {
    updateProduct({
      ...product,
      quantity: 0,
    });
  };

  return (
    <>
      <div className={styles.product} data-testid={`product${product.id}`}>
        <div className={styles.infoContainer}>
          <img
            src={product.image}
            alt={`image of ${product.title}`}
            className={styles.productImage}
          />
          <div className={styles.title}>
            <div>{product.title}</div>
          </div>
        </div>

        <div className={styles.editContainer}>
          <div data-testid="subtotal">
            {(quantity * product.price).toFixed(2)}
          </div>
          <input
            type="number"
            id="quantity"
            min={1}
            value={quantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              if (newQuantity === 0) return;

              setQuantity(newQuantity);
              updateProductQuantityInCart(newQuantity);
            }}
          />
          <button
            onClick={() => {
              removeProductFromCart();
            }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
};

export default CartItem;
