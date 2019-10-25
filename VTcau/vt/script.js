require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/symbols/SimpleMarkerSymbol"
] , function(Map, MapView, FeatureLayer) {

    var map = new Map({
        basemap: "streets-navigation-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-84.4112315, 33.7515658],
        zoom: 16

    });

    var Cau = new FeatureLayer({
        url: "https://services5.arcgis.com/Z57Q9sh3tzj0aJtm/arcgis/rest/services/vt/FeatureServer"
    });
    map.add(Cau);

    /* var graphics = new Graphic({
        attributes: {
            ObjectId: building.id
        },
        geometry: {
            longitude: building.longitude,
            latitude: building.latitude
        }
    });

    var layer = new FeatureLayer({
            source: graphics,
            objectIdField: "1",
            fields: [{
                name: "Pascal",
                type: "integer"
            }],
            popupTemplate: {
                title: "Clark",
                content: [{
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "address",
                            label: "Address",
                            visible: true
                        }
                    ]
                }]
            },
            renderer: {  // overrides the layer's default renderer
                type: "simple",
                symbol: {
                    type: "text",
                    color: "#7a0512",
                    text: "\ue661",
                    font: {
                        size: 20,
                        family: "CalciteWebCoreIcons"
                    }
                }
            }
        });

    // map.add(layer); */
});



