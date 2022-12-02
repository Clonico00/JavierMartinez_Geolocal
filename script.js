var geo = navigator.geolocation;
var latitud,longitud;
function localizacion(posicion){
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    if(latitud == undefined || longitud == undefined){
        alert("No se pudo obtener la localizacion");
    }else {
        document.getElementById("latitud").innerHTML = latitud;
        document.getElementById("longitud").innerHTML = longitud;
    }
}
geo.getCurrentPosition(localizacion);
// function error(){
//     alert("No se pudo obtener la localizacion");
// }
//
// function iniciar(){
//     geo.watchPosition(localizacion,error,{enableHighAccuracy:true});
//     if (geo){
//         geo.getCurrentPosition(localizacion,error);
//     }
//     else{
//         alert("Tu navegador no soporta la geolocalizacion");
//     }
//
// }
// window.addEventListener("load",iniciar,false);

latitud = document.getElementById("latitud").innerHTML;
longitud = document.getElementById("longitud").innerHTML;

var platform = new H.service.Platform({
    'apikey': 'HOOiBUHD4HS2PA5zWGonjhIWjMosL7LPs98tcLYrVCw'
});

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(
    document.getElementById('map'),
    defaultLayers.vector.normal.map,
    {
        zoom: 15,
        center: { lng: -3.6116593, lat: 37.1888286 }
    });

var marker = new H.map.Marker({ lng: -3.6116593, lat: 37.1888286 });
map.addObject(marker);

var ui = H.ui.UI.createDefault(map, defaultLayers);










