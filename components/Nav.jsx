import Image from "next/image";
import logo from "@/public/logo.png"
import home from "@/public/home.png";
import '@/app/globals.css'
import navstyle from "@/styles/nav.module.css"
import script from "@/components/s/script.js"
function Nav() {
  return (
    <header className={navstyle.containheader}>
      <div className={navstyle.contain}>
      <a href="/app/page.jsx">
        <Image src={logo} width={75} />{" "}
      </a>
      <nav className={navstyle.navbar}>
        <ul className={navstyle.navmenu}>
          <li className={navstyle.navitem}>
            <a href="/app/page.jsx" title="home">
              <Image src={home} width={23} height={25} />
            </a>
          </li>
          <li className={navstyle.navitem}>
            <a href="/app/about" title="we are">
              <i class="fa fa-info-circle fa-xl" aria-hidden="true"></i>
              <span className={navstyle.span}>we are</span>
            </a>
          </li>
          <li className={navstyle.navitem}>
            <a href="/app/event" title="event">
              <i class="fas fa-calendar-check fa-xl"></i>
              <span className={navstyle.span}>event</span>
            </a>
          </li>
          <li className={navstyle.navitem}>
            <a href="/app/v_tube" title="v-Tube">
              <i class="fab fa-youtube fa-xl" aria-hidden="true"></i>
              <span className={navstyle.span}>v-Tube</span>
            </a>
          </li>
          <li className={navstyle.navitem}>
            <a href="/app/shop" title="shop">
              <i class="fa fa-shop fa-xl"></i>
              <span className={navstyle.span}>shop</span>
            </a>
          </li>
        </ul>
      </nav>
      <button id="icon" className={navstyle.mobile_nav_toggle} aria-controls="primary-navigation"
      aria-expanded="false">
        <span className={navstyle.visually_hidden}>menu</span>
      </button>
      </div>
    </header>
  );
}

export default Nav;
