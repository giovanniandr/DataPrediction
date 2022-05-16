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


                    <div className="TitleVisualisation"> 
                        <h2> When is people looking for short term places in Dublin, Ireland. </h2>
                    </div>

                    <div className="Visualisations">
                        
                        <AnalyticsV />
                    </div>

                    <div className="Insights">
                        <p> It is possible to discover from the visualization above that Dublin for being the capital of Ireland has people looking for short term properties during the whole year, however peaks of demand are possible to be 
                            seen in months due to holidays. <br></br>

                            <br></br>
                            February has an increase on the demand due to St.Patrick’s as this holiday attracts a lot of people to come to Ireland to celebrate this tradiotional holiday.
                        
                            <br></br>
                            <br></br>
                            From the start of may has a slightly increase of the demand as being the start of summer in Ireland, Dublin is one of the best destination to visit in Europe during the summer time, winning awards from TripAdvisor. 
                            (TripAdvisor 2022).
                        </p>

                    </div>
                </div>
            
        )

        
    }
}