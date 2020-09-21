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

function sideBar(dataLayer) {
    console.log(`I made it out ${dataLayer}`) // show as object object
    console.log(dataLayer)
} 



$("#btnPR").click(function(){
   // fit ava polygon
   map.setView([35.28105, -120.66181], 14);
   //map.fitBounds(geoJson.getBounds);
   // show html with info

   // extract winery data and output
   console.log("paso clicked")
});
 

    