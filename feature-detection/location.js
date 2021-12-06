$(document).ready(function () {
    var locationMessage = $("#locationMessage");

    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var longitude = position.coords.longitude;
                var latitude = position.coords.latitude;

                locationMessage.text("Lat: " + latitude + ", Lng: " + longitude);
            },
            function (error) {
                var errorTypes = {
                    0: "Unknown error",
                    1: "Permission denied by user",
                    2: "Position is not available",
                    3: "Request timed out"
                };

                var errorMessage = errorTypes[error.code];

                if (error.code == 0 || error.code == 2) {
                    errorMessage += (": " + error.message);
                }

                locationMessage.text(errorMessage);
            });
    }
    else {
        locationMessage.text("Geolocation support is not available.");
    }
});