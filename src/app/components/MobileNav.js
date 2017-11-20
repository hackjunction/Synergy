import React from "react";
import { slide as Menu } from "react-burger-menu";
import Media from "react-media";
import styles from "./MobileNav.c.scss";

class MobileNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
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
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/community">COMMUNITY</a>
              </li>
              <li>
                <a href="http://live.hackjunction.com">JUNCTION2017</a>
              </li>
              <li>
                <a href="/all-tracks">TRACKS</a>
              </li>
              <li>
                <a href="/partners">PARTNERS</a>
              </li>
              <li>
                <a href="https://register.hackjunction.com/login">LOGIN</a>
              </li>
            </ul>
          </nav>
        </Menu>
      </Media>
    );
  }
}

export default MobileNav;
