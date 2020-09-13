map.attributionControl.addAttribution('Made using Leaflet and Mapbox');


// from https://leafletjs.com/examples/choropleth/

// control that shows state info on hover
	var info = L.control();


/*	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>AVA</h4>' +  
			'<em>' + props.name +'</em>';
	};

	info.addTo(map);*/

/*function getColorByName(name) {
         console.log(name);
      if (name = "York Mountain") {
        return {
          "#800026"
        }; 
      }
      else if (name = "Templeton Gap District") {
        return {
          "#FD8D3C"
        };
      } else {
        return {
          "#FFEDA0"
        }
      }
    }

	// get color depending name
	function getColor(d) {
		return d = "York Mountain" ? '#800026' :
				d = "Templeton Gap District"  ? '#FD8D3C' :
				d = "greeke"  ? '#E31A1C' :
				d = "greekf"  ? '#FC4E2A' :
				d = "greekfr"   ? '#FD8D3C' :
				d = "greekfdw"   ? '#FE024C' :
				d = "ccc"   ? '#FE7976' :
							'#FFEDA0';
	}
	*/

	function styleY(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.2,
			fillColor: '#800026'
		};
	}
	function styleT(feature) {
        console.log(feature.properties.name);
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.2,
			fillColor: '#FD8D3C'
		};
	}

// adding hover interaction
// event listener for layer mouseover event 
// gets access to the layer that was hovered through e.target
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    //info.update(layer.feature.properties);
}

var geojson;

//The handy geojson.resetStyle method will reset the layer style to its default state defined by our style function   
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    //info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.bindPopup('<h5>'+feature.properties.name+'</h5>'),
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}


var geojson = L.geoJson(YorkMountain, {
        onEachFeature: onEachFeature,
        style: styleY
	    }).addTo(map);
        
var geojson = L.geoJson(TempletonGapDistrict, {
		  style: styleT,
          onEachFeature: onEachFeature,
	    }).addTo(map);

var geojson = L.geoJson(Estrella, {
        onEachFeature: onEachFeature,
        style: styleY
	    }).addTo(map);
        
var geojson = L.geoJson(Gene, {
		  style: styleT,
          onEachFeature: onEachFeature,
	    }).addTo(map);






var popup = L.popup();

function onMapClick(e) {
  console.log(e); 
    console.log(e.latlng); 
        console.log(e.lat);     
    console.log(e.lng); 
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    
    map.setView([lat, lng], 19);
	}

	map.on('click', onMapClick);

