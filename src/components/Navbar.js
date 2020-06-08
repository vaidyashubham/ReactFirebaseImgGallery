import React from 'react'
import { Link } from "react-router-dom";
import firebase from '../firebase/config';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {

    const show = (this.state.menu) ? "show" : "";

    return (


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">UITech</Link>
        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav">
            <Link className="nav-link" to="upload">Upload Images</Link>
            <span className="navbar-text my-2 my-lg-0" onClick={() => {
              localStorage.removeItem("user_id");
              firebase.auth().signOut();
            }}>Signout</span>
          </div>
        </div>
      </nav>
    );
  }

}