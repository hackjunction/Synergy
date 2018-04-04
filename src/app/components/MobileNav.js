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
            <ul center="xs">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/team">TEAM</Link>
              </li>
              <li>
                <Link to="/2017">JUNCTION&nbsp;2017</Link>
              </li>
              <li>
                <Link to="/junctionx">JUNCTIONX</Link>
              </li>
              <li>
                <Link to="/jobs">JOBS</Link>
              </li>
            </ul>
          </nav>
        </Menu>
      </Media>
    );
  }
}

export default MobileNav;
