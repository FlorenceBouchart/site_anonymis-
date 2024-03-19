
$(function () {

    function initMap() {

        var location = new google.maps.LatLng(48.860252307562426, 2.348536661376121);

        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = '../pictures/marker_icone.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h3>Cabinet</h3>' +
                '<div class="info-content">' +
                '<p>Vous pouvez venir nous rencontrer ici</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});