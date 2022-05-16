import React, { Component } from "react";
import ContentsA from "./components/ContentsA";
import Navbar from "./components/Navbar/Navbar";

export default class Analytics extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContentsA />
            </div>
        )
    }
}