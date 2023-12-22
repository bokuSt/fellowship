import react from "react";
import logo from "@public/logo.png";
import Image from "next/image";
import styles from "@styles/footer.module.css";
import appstore from "@public/app.jpg";
import playstore from "@public/play.jpg";

function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <a href="/app/page.jsx">
              <Image src={logo} width={50} />
            </a>
            <h4>social media</h4>
            <div className={styles.socialmedia}>
              <a
                href="https://web.facebook.com/evaglical.victory"
                alt="fb"
                target="_blank"
                tooltip="Facebook"
              ></a>
              <a
                href="https://twitter.com/evc_huruma?s=09"
                alt="twit"
                target="_blank"
                tooltip="twitter"
              ></a>
              <a
                href="https://instagram.com/evc_media_huruma?igshid=1kanf83v5avi9"
                alt="ig"
                target="_blank"
                tooltip="instagram"
              ></a>
              <a
                href="https://www.youtube.com/channel/UCYRDi5HxTCX92DPE-xu9imA?view_as=subscriber"
                alt="yt"
                target="_blank"
                tooltip="youtube"
              ></a>
            </div>
          </div>
          <div className={styles.col}>
            <h4>reach us through</h4>
            <p className={styles.contact}>
              <label for="address">address :</label>&nbsp;Huruma, Kiamaiko
            </p>
            <p className={styles.contact}>
              <label for="box">P.O. box :</label>&nbsp; 64506 - 00620
            </p>
            <p className={styles.contact}>
              <label for="mobile">mobile :</label>&nbsp;+254708 686926
            </p>
            <p className={styles.contact}>
              <label for="cell">phone :</label>&nbsp;+254722 283285
            </p>
            <p className={styles.contact}>
              <label for="time">hours :</label>&nbsp;24/7, mon - sat
            </p>
          </div>
          <div className={styles.col}>
            <h4>menu</h4>
            <ul className={styles.footeritem}>
              <li className={styles.fitem}>
                <a href="/app/about">about</a>
              </li>
              <li className={styles.fitem}>
                <a href="/app/event">event</a>
              </li>
              <li className={styles.fitem}>
                <a href="/app/v_tube">v-Tube</a>
              </li>
              <li className={styles.fitem}>
                <a href="/app/shop">shop</a>
              </li>
              <li className={styles.fitem}>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 tooltip="coming soon">install app</h4>
            <p>from app store or google play</p>
            <div className={styles.c_row}>
              <a href="#playstore">
                <Image src={playstore} width={120} height={40} alt="appstore" />
              </a>
              <a href="#appstore">
                <Image src={appstore} width={120} height={40} alt="playstore" />
              </a>
            </div>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
            ></form>
            <div className={styles.till}>
              <span>for donations</span>
              <label htmlFor="mpesa_till">mpesa till number :</label>
              <ul className={styles.tillNo}>
                <li className={styles.digit}>4</li>
                <li className={styles.digit}>9</li>
                <li className={styles.digit}>9</li>
                <li className={styles.digit}>0</li>
                <li className={styles.digit}>8</li>
                <li className={styles.digit}>1</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright"></div>
      </div>
    </footer>
  );
}

export default Footer;
