var MarkerAnnotation = mapkit.MarkerAnnotation,
    clickAnnotation;
var ryo = new mapkit.Coordinate(37.616934, -122.383790);

mapkit.init({
    authorizationCallback: function (done) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/services/jwt");
        xhr.addEventListener("load", function () {
            done(this.responseText);
        });
        xhr.send();
    }
});
var map = new mapkit.Map("map");

// Setting properties on creation:
var ryoAnnotation = new MarkerAnnotation(ryo, { color: "#969696", title: "渓水寮", glyphText: "🏠" });

// Add and show both annotations on the map
map.showItems([ryoAnnotation]);