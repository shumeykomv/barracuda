var windW = window.innerWidth;
if (windW > 1012) {
    var contentItemsLeadingArea = document.querySelectorAll(" .blog .items-leading .leading .content-item .area-content");
    for (var cila = 0; cila < contentItemsLeadingArea.length; cila++) {
        var contentItemsLeadingAreaWidth = contentItemsLeadingArea[cila].clientWidth;
        let tagP = contentItemsLeadingArea[cila].querySelectorAll("p");
        for (let p = 0; p < tagP.length; p++) {
            let tagA = tagP[p].querySelectorAll(" a ");
            for (let a = 0; a < tagA.length; a++) {
                if (tagA.length > 0) {
                    let Imag = tagA[a].querySelectorAll("img");
                    for (var img = 0; img < Imag.length; img++) {
                        if (Imag.length = 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                        }
                        if (Imag.length > 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "none";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
                            tagP[p].style.display = "inline-flex";
                        }
                    }
                    let Iframe = tagA[a].querySelectorAll("iframe");
                    for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                        if (Iframe.length = 1) {
                            Iframe[ifrm].style.display = "block";
                            Iframe[ifrm].style.width = contentItemsLeadingAreaWidth + "px";
                            Iframe[ifrm].style.height = "auto";
                            Iframe[ifrm].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = contentItemsLeadingAreaWidth + "px";
                        }
                        if (Iframe.length > 1) {
                            Iframe[ifrm].style.display = "block";
                            Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                            Iframe[ifrm].style.height = "auto";
                            Iframe[ifrm].style.float = "none";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                            tagP[p].style.display = "inline-flex";
                        }
                    }
                }
            }
            let Imag = tagP[p].querySelectorAll("img");
            for (var img = 0; img < Imag.length; img++) {
                if (Imag.length = 1) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "left";
                }
                if (Imag.length > 1) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "none";
                    tagP[p].style.display = "inline-flex";
                }
            }
            let Iframe = tagP[p].querySelectorAll("iframe");
            for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                if (Iframe.length = 1) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = contentItemsLeadingAreaWidth + "px";
                    Iframe[ifrm].style.height = contentItemsLeadingAreaWidth / 16 * 9 + "px";
                    Iframe[ifrm].style.float = "left";
                }
                if (Iframe.length > 1) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                    Iframe[ifrm].style.height = (contentItemsLeadingAreaWidth / Iframe.length) / 16 * 9 + "px";
                    Iframe[ifrm].style.float = "none";
                    tagP[p].style.display = "inline-flex";
                }
            }
        }
    }
} else {
    var contentItemsLeadingArea = document.querySelectorAll(" .blog .items-leading .leading .content-item .area-content");
    for (var cila = 0; cila < contentItemsLeadingArea.length; cila++) {
        var contentItemsLeadingAreaWidth = contentItemsLeadingArea[cila].clientWidth;
        let tagP = contentItemsLeadingArea[cila].querySelectorAll("p");
        for (var p = 0; p < tagP.length; p++) {
            var Imag = tagP[p].querySelectorAll("img")
            for (var img = 0; img < Imag.length; img++) {console.log(Imag[img]);
                if (Imag.length > 0) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentItemsLeadingAreaWidth) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "none";
                    tagP[p].style.display = "contents";
                    //var width = (Imag[img].clientWidth);
                    //Imag[img].style.height = width / 16 * 9 + "px";
                }
            }
            let Iframe = tagP[p].querySelectorAll("iframe");
            for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                if (Iframe.length > 0) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = contentItemsLeadingAreaWidth + "px";
                    Iframe[ifrm].style.height = contentItemsLeadingAreaWidth / 16 * 9 + "px";
                    Iframe[ifrm].style.float = "none";
                    tagP[p].style.display = "contents";
                }
            }
        }
    }
}

function itemContentImageBlg() {
    var windW = window.innerWidth;
    if (windW > 1012) {
        var contentItemsLeadingArea = document.querySelectorAll(" .blog .items-leading .leading .content-item .area-content");
        for (var cila = 0; cila < contentItemsLeadingArea.length; cila++) {
            var contentItemsLeadingAreaWidth = contentItemsLeadingArea[cila].clientWidth;
            let tagP = contentItemsLeadingArea[cila].querySelectorAll("p");
            for (let p = 0; p < tagP.length; p++) {
                let tagA = tagP[p].querySelectorAll(" a ");
                for (let a = 0; a < tagA.length; a++) {
                    if (tagA.length > 0) {
                        let Imag = tagA[a].querySelectorAll("img");
                        for (var img = 0; img < Imag.length; img++) {
                            if (Imag.length = 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                            }
                            if (Imag.length > 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "none";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
                                tagP[p].style.display = "inline-flex";
                            }
                        }
                        let Iframe = tagA[a].querySelectorAll("iframe");
                        for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                            if (Iframe.length = 1) {
                                Iframe[ifrm].style.display = "block";
                                Iframe[ifrm].style.width = contentItemsLeadingAreaWidth + "px";
                                Iframe[ifrm].style.height = "auto";
                                Iframe[ifrm].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = contentItemsLeadingAreaWidth + "px";
                            }
                            if (Iframe.length > 1) {
                                Iframe[ifrm].style.display = "block";
                                Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                                Iframe[ifrm].style.height = "auto";
                                Iframe[ifrm].style.float = "none";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                                tagP[p].style.display = "inline-flex";
                            }
                        }
                    }
                }
                let Imag = tagP[p].querySelectorAll("img");
                for (var img = 0; img < Imag.length; img++) {
                    if (Imag.length = 1) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "left";
                    }
                    if (Imag.length > 1) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "none";
                        tagP[p].style.display = "inline-flex";
                    }
                }
                let Iframe = tagP[p].querySelectorAll("iframe");
                for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                    if (Iframe.length = 1) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = contentItemsLeadingAreaWidth + "px";
                        Iframe[ifrm].style.height = contentItemsLeadingAreaWidth / 16 * 9 + "px";
                        Iframe[ifrm].style.float = "left";
                    }
                    if (Iframe.length > 1) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                        Iframe[ifrm].style.height = (contentItemsLeadingAreaWidth / Iframe.length) / 16 * 9 + "px";
                        Iframe[ifrm].style.float = "none";
                        tagP[p].style.display = "inline-flex";
                    }
                }
            }
        }
    } else {
        var contentItemsLeadingArea = document.querySelectorAll(" .blog .items-leading .leading .content-item .area-content");
        for (var cila = 0; cila < contentItemsLeadingArea.length; cila++) {
            var contentItemsLeadingAreaWidth = contentItemsLeadingArea[cila].clientWidth;
            let tagP = contentItemsLeadingArea[cila].querySelectorAll("p");
            for (var p = 0; p < tagP.length; p++) {
                var Imag = tagP[p].querySelectorAll("img")
                for (var img = 0; img < Imag.length; img++) {
                    console.log(Imag[img]);
                    if (Imag.length > 0) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentItemsLeadingAreaWidth) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "none";
                        tagP[p].style.display = "contents";
                        //var width = (Imag[img].clientWidth);
                        //Imag[img].style.height = width / 16 * 9 + "px";
                    }
                }
                let Iframe = tagP[p].querySelectorAll("iframe");
                for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                    if (Iframe.length > 0) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = contentItemsLeadingAreaWidth + "px";
                        Iframe[ifrm].style.height = contentItemsLeadingAreaWidth / 16 * 9 + "px";
                        Iframe[ifrm].style.float = "none";
                        tagP[p].style.display = "contents";
                    }
                }
            }
        }
    }
}