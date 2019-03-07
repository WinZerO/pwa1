var ClienteExtendidoResponse;

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso'))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}



function login(e) {
    var documento = document.getElementById("inputDocument");
    var contraseña = document.getElementById("inputPassword");

    //var urlClienteExtendido = 'https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarclienteextendido';
    var urlClienteExtendido = 'https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarclienteextendido?tipodoc=DNI&nrodoc=' + documento.value + '&fechahasta=01-01-2017';
        

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            alert(JSON.parse(xmlHttp.responseText));
            console.log('XMLHttpRequest VALUE ', JSON.parse(xmlHttp.responseText));
        }
        else{
            alert(JSON.parse(xmlHttp.statusText));
            console.log('XMLHttpRequest ERROR ', xmlHttp.status + ': ' + xmlHttp.statusText);
        }
            
    }
    xmlHttp.open("GET",`https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarcliente?fechahasta=01-01-2018&tipodoc=DNI&nrodoc=31431483`, true); // true for asynchronous 
    xmlHttp.send(null);

    window.location.href = "./index.html";
}


