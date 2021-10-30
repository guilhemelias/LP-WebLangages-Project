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