import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNav.c.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div className={styles.header_wrapper}>
        <header className={styles.header}>
          <Link to="/">
            <img
              className={[styles.logo],[styles.junction_logo]}
              src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
            />
          </Link>
          <nav className={styles.site_nav}>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <a className={styles.mlh} href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=gray">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg" alt="Major League Hacking 2017 Hackathon Season" />
          </a>
      </header>
    </div>
    );
  }
}

export default TopNav;
