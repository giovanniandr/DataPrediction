import React, { Component } from "react";
import AnalyticsV from "./AnalyticsV";

export default class ContentsA extends Component {
    render() {
        return (
            <div className="first">
                
                <div className="Titles">
                    <h1> The analysis of the short term rental market </h1>
                </div>

                <div className="Introductions"> 
                    <p> In this section of the application you will able to see the deep analysis of short term renting in Dublin, Ireland. This application has a potential of automated market research in the future from the use of datasets
                        available containing informations about properties, showing the potential that Machine Learning has and the benefits of companies adapating to it. <br></br>
                        
                        <br></br>
                        The analysis of this application uses Airbnb Open Source Dataset from Dublin, Ireland to visualize  where demand of short term properties will be and more insights, perfect for first time landlords looking for an
                        opportunity of earn profit through renting a property and investors  that work with short term properties. </p>
                </div>

                <div className="Visualisations">
                    <AnalyticsV />
                </div>
                <div className="Insights">

                </div>

                <div className="Titles">

                </div>
                <div className="Introductions"> 

                </div>
                <div className="Visualisations">

                </div>
                <div className="Insights">

                </div>

                <div className="Footer">

                </div>
            </div>
            

            
        )

        
    }
}