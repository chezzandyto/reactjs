import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="chezzandyto"
                lastName="Toapanta"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                jobTitle="Frontend engineer"
                twitter="spagus"
              />
              ,
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
