import React from "react";
import styles from "./MainPage.module.scss";
import Header from "./Header/Header";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className={styles.mainPage}>mainPage</div>;
    </>
  );
}
