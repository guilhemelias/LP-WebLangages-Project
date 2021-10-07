
console.log("hey");
var requestURLJSon = 'tempDataStub.json' ;
var request = new XMLHttpRequest();

request.open('GET', requestURLJSon);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tempData = request.response;    
    refreshTemp(tempData);

}



function refreshTemp(jsonTemp) {
    var newInsideTemp = jsonTemp['listTemp'][0]["insideTemp"];
    var newOutsideTemp = jsonTemp['listTemp'][0]["outsideTemp"];

    var insideLabel = document.querySelector(".customCircle p[name='insideTemp']");
    var outsideLabel = document.querySelector(".customCircle p[name='outsideTemp']");


    insideLabel.textContent = newInsideTemp+" °C";
    outsideLabel.textContent = newOutsideTemp+" °C";
    controlAlertInside(newInsideTemp);
    controlAlertOutside(newOutsideTemp);
    
}

function controlAlertInside(temp){

    if(temp >=18 && temp <=23){
        
        document.getElementById("insideAlert").style.visibility = "hidden";
    }
    if(temp <18){       
        document.getElementById("insideAlert").setAttribute('tooltip', 'Alerte :  Il fait froid, montez le chauffage')
    }
    if(temp >23){
        document.getElementById("insideAlert").setAttribute('tooltip', 'Alerte : Il fait chaud, mettez la clim')
    }

}


function controlAlertOutside(temp){

    var hexaCircle=pickHex();
    console.log(hexaCircle);
    var customCircle = document.querySelectorAll(".customCircle");
    customCircle.forEach((circle) => {
        circle.style.borderColor=hexaCircle;
        circle.style.borderTopColor="white";

        let circleSpan=circle.querySelector('span');
        circleSpan.style.backgroundColor=hexaCircle;
      

        var css = '[tooltip]:hover:before{ background-color:'+hexaCircle;
        var style = document.createElement('style')
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        
        document.getElementsByTagName('head')[0].appendChild(style);
        
    })

    if(temp >=18 && temp <=24){
        
        document.getElementById("outsideAlert").style.visibility = "hidden";
    }
    if(temp <18){       
        document.getElementById("outsideAlert").setAttribute('tooltip', 'Alerte : Il fait froid, mettez un pull')
    }
    if(temp >24){
        document.getElementById("outsideAlert").setAttribute('tooltip', 'Alerte : Il fait chaud, sortez léger')
    }

}

function pickHex() {
    color1 =[77,157,224];
    color2=[219,50,77];
    var w1 = 0.5;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    console.log(rgb[0]) ;   
    return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }