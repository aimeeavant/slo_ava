/* 
FUNCTION:  
PURPOSE:  
CALLED IN:  	
CALLED IN:  
CALLS TO:  
CALLS TO:  
TAKES:  
RETURNS:  
*/



// Sidebar functions --------------------------------------------
$("#btnLocate").click(function(){
    map.locate();
});
 
        //Locate Event handler 
        map.on('locationfound', function(e) {
            console.log(e);
            if (mrkCurrentLocation) {
                mrkCurrentLocation.remove();
            }
            mrkCurrentLocation = L.circle(e.latlng, {radius:e.accuracy/2}).addTo(map);
            map.setView(e.latlng, 14);
        }); //end of event handler 

        //Locate Event handler 
        map.on('locationerror', function(e){
            alert("No location");
            console.log(e);
        }); //end of event handler 
    
$("#btnSLO").click(function(){
    map.setView([35.28105, -120.66181], 14);
})

$("#btnYork").click(function(){
    map.setView([35.552898586492105, -120.82660675048827],14);
})

$("#btnGeneseo").click(function(geoJson){
    map.fitBounds(geoJson.getBounds);
})


// Zoom Output Information    
map.on('zoomend', function(){
   // $("#zoom-level").empty();
    $("#zoom-level").html(map.getZoom());
});
    

//map.on('zoomend', function(){
//    $("#zoom-level").html(map.getZoom());
//});
    
map.on('moveend', function(){
    $("#map-center").html(LatLngToArrayString(map.getCenter()));
});
                
map.on('mousemove', function(e){
    $("#mouse-location").html(LatLngToArrayString(e.latlng));
});
    
function LatLngToArrayString(ll) {
    //console.log(ll);
    return "["+ll.lat.toFixed(5)+", "+ll.lng.toFixed(5)+"]";
}    