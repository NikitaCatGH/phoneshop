import React from "react";
import styles from "./Header.module.scss";
import phoneLogo from "../../assets/phoneLogo.png";

const Header = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <a to="/">
          <img width="50" src={phoneLogo} alt="Phone Logo" />

          <div className={styles.text_container}>
            <h1>BestShop</h1>
            <p>Самый выгодный магазин телефонов</p>
          </div>
        </a>
      </div>
      <input className={styles.search} placeholder="Поиск"></input>
      <nav>op</nav>
    </div>
  );
};

export default Header;
