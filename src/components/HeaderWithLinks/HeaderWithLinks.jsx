import React from 'react'
import style from './HeaderWithLinks.module.css';
import { Link } from 'react-router-dom';

export default function HeaderWithLinks({header, linkText}) {
  return (
    <div>
      <div className={style.categoryBox}>
        <h2 className="sectionHeader">{header}</h2>
        <div className={style.dividerBox}>
          <div className={style.divider}></div>
          <Link to={`/${linkText}`} className={style.categoryName}>
            All {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
