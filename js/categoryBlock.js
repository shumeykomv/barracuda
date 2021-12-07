var windW = window.innerWidth;
if (windW > 1012) {
    var catChildren = document.querySelectorAll(" .cat");
    for (var c = 0; c < catChildren.length; c++) {
        catChildren[c].style.display = "block";
        catChildren[c].style.width = "-moz-available";
        catChildren[c].style.width = "-webkit-fill-available";
        var catChildDesc = catChildren[c].querySelectorAll(".category-desc");
        for (var d = 0; d < catChildDesc.length; d++) {
            var catChildDescWidth = catChildDesc[d].clientWidth;
            catChildDesc[d].style.display = "block";
            catChildDesc[d].style.width = "-moz-available";
            catChildDesc[d].style.width = "-webkit-fill-available";
            catChildDescTagP = catChildDesc[d].querySelectorAll("p")
            for (var p = 0; p < catChildDescTagP.length; p++) {
                if (catChildDescTagP.length > 0){
                    catChildDescTagP[p].style.display = "inline-flex";

                    //далее установка размера изображений

                    var ImgDesc = catChildDescTagP[p].querySelectorAll("img");
                    for (var img = 0; img < ImgDesc.length; img++) {
                        if (ImgDesc.length > 0) {
                            ImgDesc[img].style.display = "block";
                            ImgDesc[img].style.width = (catChildDescWidth / ImgDesc.length) + "px";

                        }
                    }
                }
            }
        }
    }
}
else {
    var catChildren = document.querySelectorAll(" .cat");
    for (var c = 0; c < catChildren.length; c++) {
        catChildren[c].style.display = "block";
        catChildren[c].style.width = "-moz-available";
        catChildren[c].style.width = "-webkit-fill-available";
        var catChildDesc = catChildren[c].querySelectorAll(".category-desc");
        for (var d = 0; d < catChildDesc.length; d++) {
            var catChildDescWidth = catChildDesc[d].clientWidth;
            catChildDesc[d].style.display = "block";
            catChildDesc[d].style.width = "-moz-available";
            catChildDesc[d].style.width = "-webkit-fill-available";
            catChildDescTagP = catChildDesc[d].querySelectorAll("p")
            for (var p = 0; p < catChildDescTagP.length; p++) {
                if (catChildDescTagP.length > 0){
                    catChildDescTagP[p].style.display = "block";

                    //далее установка размера изображений

                    var ImgDesc = catChildDescTagP[p].querySelectorAll("img");
                    for (var img = 0; img < ImgDesc.length; img++) {
                        if (ImgDesc.length > 0) {
                            ImgDesc[img].style.display = "block";
                            ImgDesc[img].style.width = (catChildDescWidth) + "px";

                        }
                    }
                }
            }
        }
    }
}

function catChild() {
    var windW = window.innerWidth;
    if (windW > 1012) {
        var catChildren = document.querySelectorAll(" .cat");
        for (var c = 0; c < catChildren.length; c++) {
            catChildren[c].style.display = "block";
            catChildren[c].style.width = "-moz-available";
            catChildren[c].style.width = "-webkit-fill-available";
            var catChildDesc = catChildren[c].querySelectorAll(".category-desc");
            for (var d = 0; d < catChildDesc.length; d++) {
                var catChildDescWidth = catChildDesc[d].clientWidth;
                catChildDesc[d].style.display = "block";
                catChildDesc[d].style.width = "-moz-available";
                catChildDesc[d].style.width = "-webkit-fill-available";
                catChildDescTagP = catChildDesc[d].querySelectorAll("p")
                for (var p = 0; p < catChildDescTagP.length; p++) {
                    if (catChildDescTagP.length > 0) {
                        catChildDescTagP[p].style.display = "inline-flex";


                        //далее установка размера изображений

                        var ImgDesc = catChildDescTagP[p].querySelectorAll("img");
                        for (var img = 0; img < ImgDesc.length; img++) {
                            if (ImgDesc.length > 0) {
                                ImgDesc[img].style.display = "block";
                                ImgDesc[img].style.width = (catChildDescWidth / ImgDesc.length) + "px";

                            }
                        }
                    }
                }
            }
        }
    } else {
        var catChildren = document.querySelectorAll(" .cat");
        for (var c = 0; c < catChildren.length; c++) {
            catChildren[c].style.display = "block";
            catChildren[c].style.width = "-moz-available";
            catChildren[c].style.width = "-webkit-fill-available";
            var catChildDesc = catChildren[c].querySelectorAll(".category-desc");
            for (var d = 0; d < catChildDesc.length; d++) {
                var catChildDescWidth = catChildDesc[d].clientWidth;
                catChildDesc[d].style.display = "block";
                catChildDesc[d].style.width = "-moz-available";
                catChildDesc[d].style.width = "-webkit-fill-available";
                catChildDescTagP = catChildDesc[d].querySelectorAll("p")
                for (var p = 0; p < catChildDescTagP.length; p++) {
                    if (catChildDescTagP.length > 0) {
                        catChildDescTagP[p].style.display = "block";


                        //далее установка размера изображений

                        var ImgDesc = catChildDescTagP[p].querySelectorAll("img");
                        for (var img = 0; img < ImgDesc.length; img++) {
                            if (ImgDesc.length > 0) {
                                ImgDesc[img].style.display = "block";
                                ImgDesc[img].style.width = (catChildDescWidth) + "px";

                            }
                        }
                    }
                }
            }
        }
    }
}