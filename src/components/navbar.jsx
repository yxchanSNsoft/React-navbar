import React, { Component } from "react";
import NavBarComponent from "./navbarcomponent";

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log("props",props)
  }

  render() {
    const { onPreview, pages, onShow } = this.props;
    return (
      <div className="btn-group" role="group">
      <nav >
        <a className="navbar-brand" href="#">
            {pages.map((page) => (
              <NavBarComponent
                page={page}
                key={page.seq}
                onClick = {onShow}
                onMouseOver = {onPreview}
              ></NavBarComponent>
            ))}
        </a>
      </nav>
      </div>
    );
  }
};

export default NavBar;
