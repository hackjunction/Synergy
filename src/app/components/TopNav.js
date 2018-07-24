import React from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
import styles from './TopNav.c.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div className={styles.header_wrapper}>
        <header className={styles.header}>
          <Link to="/">
            <img
              className={styles.junction_logo}
              src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
              alt="Logo"
            />
          </Link>
          <Media query="(min-width: 901px)">
            <Menu className={styles.menu} mode="horizontal" openAnimation="slide-up">
              <SubMenu title={<Link to="/calendar">EVENTS</Link>} key="events">
                <MenuItem key="junction2018">
                  <a href="https://2018.hackjunction.com">Junction 2018</a>
                </MenuItem>
                <MenuItem key="global">
                  <Link to="/junctionx">Global</Link>
                </MenuItem>
                <MenuItem key="calendar">
                  <Link to="/calendar">Calendar</Link>
                </MenuItem>
              </SubMenu>
              <SubMenu title={<Link to="/about">ABOUT</Link>} key="about">
                <MenuItem key="what-is">
                  <Link to="/about">What is Junction</Link>
                </MenuItem>
                <MenuItem key="team">
                  <Link to="/team">Team</Link>
                </MenuItem>
              </SubMenu>
              <SubMenu title={<Link to="/participate">JOIN</Link>} key="join">
                <MenuItem key="participate">
                  <Link to="/participate">Participate</Link>
                </MenuItem>
                <MenuItem key="partner">
                  <Link to="/partner">Partner</Link>
                </MenuItem>
                <MenuItem key="volunteer">
                  <Link to="/volunteer">Volunteer</Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </Media>
          <Media query="(max-width: 900px)">
            <span onClick={window.openNavigationMenu}>MENU</span>
          </Media>
          {/*}<a
            className={styles.mlh}
            href="https://mlh.io/seasons/eu-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=gray"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg"
              alt="Major League Hacking 2017 Hackathon Season"
            />
          </a>*/}
        </header>
      </div>
    );
  }
}

export default TopNav;
