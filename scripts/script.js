var ClienteExtendidoResponse;

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso'))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}



function login(e) {
    var documento = document.getElementById("inputDocument");
    var contraseña = document.getElementById("inputPassword");

    var urlClienteExtendido = 'https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarclienteextendido?tipodoc=DNI&nrodoc=' + documento.value + '&fechahasta=01-01-2017';
    // alert(urClienteExtendido);
    // fetch(urClienteExtendido)
    // .then(function(response) {
    //     alert(response);
    //     ClienteExtendidoResponse =  response.json();
        
    //     //document.getElementById("showCliente").innerHTML = response.json();
    //   // return response.json();
    //   response.redirected("./index.html");
    // })
    // .then(function(myJson) {
    //   console.log(myJson);
    // });


    // // url (required), options (optional)
    // fetch(urlClienteExtendido, {
    //     method: 'get'
    // }).then(function(response) {
    //     alert(response);
    //     ClienteExtendidoResponse = response.json();
    //     console.alert(response)
    // }).catch(function(err) {
    //     alert(err);
    // });


    $.ajax({
        type: "GET",
        url: "https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarcliente",
        data: "{ tipodoc: DNI, nrodoc: '" + documento.value + "', fechahasta: 01-01-2017}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            alert(r.json());
        },
        error: function (r) {
            alert(r.responseText);
        },
        failure: function (r) {
            alert(r.responseText);
        }
    });


alert(urlClienteExtendido);
    window.location.href("./index.html");


    // $.ajax({

    // })
}


