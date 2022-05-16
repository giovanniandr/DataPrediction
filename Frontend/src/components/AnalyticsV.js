import React from "react";

import { Line } from "react-chartjs-2";

export default class AnalyticsV extends Component {

    render (){
        
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                label: "Occupancy rate",
                data: [110, 120, 170, 140, 120, 130, 160, 155, 130, 135, 90, 120],
                fill: true,
                backgroundColor: "rgba(255,121,121,0.2)",
                borderColor: "#FF7979"
                },
                {
                label: "Price rate",
                data: [120, 110, 160, 150, 120, 126, 140, 142, 130, 120, 110, 120],
                fill: false,
                borderColor: "#1AD285"
                }
            ]
            };
            const data = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                    label: "Occupancy rate",
                    data: [110, 120, 170, 140, 120, 130, 160, 155, 130, 135, 90, 120],
                    fill: true,
                    backgroundColor: "rgba(255,121,121,0.2)",
                    borderColor: "#FF7979"
                    },
                    {
                    label: "Price rate",
                    data: [120, 110, 160, 150, 120, 126, 140, 142, 130, 120, 110, 120],
                    fill: false,
                    borderColor: "#1AD285"
                    }
                ]
                };

                const legend = {
                display: true,
                position: "bottom",
                labels: {
                    fontColor: "#323130",
                    fontSize: 14
                }
                };

                const options = {
                title: {
                    display: true,
                    text: ""
                },
                scales: {
                    yAxes: [
                    {
                        ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100
                        }
                    }
                    ]
                }
                };

            return (

            <Line data={data} legend={legend} options={options} />

            );
            
    }
  
}
