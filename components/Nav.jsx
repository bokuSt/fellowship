import react from "react";
import logo from "@public/logo.png";
import home from "@public/home.png";
import Image from "next/image";
import styles from "@styles/nav.module.css";
import '@/styles/globals.css'

function Nav() {
  return (
    <header className={styles.containheader}>
      <a href="/app/page.jsx">
        <Image src={logo} width={75} />{" "}
      </a>
      <nav className={styles.navbar}>
        <ul className={styles.navmenu}>
          <li className={styles.navitem}>
            <a href="/app/page.jsx" title="home">
              <Image src={home} width={23} height={25} />
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="/app/about" title="we are">
              <i class="fa fa-info-circle fa-xl" aria-hidden="true"></i>
              <span className={styles.span}>we are</span>
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="/app/event" title="event">
              <i class="fas fa-calendar-check fa-xl"></i>
              <span className={styles.span}>event</span>
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="/app/v_tube" title="v-Tube">
              <i class="fab fa-youtube fa-xl" aria-hidden="true"></i>
              <span className={styles.span}>v-Tube</span>
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="/app/shop" title="shop">
              <i class="fa fa-shop fa-xl"></i>
              <span className={styles.span}>shop</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
