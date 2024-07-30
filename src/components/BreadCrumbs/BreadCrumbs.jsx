import React from "react";
import { useLocation } from "react-router-dom";
import style from "./BreadCrumbs.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFisrtLetter";
import { editPath } from "../../helpers/editPath";
import Container from "@mui/material/Container";

export default function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Container maxWidth="xl">
      <div className={style.breadCrumbs}>
        <NavigationItem path="">Main page</NavigationItem>

        {pathnames.map((path, index) => {
          const to = `${pathnames.slice(0, index + 1).join("/")}`;
          const isActive = index === pathnames.length - 1;
          let breadCrumbText = path;
          if (path === "products" || path === "sales") {
            breadCrumbText = `All ${path}`;
          } else {
            breadCrumbText = capitalizeFirstLetter(path);
          }
          return (
            <div className={style.breadCrumpsLine} key={to}>
              <div className={style.divider}></div>
              <NavigationItem path={to} isActive={isActive}>
                {editPath(breadCrumbText)}
              </NavigationItem>
            </div>
          );
        })}

      </div>
    </Container>
  );
}
