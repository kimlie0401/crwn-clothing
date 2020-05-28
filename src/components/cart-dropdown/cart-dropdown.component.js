import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch, hidden }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(!hidden);

  useEffect(() => {
    if (localVisible && hidden) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(!hidden);
  }, [localVisible, hidden]);

  if (!animate && !localVisible) return null;
  return (
    <CartDropdownContainer disappear={hidden}>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  hidden: selectCartHidden(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
