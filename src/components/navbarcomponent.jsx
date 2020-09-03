import React, { Component } from "react";

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    console.log("props",props)
  }

  render() {
    return (
      <span>
        <button
          onMouseOver={() => this.props.onMouseOver(this.props.page)}
          onClick={() => this.props.onClick(this.props.page)}
          className="btn btn-primary btn-lg"
        >
          {this.props.page.title}
        </button>
      </span>
    );
  }
};

export default NavBarComponent;
