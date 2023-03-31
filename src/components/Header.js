import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <h1>For Everything and Everyone</h1>
            <p className="mb-5">
              Even if your less into design and more into content strategy you
              may find some redeeming value with,wait for it,dummy copy.
            </p>
            <button className="btn btn-primary me-3">TO SHOP</button>
            <button className="btn btn-light">READ MORE</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;
