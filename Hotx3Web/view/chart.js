


var chart = document.getElementById("line-chart");
console.log(chart);
if(chart!=null){
    var myChart = new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
            datasets: [{
                data: [30, 14, 15, 18, 27, 22, 21],
                label: "Inside",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [7, -3, 30, 47, 45, 11, 14],
                label: "Outside",
                borderColor: "#8e5ea2",
                fill: false
            }]
        },
        options: {
            legend: {
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    
    
    });
}