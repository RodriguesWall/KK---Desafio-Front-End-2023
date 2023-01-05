import React from "react";
import styles from "./styles.module.scss";

function Header({title}) {
  
  return (
    <div className={styles.container}>
      <span>{title}</span>
    </div>
  );
}

export default Header;
