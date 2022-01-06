import Link from "next/link";
import {useContext} from "react";
import cogoToast from "cogo-toast";
import {CURRENCY} from "@utils/constant";
import Tooltip from "@components/ui/tooltip";
import {CartContext} from "@global/CartContext";
import {toCapitalize} from "@utils/toCapitalize";
import {getCartTotalPrice, getCartTotalQuantity} from "@utils/product";

const MiniCart = ({className, isHidden, openHandler, closeHandler}) => {
    const {shoppingCart, removeProduct} = useContext(CartContext);
    const totalCartItems = getCartTotalQuantity(shoppingCart);

    return (
        <div className={`tt-parent-box ${className}`}>
            <div className={`tt-cart tt-dropdown-obj ${!isHidden ? "active" : null}`}>
                <button className="tt-dropdown-toggle" data-id="miniCart" onClick={openHandler}>
                    <i className="icon-f-39"/>
                    <div className="tt-badge-cart">{totalCartItems ? totalCartItems : 0}</div>
                </button>
                <div className="tt-dropdown-menu">
                    <div className="tt-mobile-add">
                        <h6 className="tt-title">VOTRE PANIER</h6>
                        <button className="tt-close" data-id="miniCart" onClick={closeHandler}>Fermer</button>
                    </div>
                    <div className="tt-dropdown-inner">
                        <div className="tt-cart-layout">
                            {shoppingCart.length <= 0 ? (
                                <span className="tt-cart-empty">
                                    <i className="icon-f-39"/>
                                    <p>Aucun produit dans le panier</p>
                                </span>
                            ) : (
                                <div className="tt-cart-content">
                                    <div className="tt-cart-list">
                                        {shoppingCart.slice(0, 3).map(product => (
                                            <div className="tt-item" key={product.cartId}>
                                                <Link href="/">
                                                    <a>
                                                        <div className="tt-item-img">
                                                            {product.variations ? (
                                                                product.variations.map((variation, i) => (
                                                                    variation?.color?.name === product?.color && (
                                                                        <img
                                                                            key={i}
                                                                            src={variation.color.thumb}
                                                                            alt={product.name}
                                                                        />
                                                                    )
                                                                ))
                                                            ) : (
                                                                <img
                                                                    src={product.thumbs[0]}
                                                                    alt={product.name}
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="tt-item-descriptions">
                                                            <h2 className="tt-title">{product.name}</h2>
                                                            {product.variations && (
                                                                <ul className="tt-add-info">
                                                                    <li>
                                                                        {`
                                                                        ${product.color ? toCapitalize(product.color) : ''},
                                                                        ${product.size ? product.size.toUpperCase() : ''},
                                                                        ${product.material ? toCapitalize(product.material) : ''}
                                                                    `}
                                                                    </li>
                                                                </ul>
                                                            )}
                                                            <div className="tt-quantity">{product.quantity} X</div>
                                                            <div className="tt-price"
                                                                 style={{marginLeft: 2}}
                                                            >
                                                                {product.price.toFixed(2) + CURRENCY }
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                                <div className="tt-item-close">
                                                    <button className="tt-btn-close"
                                                            onClick={() => {
                                                                cogoToast.error(
                                                                    product.name,
                                                                    {
                                                                        position: "bottom-right",
                                                                        heading: "Remove From Cart!"
                                                                    }
                                                                );
                                                                removeProduct({
                                                                    cartId: product.cartId
                                                                })
                                                            }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {shoppingCart.length > 3 && (
                                        <div className="flex-align-center">
                                            <Tooltip content="Voir le contenu du panier" className="d-flex justify-content-center">
                                                <Link href="/cart">
                                                    <a className="btn-link-02 text-center">. . .</a>
                                                </Link>
                                            </Tooltip>
                                        </div>
                                    )}
                                    <div className="tt-cart-total-row">
                                        <div className="tt-cart-total-title">SOUS-TOTAL:</div>
                                        <div
                                            className="tt-cart-total-price">{getCartTotalPrice(shoppingCart).toFixed(2) + CURRENCY }</div>
                                    </div>
                                    <div className="tt-cart-btn">
                                        <div className="tt-item">
                                            <Link href="/checkout">
                                                <a className="btn">Commander</a>
                                            </Link>
                                        </div>
                                        <div className="tt-item">
                                            <Link href="/cart">
                                                <a className="btn-link-02 tt-hidden-mobile">Voir le Panier</a>
                                            </Link>

                                            <Link href="/cart">
                                                <a className="btn btn-border tt-hidden-desktop">Voir le Panier</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniCart;
