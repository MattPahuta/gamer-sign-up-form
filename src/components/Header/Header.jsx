import logo from "../../assets/images/logo.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* header wrapper - grid */}
      <div className={styles.wrapper}>
        <div className={styles.headerGrid}>
          <div className={styles.logo}>
            <img src={logo} alt="Neoncore brand logo" />
          </div>
          <div className={styles.statusCount}>
            <span>0/5 ready</span>
          </div>
          <div className={styles.titleBox}>
            <h1><span className={styles.titleAccent}>//</span>
              Join the Nexus
            </h1>
            <p className={styles.subTitle}>
              Initialize Your Neocore Identity
            </p>
          </div>
          <div className={styles.operatorIdStrip}>
            <p>Operator ID</p>
            <p>Unassigned</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;