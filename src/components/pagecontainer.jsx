import React, { Component } from "react";
import Page from "./page";

class Pagecontainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pages } = this.props;
    return (
      <div>
        {pages.map((page) => (
          <Page
            key={page.seq}
            page={page}
          ></Page>
        ))}
      </div>
    );
  }
}

export default Pagecontainer;
