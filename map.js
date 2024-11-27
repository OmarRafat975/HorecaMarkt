/// MAP

var map = L.map('map').setView([52.3829933, 4.7402684], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  zoomControl: false,
  attributionControl: false,
  boxZoom: false,
  dragging: false,
}).addTo(map);

L.marker([52.3829933, 4.7402684])
  .addTo(map)
  .bindPopup('Our Location')
  .openPopup();
