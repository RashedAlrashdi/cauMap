require([
    "esri/Map",
    "esri/views/MapView"

] , function(Map, MapView){

    var map = new Map({
        basemap: "streets-navigation-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-84.4112315, 33.7515658],
        zoom: 16
    });
});