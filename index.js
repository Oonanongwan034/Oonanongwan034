const geolocator = new require('geolocator');
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumWait: 10000,
  desiredAccuracy: 30,
  fallbackToIP: true,
  addressLookup: true
};

function getLocation() {
  geolocator.locate(options, (err, location) => {
    if (err) return console.log(err);

    console.log(`Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`);

    setTimeout(getLocation, 60000); // ตั้งเวลาให้ทำงานทุก 60 วินาที
  });
}

getLocation();
