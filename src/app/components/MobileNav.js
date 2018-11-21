import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import styles from './MobileNav.c.scss';

class MobileNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
    window.openNavigationMenu = this.openMenu;
  }

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  menuStateChanged = menuState => {
    this.setState({ isMenuOpen: menuState.isOpen });
  };

  render() {
    return (
      <Media query="(max-width: 900px)">
        <Menu
          pageWrapId="junction_website"
          outerContainerId="app"
          right
          onStateChange={this.menuStateChanged}
          isOpen={this.state.isMenuOpen}
        >
          <nav className={styles.site_nav}>
            <a href="https://2018.hackjunction.com">Junction 2018</a>
            <Link to="/junctionx">Global</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/about">What is Junction</Link>
            <Link to="/team">Team</Link>
            <Link to="/jobs">Jobs from partners</Link>
            <Link to="/participate">Participate</Link>
            <Link to="/partners">Partner</Link>
            {/*<Link to="/volunteer">Volunteer</Link>*/}
          </nav>
        </Menu>
      </Media>
    );
  }
}

export default MobileNav;
