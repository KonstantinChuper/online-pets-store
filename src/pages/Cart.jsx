import React from "react";
import Container from "@mui/material/Container";
import HeaderWithLinks from "../components/HeaderWithLinks/HeaderWithLinks";
import LinkButton from "../components/Buttons/LinkButton/LinkButton";
import style from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import OrderDetailsForm from "../components/OrderDetailsForm/OrderDetailsForm";

export default function Cart() {
  const { items: products } = useSelector((state) => state.cart);

  return (
    <section style={{ paddingTop: "40px" }}>
      {products.length === 0 ? (
        <Container maxWidth="xl">
          <HeaderWithLinks header={"Shopping cart"} path={""}>
            Back to store
          </HeaderWithLinks>
          <div className={style.emptyCartBox}>
            <p className={style.emptyCartText}>Looks like you have no items in your basket currently.</p>
            <LinkButton to="/products" style={{ marginTop: "32px" }}>
              Continue Shopping
            </LinkButton>
          </div>
        </Container>
      ) : (
        <Container maxWidth="xl">
          <div className={style.cartBox}>
            <div style={{width: "100%"}} className={style.productCardsBox}>
              {products.map((product) => {
                return <CartItem product={product} />;
              })}
            </div>
            <OrderDetailsForm />
          </div>
        </Container>
      )}
    </section>
  );
}
