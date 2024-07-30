import React from "react";
import { useLocation } from "react-router-dom";
import style from "./BreadCrumbs.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { editPath } from "../../helpers/editPath";
import Container from "@mui/material/Container";

export default function BreadCrumbs({ breadcrumbs }) {
  const location = useLocation();

  return (
    <Container maxWidth="xl">
      <div className={style.breadCrumbs}>
        <NavigationItem path="">Main page</NavigationItem>

        {breadcrumbs.map((item, index) => {
          const isActive = index === breadcrumbs.length - 1;

          return (
            <div className={style.breadCrumpsLine} key={item.path}>
              <div className={style.divider}></div>
              <NavigationItem path={item.path} isActive={isActive}>
                {editPath(item.text)}
              </NavigationItem>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
