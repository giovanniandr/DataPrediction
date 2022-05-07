import React, { Component } from "react";
import Analytics from "./Analytics";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";


export default class HomePage extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (<Router>
                    <Switch> 
                        <Route exact path="/"> <p> This is the home page </p> </Route>
                        <Route path="/analytics" component={Analytics}/>
                    </Switch>
                </Router>
        );
    }
}