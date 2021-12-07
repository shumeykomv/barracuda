var logo = document.querySelector(" #logo ");
var logoImage = document.querySelector(" #logo img");
var windW = window.innerWidth;
if (windW != 1920 && windW != 1280 && windW != 1013 && windW != 992 && windW != 768) {
    if (logoImage != null) {
        var width = (logo.clientWidth) + "px";
        document.querySelector(" #logo img").style.width = width;
    }
}

function logoSize() {
    var logo = document.querySelector(" #logo ");
    var logoImage = document.querySelector(" #logo img");
    var windW = window.innerWidth;
    if (logoImage != null) {
        var width = (logo.clientWidth) + "px";
        document.querySelector(" #logo img").style.width = width;

    }
}