'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYTEwMjciLCJhIjoiY2tiMTU2c213MGdjZDJ6bXVhMGw0enF5aiJ9.PlYg3JKC4gxbYJWlqSvibw'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/anna1027/ckb1hemt500ay1jp1khrdsy12',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})






