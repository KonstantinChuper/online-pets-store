import React from 'react'
import style from './Hero.module.css';
// import Button from "@mui/material/Button";
import Button from '../Buttons/Button';

export default function Hero() {
  return (
    <section className={style.heroSection}>
      <h1 className={style.header}>
        Amazing Discounts <br /> on Pets Products!
      </h1>
      {/* <Button variant="contained" sx={{ mt: "40px", padding: "16px 56px", bgcolor: "#0D50FF",textTransform: "none" }}>
        Check out
      </Button> */}
      <Button style={{marginTop: "40px"}}>Check out</Button>
    </section>
  );
}
