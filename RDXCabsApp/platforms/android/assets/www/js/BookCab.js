var map;
var marker;
var infoWindow;

function initMap() {

	var options = {
		center : new google.maps.LatLng(12.8700, 74.8800),
		zoom : 15
	}
	
	map = new google.maps.Map(document.getElementById('map'), options);

	google.maps.event.addListener(map, 'click', function(event) {
		if (marker != null) {
			marker.setMap(null);
		}

		marker = new google.maps.Marker({
			position : event.latLng,
			map : map
		});

		marker.setMap(map);
		marker.addListener('click', function() {
			
		});

	});
	
}
