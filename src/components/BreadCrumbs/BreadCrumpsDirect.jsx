import React from "react";
import style from "./BreadCrumbs.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import Container from "@mui/material/Container";

export default function BreadCrumbs({ breadcrumbs }) {
  return (
    <Container maxWidth="xl">
      <div className={style.breadCrumbs}>
        <NavigationItem path="">Main page</NavigationItem>

        {breadcrumbs.map((item, index) => {
          const isActive = index === breadcrumbs.length - 1;

          return (
            <div className={style.breadCrumpsLine} key={item.to ? item.to : index}>
              <div className={style.divider}></div>
              <NavigationItem path={item.to} isActive={isActive}>
                {item.label}
              </NavigationItem>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
