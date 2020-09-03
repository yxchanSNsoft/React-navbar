
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Pagecontainer from "./components/pagecontainer";
import "./App.css";

class App extends Component {
  state = {
    pages: [
      { seq: 0, url: "http://www.google.com", title : "Home", show : true },
      { seq: 1, url: "http://www.yahoo.com" , title : "About me", show : false },
      { seq: 2, url: "http://www.msn.com" , title : "Contact", show : false },
    ],
  };

  constructor(props) {
    super(props);

  }


  handleShow = (page) => {
    const pages = this.state.pages
    for (let i = 0 ; i < pages.length ; i++) {
      pages[i].show = false
      if (pages[i].seq === page.seq) {
        pages[i].show = true
      }
    }
    this.setState({ pages });
  }

  handlePreview = (page) => {
    const pages = this.state.pages
    for (let i = 0 ; i < pages.length ; i++) {
      pages[i].show = false
      if (pages[i].seq === page.seq) {
        pages[i].show = true
      }
    }
    this.setState({ pages });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          pages={this.state.pages}
          onShow = {this.handleShow}
          onPreview = {this.handlePreview}
        />
        <main className="container">
          <Pagecontainer
            pages={this.state.pages}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
