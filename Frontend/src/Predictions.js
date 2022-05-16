import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Contents from "./components/Contents";

export default class Predictions extends Component {
    render() {
        return (
            <div>
               <Navbar />
               <Contents />
            </div>
        )
    }
}