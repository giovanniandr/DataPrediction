import React, { Component } from "react";
import "./Navbar.css"
import logo from "../../logo.png";
import { Link } from "react-router-dom";


class Navbar extends Component {

    render () {
        return (
            <div className="menu"> 
                <div className="logo">
                    <img src={ logo } alt="Homely Logo"/>
                </div>

                <div className="search">
                    <div className="input-group stylish-input-group">
                        <span className="input-group-addon"> 
                            <button type="submit"> 
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </span>
                        <input type="text" className="form-control" placeholder="Search for the location within Dublin, Ireland" ></input>
                    </div>
                </div>

                <nav className="nav"> 
                <div className="wrap">
                <ul className="nav-menu" >
                    
                    <li className="nav-item"> <Link to ="/" > Dashboard </Link> </li>
                    <li className="nav-item"> <Link to ="/analytics" > Analytics </Link> </li>
                    <li className="nav-item">  <Link to ="/predictions" > Predictions </Link> </li>
                    <li className="nav-item">  <Link to ="/notebook" > Notebook </Link> </li>
                   
                </ul>
            </div>
            <span className="nav-indicator"></span>
            </nav>
        </div>
        
        )
    }
}

export default Navbar
