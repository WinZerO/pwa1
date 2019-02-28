window.onload = function() {
    document.addEventListener("deviceready", init, false);
    init();
}

function init() {
    navigator.geolocation.getCurrentPosition(positionSuccess, PositionError);
}

function positionSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("long").innerHTML = longitude;
}

function PositionError(error) {
    alert(error.message);
}