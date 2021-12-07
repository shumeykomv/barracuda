var windW = window.innerWidth;
if (windW > 1012) {
    var contentArticleBody = document.querySelectorAll(" .item-page .articleBody");
    for (var cab = 0; cab < contentArticleBody.length; cab++) {
        var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
        let tagP = contentArticleBody[cab].querySelectorAll("p");
        for (let p = 0; p < tagP.length; p++) {

            let tagA = tagP[p].querySelectorAll(" a ");
            for (let a = 0; a < tagA.length; a++) {
                if (tagA.length > 0) {
                    let Imag = tagA[a].querySelectorAll("img");
                    for (var img = 0; img < Imag.length; img++) {
                        if (Imag.length = 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentArticleBodyWidth / 2 - 1) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentArticleBodyWidth / 2 - 1) + "px";
                        }
                        if (Imag.length > 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "none";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                            tagP[p].style.display = "inline-flex";
                            tagP[p].style.marginBottom = "0";
                        }
                    }
                    let Iframe = tagA[a].querySelectorAll("iframe");
                    for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                        if (Iframe.length = 1) {
                            Iframe[ifrm].style.display = "block";
                            Iframe[ifrm].style.width = (contentArticleBodyWidth / 2) + "px";
                            Iframe[ifrm].style.height = "auto";
                            Iframe[ifrm].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentArticleBodyWidth / 2) + "px";
                        }
                        if (Iframe.length > 1) {
                            Iframe[ifrm].style.display = "block";
                            Iframe[ifrm].style.width = (contentArticleBodyWidth / Iframe.length) + "px";
                            Iframe[ifrm].style.height = "auto";
                            Iframe[ifrm].style.float = "none";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                            tagP[p].style.display = "inline-flex";
                        }
                    }
                }
            }
            let Imag = tagP[p].querySelectorAll("img");
            for (var img = 0; img < Imag.length; img++) {
                if (Imag.length = 1) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentArticleBodyWidth / 2 - 1) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "left";
                }
                if (Imag.length > 1) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "none";
                    tagP[p].style.display = "inline-flex";
                    tagP[p].style.marginBottom = "0";
                }
            }
            let Iframe = tagP[p].querySelectorAll("iframe");
            for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                if (Iframe.length = 1) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = contentArticleBodyWidth + "px";
                    Iframe[ifrm].style.height = contentArticleBodyWidth / 16 * 9 + "px";
                    Iframe[ifrm].style.float = "left";
                }
                if (Iframe.length > 1) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = (contentArticleBodyWidth / Iframe.length) + "px";
                    Iframe[ifrm].style.height = (contentArticleBodyWidth / Iframe.length) / 16 * 9 + "px";
                    Iframe[ifrm].style.float = "none";
                    tagP[p].style.display = "inline-flex";
                }
            }
        }
    }
} else {
    var contentArticleBody = document.querySelectorAll(" .item-page .articleBody");
    for (var cab = 0; cab < contentArticleBody.length; cab++) {
        var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
        var tagP = contentArticleBody[cab].querySelectorAll("p")
        for (var p = 0; p < tagP.length; p++) {
            var Imag = tagP[p].querySelectorAll("img")
            for (var img = 0; img < Imag.length; img++) {
                if (Imag.length > 0) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentArticleBodyWidth) + "px";
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
                    Iframe[ifrm].style.width = contentArticleBodyWidth + "px";
                    Iframe[ifrm].style.height = contentArticleBodyWidth / 16 * 9 + "px";
                    Iframe[ifrm].style.float = "none";
                    tagP[p].style.display = "contents";
                }
            }
        }
    }
}



function itemContentImagePage() {
    var windW = window.innerWidth;
    if (windW > 1012) {
        var contentArticleBody = document.querySelectorAll(" .item-page .articleBody");
        for (var cab = 0; cab < contentArticleBody.length; cab++) {
            var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
            let tagP = contentArticleBody[cab].querySelectorAll("p");
            for (let p = 0; p < tagP.length; p++) {

                let tagA = tagP[p].querySelectorAll(" a ");
                for (let a = 0; a < tagA.length; a++) {
                    if (tagA.length > 0) {
                        let Imag = tagA[a].querySelectorAll("img");
                        for (var img = 0; img < Imag.length; img++) {
                            if (Imag.length = 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentArticleBodyWidth / 2 - 1) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentArticleBodyWidth / 2 - 1) + "px";
                            }
                            if (Imag.length > 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "none";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                                tagP[p].style.display = "inline-flex";
                                tagP[p].style.marginBottom = "0";
                            }
                        }
                        let Iframe = tagA[a].querySelectorAll("iframe");
                        for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                            if (Iframe.length = 1) {
                                Iframe[ifrm].style.display = "block";
                                Iframe[ifrm].style.width = (contentArticleBodyWidth / 2) + "px";
                                Iframe[ifrm].style.height = "auto";
                                Iframe[ifrm].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentArticleBodyWidth / 2) + "px";
                            }
                            if (Iframe.length > 1) {
                                Iframe[ifrm].style.display = "block";
                                Iframe[ifrm].style.width = (contentArticleBodyWidth / Iframe.length) + "px";
                                Iframe[ifrm].style.height = "auto";
                                Iframe[ifrm].style.float = "none";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                                tagP[p].style.display = "inline-flex";
                            }
                        }
                    }
                }
                let Imag = tagP[p].querySelectorAll("img");
                for (var img = 0; img < Imag.length; img++) {
                    if (Imag.length = 1) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentArticleBodyWidth / 2 - 1) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "left";
                    }
                    if (Imag.length > 1) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "none";
                        tagP[p].style.display = "inline-flex";
                        tagP[p].style.marginBottom = "0";
                    }
                }
                let Iframe = tagP[p].querySelectorAll("iframe");
                for (var ifrm = 0; ifrm < Iframe.length; ifrm++) {
                    if (Iframe.length = 1) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = contentArticleBodyWidth + "px";
                        Iframe[ifrm].style.height = contentArticleBodyWidth / 16 * 9 + "px";
                        Iframe[ifrm].style.float = "left";
                    }
                    if (Iframe.length > 1) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = (contentArticleBodyWidth / Iframe.length) + "px";
                        Iframe[ifrm].style.height = (contentArticleBodyWidth / 2) / 16 * 9 + "px";
                        Iframe[ifrm].style.float = "none";
                        tagP[p].style.display = "inline-flex";
                    }
                }
            }
        }
    } else {
        var contentArticleBody = document.querySelectorAll(" .item-page .articleBody");
        for (var cab = 0; cab < contentArticleBody.length; cab++) {
            var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
            var tagP = contentArticleBody[cab].querySelectorAll("p")
            for (var p = 0; p < tagP.length; p++) {
                var Imag = tagP[p].querySelectorAll("img")
                for (var img = 0; img < Imag.length; img++) {
                    if (Imag.length > 0) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentArticleBodyWidth) + "px";
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
                        Iframe[ifrm].style.width = contentArticleBodyWidth + "px";
                        Iframe[ifrm].style.height = contentArticleBodyWidth / 16 * 9 + "px";
                        Iframe[ifrm].style.float = "none";
                        tagP[p].style.display = "contents";
                    }
                }
            }
        }
    }
}