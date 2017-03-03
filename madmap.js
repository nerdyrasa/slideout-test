/**
 * Created by rasai_000 on 3/3/2017.
 */
var map;
var markers = [];

function initMap() {
//        var uluru = {lat: 42.497, lng: -87.846};


  // wiStateCapitol
  var madisonCenter = {lat: 43.069352, lng: -89.396601};

  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 16,
    center: madisonCenter
  });

//        var locations = [
//            {title: 'Pleasant Prairie Historical Society', location: {lat: 42.507442, lng: -87.852897}},
//            {title: 'Prairie Lane Elementary School', location: {lat: 42.519465, lng: -87.862587}}
//        ];

  var locations =

    [
      {
        "type": "food",
        "name": "Graze",
        "location": {
          "lat": 43.075617,
          "lng": -89.382206
        },
        "yelp_business_id": "graze-madison"
      },
      {
        "type": "fun",
        "name": "Madison Children's Museum",
        "location": {
          "lat": 43.076674,
          "lng": -89.384438
        },
        "yelp_business_id": "madison-childrens-museum-madison"
      },
      {
        "type": "stadium",
        "name": "Camp Randall Stadium",
        "location": {
          "lat": 43.069897,
          "lng": -89.412772
        },
        "yelp_business_id": "camp-randall-stadium-madison-2"
      }
    ];

  var largeInfoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  // use the location array to create an array of markers on initialize

  for (var i = 0; i < locations.length; i++) {
    var position = locations[i].location;
    var title = locations[i].name;

    var marker = new google.maps.Marker({
      //map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });

    markers.push(marker);

    //bounds.extend(marker.position);

    marker.addListener('click', function () {
      populateInfoWindow(this, largeInfoWindow);

      // open the list
      // TODO: highlight the corresponding list item

      document.getElementById('left-nav').click();

    });

    showListings();


  }


  //map.fitBounds(bounds);

  //document.getElementById('show-listings').addEventListener('click', showListings);
  //document.getElementById('hide-listings').addEventListener('click', hideListings);
  //document.getElementById('show-listings').click();
}


function showListings() {
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

function hideListings() {
  for (var i = 0; i < markers.length; i++) {

    // This will hide the markers, not delete them
    markers[i].setMap(null);

  }
}


function populateInfoWindow(marker, infowindow) {
  // Check to make sure the info window is not already opened on this marker
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    // make sure the marker property is cleared if the infowindow is closed
    infowindow.addListener('closeclick', function () {
      //infoWindow.setMap(null);
      infowindow.setMarker = null;
      infowindow.marker = null;
    })
  }
}