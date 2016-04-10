var map;
var marker;
var infoWindow;
var startPosLat;
var startPosLng;
var destPosLat;
var destPosLng;
var destPos;
var startPos;

function initSource() {

	var options = {
		center : new google.maps.LatLng(12.8700, 74.8800),
		zoom : 15
	}
	
	map = new google.maps.Map(document.getElementById('map'), options);

	google.maps.event.addListener(map, 'click', function(event) {
		if (marker != null) {
			marker.setMap(null);
		}

		startPos = event.latLng;
		startPosLat = event.latLng.lat();
		startPosLng = event.latLng.lng();
		
		marker = new google.maps.Marker({
			position : event.latLng,
			map : map
		});

		marker.setMap(map);
		marker.addListener('click', function() {
			
		});

	});
	
}

function initDestination() {

	var options = {
		center : new google.maps.LatLng(12.8700, 74.8800),
		zoom : 15
	}
	
	map = new google.maps.Map(document.getElementById('map'), options);

	google.maps.event.addListener(map, 'click', function(event) {
		if (marker != null) {
			marker.setMap(null);
		}

		destPos = event.latLng;
		destPosLat = event.latLng.lat();
		destPosLng = event.latLng.lng();
		
		marker = new google.maps.Marker({
			position : event.latLng,
			map : map
		});

		marker.setMap(map);
		marker.addListener('click', function() {
			
		});

	});
	
}

$(document).ready(function(){
	$("#proceed").click(function(){
		if(startPos == null) {
			alert("Please enter a Pick Up point");
		} else {
			localStorage.startPointLat = startPosLat;
			localStorage.startPointLng = startPosLng;
			window.location.href="EnterDest.html";
		}
	});
	
	$("#destination").click(function(){
		if(destPos == null) {
			alert("Please enter a Drop point");
		} else {
			calculateDistance();
		}
		
	});
})

function calculateDistance() {
	var source = {lat:Number(localStorage.startPointLat), lng:Number(localStorage.startPointLng)};
    var destination = {lat:Number(destPosLat), lng:Number(destPosLng)};

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
    	origins: [source],
    	destinations: [destination],
    	travelMode: google.maps.TravelMode.DRIVING,
    	unitSystem: google.maps.UnitSystem.METRIC,
    	avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
    if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
        var distance = response.rows[0].elements[0].distance.text;
        var duration = response.rows[0].elements[0].duration.text;
        alert("Total distance : " + distance);        
    	} else {
    		alert("Unable to find the distance via road.");
    	}
    });
}