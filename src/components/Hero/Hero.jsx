import React from "react";
import style from "./Hero.module.css";
import Container from "@mui/material/Container";
import LinkButton from "../Buttons/LinkButton/LinkButton";

export default function Hero() {
  return (
    <section className={style.heroSection}>
      <Container maxWidth="xl">
        <h1 className={style.header}>
          Amazing Discounts <br /> on Pets Products!
        </h1>
        <LinkButton to="/sales" style={{ marginTop: "40px" }}>
          Check out
        </LinkButton>
      </Container>
    </section>
  );
}
