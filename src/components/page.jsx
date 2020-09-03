import React, { Component } from "react";

class Page extends Component {

  componentDidUpdate() {

  }


  componentWillUnmount() {

  }

  render() {

    let iframeStyle = {
      display:'none'
    };
    if (this.props.page.show) {
      iframeStyle = {
        display:'block'
      };
    }

    return (
      <div>
        <iframe src={this.props.page.url} style={iframeStyle}>
        </iframe>
      </div>
    );
  }


}

export default Page;
