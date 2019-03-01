if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso'))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}




fetch('https://ws-externos-uat.sancristobal.com.ar/WSB2B_CRM_REST_test/api/Personas/Buscarclienteextendido?tipodoc=DNI&nrodoc=31431483&fechahasta=01%2F01%2F2017')
  .then(function(response) {
      document.getElementById("showCliente").innerHTML = response.json();
    // return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });