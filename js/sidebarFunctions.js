/* 
FUNCTION:  
PURPOSE:  
CALLED IN:  	 
CALLS TO:  
TAKES:  
RETURNS:  
*/

/* <button id='btnEV' class='btn btn-primary btn-block'>Edna Valley AVA <br>est. 1982</button>
<button id='btnPR' class='btn btn-primary btn-block'>Paso Robles AVA <br>est. 1983</button>
<button id='btnYM' class='btn btn-primary btn-block'>York Mountain AVA <br>est. 1983</button>
<button id='btnAGV' cla */


// Sidebar functions --------------------------------------------
var ednaView
var pasoView
var yorkView
var arroyoView
var countyView

var infoPanel = L.control({ position: 'topright' });

function sideBar(dataAvaLayer) {
    //console.log("dataAvaLayer")
    //console.log(dataAvaLayer)
    dataAvaLayer.eachLayer(function (layer) {
        var p = layer.feature.properties.Name;
        console.log(p)
        if (p == 'Edna Valley') {
            ednaView = layer.getBounds();
            console.log(ednaView)
        } else if (p == 'Paso Robles') {
            pasoView = layer.getBounds();
            console.log(pasoView)
        } else if (p == 'York Mountain') {
            yorkView = layer.getBounds();
            console.log(yorkView)
        } else if (p == 'Arroyo Grande Valley') {
            arroyoView = layer.getBounds();
            console.log(arroyoView)
        }
    }); // end each layer
}

function sideBarFoot(dataLayer) {
    dataLayer.eachLayer(function (layer) {
        countyView = layer.getBounds();
    }); // end each layer
}

$("#btnEV").click(function () {
    console.log("btnEV clicked")
    map.fitBounds(ednaView)

    // Leaflet control added to the map
    infoPanel.onAdd = function () {
        var div = L.DomUtil.create('div', 'edna');

        // insert text
        div.innerHTML = `<div id='infoPanel'><h3>Edna Valley</h3><p>infoEdna</p></div>`;

        // return the div element
        return div;
    };
    // add the div to the map
    infoPanel.addTo(map);
});

$("#btnPR").click(function () {
    console.log("btnPR clicked")
    map.fitBounds(pasoView)
        // Leaflet control added to the map
        infoPanel.onAdd = function () {
            var div = L.DomUtil.create('div', 'paso');  
            // insert text
            div.innerHTML = `<div id='infoPanel'>
            <h3>Paso Robles</h3>
            <p>Just six miles from the Pacific Ocean, the appellation lies on the inland side of the Santa Lucia coastal mountains in San Luis Obispo County, and roughly forms a rectangle 35 miles from east to west, and 25 miles from north to south. It extends from the Monterey County border to the north, to the Cuesta Grade below Santa Margarita to the south, and from the Santa Lucia Mountains to the west, to the Cholame Hills to the east.</p>
            <p>Source: Paso Robles Wine Country Alliance</p>
            </div>`;
    
            // return the div element
            return div;
        };
        // add the div to the map
        infoPanel.addTo(map);
});

$("#btnYM").click(function () {
    console.log("btnYM clicked")
    map.fitBounds(yorkView)
        // Leaflet control added to the map
        infoPanel.onAdd = function () {
            var div = L.DomUtil.create('div', 'york');   
            // insert text
            div.innerHTML = `<div id='infoPanel'><h3>York Mountain</h3><p>One of California’s smallest AVAs, York Mountain nestles among oak trees on the eastern slopes of the Santa Lucia Mountains, west of the large Paso Robles AVA. The region, only seven miles from the Pacific Ocean, is significantly cooler and wetter than neighboring Paso Robles. Vineyards in the appellation are situated at an average of 1,500 feet and benefit from low-vigor soil, steep slopes, long sunshine hours and cool coastal breezes.</p><p>Source Appellation America</p></div>`;
    
            // return the div element
            return div;
        };
        // add div to the map
        infoPanel.addTo(map);
});

$("#btnAGV").click(function () {
    console.log("btnAGV clicked")
    map.fitBounds(arroyoView)
        // Leaflet control added to the map
        infoPanel.onAdd = function () {
            var div = L.DomUtil.create('div', 'arroyo');
            // insert text
            div.innerHTML = `<div id='infoPanel'><h3>Arroyo Grande Valley</h3><p>This region is a 16-mile-long winding valley in an east-northeast orientation cooled by coastal fog and Pacific breezes creating a rich diversity of microclimates.</p>

            <p>Source Appellation America</p></div>`;
    
            // return the div element
            return div;
        };
        // add the div to the map
        infoPanel.addTo(map);
});

$("#btnCOU").click(function () {
    console.log("btnCOU clicked")
    map.fitBounds(countyView)
        // Leaflet control added to the map
        infoPanel.onAdd = function () {
            var div = L.DomUtil.create('div', 'slo');
            // insert text
            div.innerHTML = ``;
    
            // return the div element
            return div;
        };
        // add the div to the map
        infoPanel.addTo(map);
});

