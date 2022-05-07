import React, { Component } from "react";

export default class Navbar extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <nav className="nav"> 
                <div className="logo">
                    <img src="img/logo.png"/>
                </div>

                <div class="wrap">
                <ul class="navbar-nav mr-auto" >
                  <li class="nav-item active" >
                    <a class="nav-item is-active"  href="#">Dashboard <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Analysis</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Prediction</a>
                  </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#">Notebook</a>
                  </li>
                </ul>
              </div>
              <span class="nav-indicator"></span>
            </nav>
        )
    }
}