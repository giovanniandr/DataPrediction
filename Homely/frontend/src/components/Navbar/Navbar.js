import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css"


class Navbar extends Component {
    render () {
        return (
            <nav className="nav"> 
            <div className="logo">
                
            </div>

            <div class="wrap">
            <ul class="navbar-nav mr-auto" >
              {MenuItems.map((item, index) =>{
                return (
                  <li class="nav-item active" key={index}>
                    <a className={item.cName} class="nav-item is-active"  href={item.url}> 
                      {item.title}     
                    </a>
                  </li>

                )
              })}
            </ul>
          </div>
          <span class="nav-indicator"></span>
        </nav>
        )
    }
}

export default Navbar
