// Questions Array
const questions = [
    { question: 'Enter Your First Name' },
    { question: 'Enter Your Last Name' },
    { question: 'Enter Your Email', pattern: /\S+@\S+\.\S+/ },
    // { question: 'Create A Password', type: 'password' },
    { question: 'Message '}
  ];

  // Transition Times
  const shakeTime = 100; // Shake Transition Time
  const switchTime = 200; // Transition Between Questions

  // Init Position At First Question
  let position = 0;

  // Init DOM Elements
  const formBox = document.querySelector('#form-box');
  const nextBtn = document.querySelector('#next-btn');
  const prevBtn = document.querySelector('#prev-btn');
  const inputGroup = document.querySelector('#input-group');
  const inputField = document.querySelector('#input-field');
  const inputLabel = document.querySelector('#input-label');
  const inputProgress = document.querySelector('#input-progress');
  const progress = document.querySelector('#progress-bar');

  // EVENTS

  // Get Question On DOM Load
  document.addEventListener('DOMContentLoaded', getQuestion);

  // Next Button Click
  nextBtn.addEventListener('click', validate);

  // Input Field Enter Click
  inputField.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
      validate();
    }
  });

  // FUNCTIONS

  // Get Question From Array & Add To Markup
  function getQuestion() {
    // Get Current Question
    inputLabel.innerHTML = questions[position].question;
    // Get Current Type
    inputField.type = questions[position].type || 'text';
    // Get Current Answer
    inputField.value = questions[position].answer || '';
    // Focus On Element
    inputField.focus();

    // Set Progress Bar Width - Variable to the questions length
    progress.style.width = (position * 100) / questions.length + '%';

    // Add User Icon OR Back Arrow Depending On Question
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    showQuestion();
  }

  // Display Question To User
  function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
  }

  // Hide Question From User
  function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
  }

  // Transform To Create Shake Motion
  function transform(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Validate Field
  function validate() {
    // Make Sure Pattern Matches If There Is One
    if (!inputField.value.match(questions[position].pattern || /.+/)) {
      inputFail();
    } else {
      inputPass();
    }
  }

  // Field Input Fail
  function inputFail() {
    formBox.className = 'error';
    // Repeat Shake Motion -  Set i to number of shakes
    for (let i = 0; i < 6; i++) {
      setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
      setTimeout(transform, shakeTime * 6, 0, 0);
      inputField.focus();
    }
  }

  // Field Input Passed
  function inputPass() {
    formBox.className = '';
    setTimeout(transform, shakeTime * 0, 0, 10);
    setTimeout(transform, shakeTime * 1, 0, 0);

    // Store Answer In Array
    questions[position].answer = inputField.value;

    // Increment Position
    position++;

    // If New Question, Hide Current and Get Next
    if (questions[position]) {
      hideQuestion();
      getQuestion();
    } else {
      // Remove If No More Questions
      hideQuestion();
      formBox.className = 'close';
      progress.style.width = '100%';

      // Form Complete
      formComplete();
    }
  }

  // All Fields Complete - Show h1 end
  function formComplete() {
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(
      document.createTextNode(
        `Thanks ${
          questions[0].answer
        } your message has been sent`
      )
    );
    setTimeout(() => {
      formBox.parentElement.appendChild(h1);
      setTimeout(() => (h1.style.opacity = 1), 50);
    }, 1000);
  }


  //map

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
        url: "logo/Klogo.png", // url

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
