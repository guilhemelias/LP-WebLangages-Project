var requestURLJSon = 'tempDataStub.json';
var request = new XMLHttpRequest();

request.open('GET', requestURLJSon);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tempData = request.response;
    refreshTemp(tempData);

}