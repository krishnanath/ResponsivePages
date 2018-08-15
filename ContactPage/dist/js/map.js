function initMap(){
    var options={
      zoom:9,
      center:{lat:10.185219,lng:76.507001},
      styles:[
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 111
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#44444"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#444"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#08fdd8"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#00000"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              }
          ]
      }
  ]

        }

    var map = new google.maps.Map(document.getElementById('map'),options);

  //Add marker
  var icon = {
      url: "logo/logo.png", // url

      scaledSize: new google.maps.Size(55, 55), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(18,18), // anchor
   };

  var marker = new google.maps.Marker({
    position:{lat:10.1955, lng:76.4968},
    map:map,
   icon: icon
  });
   // var map = new google.maps.Map(document.getElementById('map'),options);


  // function initialize() {
  //     var mapCanvas = document.getElementById('map');
  //     var marker = {
  //         center: new google.maps.LatLng(10.1955, 76.4968),
  //         zoom: 8,
  //         mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }
  //     var map = new google.maps.Map(mapCanvas, marker)
  //         var marker = new google.maps.Marker({
  //       map:map,
  //       position: map.getCenter(),
  //       icon: {
  //         url: "logo/logo.png",
  //         size: new google.maps.Size(56, 56),
  //         origin: new google.maps.Point(0, 0),
  //         anchor: new google.maps.Point(18, 18),
  //         scaledSize: new google.maps.Size(25,25)
  //       }
  //     });
  // }
  // google.maps.event.addDomListener(window, 'load', initialize);


  var infoWindow = new google.maps.InfoWindow({
    content:'<h1 style="color:#08fdd8;">Malayattoor</h1>'
  });



  marker.addListener('click',function(){
    infoWindow.open(map, marker);
  })

  }
