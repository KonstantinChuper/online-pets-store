import React from 'react'
import style from './Hero.module.css';
import Button from '../Buttons/Button';
import Container from '@mui/material/Container'

export default function Hero() {
  return (
    <section className={style.heroSection}>
      <Container maxWidth="xl">
        <h1 className={style.header}>
          Amazing Discounts <br /> on Pets Products!
        </h1>
        <Button style={{ marginTop: "40px" }}>Check out</Button>
      </Container>
    </section>
  );
}
