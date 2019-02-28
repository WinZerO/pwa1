if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso'))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

// var mapaGO = document.getElementById('mapaGO');


window.onload = function(event){
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.log('Geolocation is not supported');
    }
}

function errorCallback() {}

function successCallback(position) {
        
    document.getElementById('coordenadas').Text = "Latitud: " + position.coords.latitude + "</br> Longitud: " + position.coords.longitude;

//   var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";
//   mapUrl = mapUrl + position.coords.latitude + ',' + position.coords.longitude;
//   mapUrl = mapUrl + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
//   var imgElement = document.getElementById("static-map");
//   imgElement.src = mapUrl;
}