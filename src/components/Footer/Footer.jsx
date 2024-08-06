import React from "react";
import IconIstagramm from "../../assets/iconInstagram.svg";
import iconWhatsapp from "../../assets/iconWhatsapp.svg";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <h2 className="sectionHeader">Contact</h2>
      <address className={style.contactBox}>
        <div className={style.contactInfoBox}>
          <span className={style.contactHeader}>Phone</span>
          <a className={style.contactInfo} href="tel:+493091588492">
            +49 30 915-88492
          </a>
        </div>
        <div className={style.contactInfoBox}>
          <span className={style.contactHeader}>Socials</span>
          <span className={style.contactIconsBox}>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
              <img className={style.icon} src={IconIstagramm} alt="Icon Istagramm" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
              <img className={style.icon} src={iconWhatsapp} alt="Icon Whatsapp" />
            </a>
          </span>
        </div>
        <div className={style.contactInfoBox}>
          <span className={style.contactHeader}>Address</span>
          <span className={style.contactInfo}>Wallstraẞe 9-13, 10179 Berlin, Deutschland</span>
        </div>
        <div className={style.contactInfoBox}>
          <span className={style.contactHeader}>Working Hours</span>
          <span className={style.contactInfo}>24 hours a day</span>
        </div>
      </address>
      <iframe
        className={style.iFrame}
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.2331572603994!2d13.401947677118638!3d52.5111194368866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sen!2sde!4v1720898153425!5m2!1sen!2sde"
        height="350"
      ></iframe>
    </footer>
  );
}
