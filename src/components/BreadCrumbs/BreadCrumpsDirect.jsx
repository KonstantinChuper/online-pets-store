import React from "react";
import { useLocation } from "react-router-dom";
import style from "./BreadCrumbs.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { editPath } from "../../helpers/editPath";
import Container from "@mui/material/Container";
import { API_URL } from "../../features/api/apiThunks";

export default function BreadCrumbs({ breadcrumbs }) {
  return (
    <Container maxWidth="xl">
      <div className={style.breadCrumbs}>
        <NavigationItem path="">Main page</NavigationItem>

        {breadcrumbs.map((item, index) => {
          const isActive = index === breadcrumbs.length - 1;

          return (
            <div className={style.breadCrumpsLine} key={item.path}>
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
