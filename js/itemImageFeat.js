var row = document.querySelectorAll(" .items-row");
for (var r = 0; r < row.length; r++) {
    var image = row[r].querySelectorAll(" .item .content-item .item-image a img"); //Задает список img элементов в отдельной строке
    for (var e = 0; e < image.length; e++) { //Пересчет img элементов в списке
        image[e].classList.add("img-" + [r]);
    }
}

var windW = window.innerWidth;
if (windW > 1012) {
    var contentItemsLeading = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .item-image");
    for (var cil = 0; cil < contentItemsLeading.length; cil++) {
        var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
        for (var img = 0; img < Imag.length; img++) {
            Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
            var width = (Imag[img].clientWidth);
            Imag[img].style.height = width / 16 * 9 + "px";
        }
    }
    var row = document.querySelectorAll(" .blog-featured .items-row ");
    for (var r = 0; r < row.length; r++) {
        var contentItemsRow = row[r].querySelectorAll(" .item .content-item .item-image");
        for (var cir = 0; cir < contentItemsRow.length; cir++) {
            let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
            let Imag = contentItemsRow[cir].querySelectorAll(" .item-image a .img-" + [r]);
            for (var img = 0; img < Imag.length; img++) {
                if (Imag.length > 0) {
                    Imag[img].style.width = contentItemsRowWidth + 'px';
                    Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';

                }
            }
        }
    }
} else {
    var contentItemsLeading = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .item-image");
    for (var cil = 0; cil < contentItemsLeading.length; cil++) {
        var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
        for (var img = 0; img < Imag.length; img++) {
            Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
            var width = (Imag[img].clientWidth);
            Imag[img].style.height = width / 16 * 9 + "px";
        }
    }
    var contentItemsRow = document.querySelectorAll(" .blog-featured .items-row .item .content-item .item-image");
    for (var cir = 0; cir < contentItemsRow.length; cir++) {
        let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
        let Imag = contentItemsRow[cir].querySelectorAll(" a img");
        for (var img = 0; img < Imag.length; img++) {
            if (Imag.length > 0) {
                Imag[img].style.width = contentItemsRowWidth + 'px';
                Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';
            }
        }
    }
}


function itemImageFeat() {
    var windW = window.innerWidth;
    if (windW > 1012) {
        var contentItemsLeading = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .item-image");
        for (var cil = 0; cil < contentItemsLeading.length; cil++) {
            var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
            for (var img = 0; img < Imag.length; img++) {
                Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
                var width = (Imag[img].clientWidth);
                Imag[img].style.height = width / 16 * 9 + "px";
            }
        }
        var row = document.querySelectorAll(" .blog-featured .items-row ");
        for (var r = 0; r < row.length; r++) {
            var contentItemsRow = row[r].querySelectorAll(" .item .content-item .item-image");
            for (var cir = 0; cir < contentItemsRow.length; cir++) {
                let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
                let Imag = contentItemsRow[cir].querySelectorAll(" a .img-" + [r]);
                for (var img = 0; img < Imag.length; img++) {
                    if (Imag.length > 0) {
                        Imag[img].style.width = contentItemsRowWidth + 'px';
                        Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';

                    }
                }
            }
        }
    } else {
        var contentItemsLeading = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .item-image");
        for (var cil = 0; cil < contentItemsLeading.length; cil++) {
            var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
            for (var img = 0; img < Imag.length; img++) {
                Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
                var width = (Imag[img].clientWidth);
                Imag[img].style.height = width / 16 * 9 + "px";
            }
        }
        var contentItemsRow = document.querySelectorAll(" .blog-featured .items-row .item .content-item .item-image");
        for (var cir = 0; cir < contentItemsRow.length; cir++) {
            let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
            let Imag = contentItemsRow[cir].querySelectorAll(" a img");
            for (var img = 0; img < Imag.length; img++) {
                if (Imag.length > 0) {
                    Imag[img].style.width = contentItemsRowWidth + 'px';
                    Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';
                }
            }
        }
    }
}