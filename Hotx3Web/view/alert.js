var requestURLJSon = 'tempDataStub.json';
var request = new XMLHttpRequest();

request.open('GET', requestURLJSon);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tempData = request.response;
    refreshTemp(tempData);

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function refreshTemp(jsonTemp) {


    var newInsideTemp = jsonTemp['listTemp'][getRandomInt(10)]["insideTemp"];
    var newOutsideTemp = jsonTemp['listTemp'][getRandomInt(10)]["outsideTemp"];


    let circleTab = document.querySelectorAll(".customCircle ")
    circleTab.forEach((circle) => {
        if (circle.getAttribute('name') == "inside") {
            circle.childNodes[3].textContent = newInsideTemp + " °C";
            applyCircleColor(newInsideTemp, circle);
            controlAlertInside(newInsideTemp);
        }
        if (circle.getAttribute('name') == "outside") {
            circle.childNodes[3].textContent = newOutsideTemp + " °C";
            applyCircleColor(newOutsideTemp, circle);
            controlAlertOutside(newOutsideTemp);
        }
    })
}

function controlAlertInside(temp) {

    if (temp >= 18 && temp <= 23) {
        document.getElementById("insideAlert").style.visibility = "hidden";
    }
    if (temp < 18) {
        document.getElementById("insideAlert").setAttribute('tooltip', 'Alerte :  Il fait froid, montez le chauffage')
    }
    if (temp > 23) {
        document.getElementById("insideAlert").setAttribute('tooltip', 'Alerte : Il fait chaud, mettez la clim')
    }

}


function controlAlertOutside(temp) {

    if (temp >= 18 && temp <= 24) {
        document.getElementById("outsideAlert").style.visibility = "hidden";
    }
    if (temp < 18) {
        document.getElementById("outsideAlert").setAttribute('tooltip', 'Alerte : Il fait froid, mettez un pull')
    }
    if (temp > 24) {
        document.getElementById("outsideAlert").setAttribute('tooltip', 'Alerte : Il fait chaud, sortez léger')

    }

}


function applyCircleColor(temp, circle) {

    var hexaCircle = pickHex(temp);

    circle.style.borderColor = hexaCircle;
    circle.style.borderTopColor = "white";

    let circleSpan = circle.querySelector('span');
    circleSpan.style.backgroundColor = hexaCircle;
    var css = '#' + circleSpan.getAttribute('id') + '[tooltip]:hover:before{ background-color:' + hexaCircle;
    var style = document.createElement('style')
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);


}






//Color Gradient
function pickHex(temp) {
    color1 = [77, 157, 224];
    color2 = [219, 50, 77];
    var w1 = tempToWeight(temp);
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w2 + color2[0] * w1),
        Math.round(color1[1] * w2 + color2[1] * w1),
        Math.round(color1[2] * w2 + color2[2] * w1)
    ];
    return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function tempToWeight(temp) {
    if (temp <= 0) {
        return 0;
    }
    if (temp >= 35) {
        return 1;
    }

    return temp * 0.02857
}







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