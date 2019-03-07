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


//     $.ajax({
//         type: "GET",
//         // url: "https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarcliente",
//         // data: "{ tipodoc: DNI, nrodoc: '" + documento.value + "', fechahasta: 01-01-2017}",
//         url: "https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarcliente?tipodoc=DNI&nrodoc=31431483&fechahasta=01-07-2018",
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (r) {
//             alert(r.json());
//         },
//         error: function (r) {
//             alert(r.responseText);
//         },
//         failure: function (r) {
//             alert(r.responseText);
//         }
//     });


// alert(urlClienteExtendido);
//     window.location.href("./index.html");


    // $.ajax({

    // })


    // var urlvariable;

    // urlvariable = "text";

    // var ItemJSON;

    // //?tipodoc=DNI&nrodoc=' + documento.value + '&fechahasta=01-01-2017

    // ItemJSON = '[{"tipodoc": DNI,    "nrodoc": "31431483",    "fechahasta": 01-01-2017  }]';

    // URL = urlClienteExtendido; // "https://testrestapi.com/additems?var=" + urlvariable;  //Your URL
    // alert(URL);
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    // xmlhttp.open("GET", URL, false);
    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    // //xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('apiusername:apiuserpassword')); //in prod, you should encrypt user name and password and provide encrypted keys here instead 
    // xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    // // xmlhttp.send(ItemJSON);
    
    // alert(xmlhttp.responseText);
    // //document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
   
    

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            console.log('XMLHttpRequest VALUE ', JSON.parse(xmlHttp.responseText));
        }
        else{
            console.log('XMLHttpRequest ERROR ', xmlHttp.status + ': ' + xmlHttp.statusText);
        }
            
    }
    xmlHttp.open("GET",`https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarcliente?fechahasta=01-01-2018&tipodoc=DNI&nrodoc=31431483`, true); // true for asynchronous 
    xmlHttp.send(null);

}


