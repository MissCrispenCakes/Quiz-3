window.onload = () => {
     let places = staticLoadPlaces(); //sets places using staticLoadPlaces() function
     renderPlaces(places); //runs renderPlaces function by sending "places"
};

function staticLoadPlaces() { // a function that loads a place based on longitude and latitude
    return [
        {
            name: 'MyModel', // sets model name
            location: {
                lat: <your-latitude> //</your-latitude>, //Gets your latitude
                lng: <your-longitude>//</your-longitude> //Gets your longitude
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat; //sets latitude
        let longitude = place.location.lng; //sets longitude

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}