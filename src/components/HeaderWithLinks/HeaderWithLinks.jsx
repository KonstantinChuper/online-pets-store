import React from 'react'
import style from './HeaderWithLinks.module.css';
import NavigationItem from "../NavigationItem/NavigationItem";

export default function HeaderWithLinks({ header, path, children }) {
  return (
    <div>
      <div className={style.categoryBox}>
        <h2 className="sectionHeader">{header}</h2>
        <div className={style.dividerBox}>
          <div className={style.divider}></div>
          <NavigationItem path={path}>{children}</NavigationItem>
        </div>
      </div>
    </div>
  );
}
