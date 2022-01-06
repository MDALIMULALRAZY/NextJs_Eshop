import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "@global/CartContext";
import { getCartProductTotalPrice, getCartTotalPrice } from "@utils/product";
import { CURRENCY } from "@utils/constant";

const OrderDetails = () => {
  const { shoppingCart } = useContext(CartContext);

  return (
    <div className="order-details-area-wrap checkout-item">
      <h4>Votre Commande</h4>
      <div className="order-details-table table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Produits</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart?.map((product) => (
              <tr className="cart-item">
                <td>
                  <span className="product-title">{product?.name}</span>
                  <span className="product-quantity">
                    × {product?.quantity}
                  </span>
                </td>
                <td>
                  {
                    getCartProductTotalPrice(shoppingCart, product).toFixed(2) + CURRENCY }
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Sous-Total</th>
              <td>{getCartTotalPrice(shoppingCart)+ CURRENCY}</td>
            </tr>
            <tr className="shipping">
              <th>Livraison</th>
              <td>
                <ul className="shipping-method">
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="cod_shipping"
                        name="shipping_method"
                        className="form-check-input"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cod_shipping"
                      >
                        Payer à la livraison
                      </label>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="final-total">
              <th>Total</th>
              <td>
                <span className="total-amount">
                  {getCartTotalPrice(shoppingCart) + CURRENCY }
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="order-details-footer">
        <p>
          Vos données seront utilisées pour la livraison
          <Link href="/">
            <a className="text-danger"> .</a>
          </Link>
        </p>
        <div className="form-check mt-2">
          <input
            type="checkbox"
            id="privacy"
            className="form-check-input"
            required
          />
          <label htmlFor="privacy" className="form-check-label">
            J'accepte les termes
          </label>
        </div>
        <button className="btn btn-full btn-black mt-3 mt-md-4">
          Commander
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
