const apiKey = 'pk.eyJ1IjoiZ2lvdmFubmlhbmRyIiwiYSI6ImNsMWtucG02ZDAyNTIzaW8zeWg1aG5qbmwifQ.yOWlVopRvptHXp4Kp-3v4A'

const map = L.map('map', { zoomControl:false, attributionControl:false }).setView([53.346, -6.254], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    
//Bbox parament limits results to only Dublin using min and max lati and long
    bbox: [-6.543618876090989, 53.222563956123736, -6.029960581107389, 53.63696060258761],
    maxZoom: 18,
    id: 'giovanniandr/cl2gbpvbt003214kskxixuz4y',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);




//Read csv
omnivore.csv('/workspace/DataPrediction/Project/static/listings.csv').addTo(map);

//Get latitude and longitude from listings.csv
const markers = L.marker([53.29178, -6.25792]).addTo(map);

//Message
let template = `

<p> Cosy comfortable Irish cottage twin </p>
<p> Room type: Private Room </p>
<p> Neighbourhood: Dn Laoghaire-Rathdown </p>
`


// Read csv and get property name for each property
markers.bindPopup(template);











