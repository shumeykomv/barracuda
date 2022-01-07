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


var windW = window.innerWidth;
if (windW >= 1400) {
    var contentItem = document.querySelectorAll(" .content-item");
    for (var c = 0; c < contentItem.length; c++) {
        var lead = document.querySelectorAll(" .leading");
        for (var ln = 0; ln < lead.length; ln++) {
            lead[ln].style.display = "inline-block";
            lead[ln].style.width = "-moz-available";
            lead[ln].style.width = "-webkit-fill-available";
        }
        /*ROW*/
        var row = document.querySelectorAll(" .items-row");
        for (var r = 0; r < row.length; r++) {
            row[r].style.display = "flex";
            /*уровень строк*/
            let itemRow = row[r].getElementsByClassName("item");
            let itemRowWidth = row[r].clientWidth / itemRow.length;
            for (var l = 0; l < itemRow.length; l++) {
                itemRow[l].style.display = "block";
                itemRow[l].style.width = itemRowWidth - (8) + "px";
            }
        }
    }
} else if (windW < 1400 && windW > 1012) {
    var lead = document.querySelectorAll(" .leading");
    for (var ln = 0; ln < lead.length; ln++) {
        lead[ln].style.display = "inline-block";
        lead[ln].style.margin = 4 + "px";
        lead[ln].style.width = "-moz-available";
        lead[ln].style.width = "-webkit-fill-available";
    }
    var row = document.querySelectorAll(" .items-row");
    for (var r = 0; r < row.length; r++) { //Пересчет строк с массиве                      
        row[r].style.display = "flex";
        /*уровень строк*/
        let itemRow = row[r].getElementsByClassName('item');
        let itemRowWidth = row[r].clientWidth / itemRow.length;
        for (var l = 0; l < itemRow.length; l++) {
            if (itemRow.length > 1) {
                itemRow[l].style.display = "block";
                itemRow[l].style.width = itemRowWidth - (8) + "px";
            } else {
                itemRow[l].style.display = "block";
                itemRow[l].style.width = "auto";
            }
        }
    }
} else {
    var lead = document.querySelectorAll(" .leading");
    for (var ln = 0; ln < lead.length; ln++) {
        lead[ln].style.display = "block";
    }
    /*ROW*/
    var row = document.querySelectorAll(" .items-row");
    for (var r = 0; r < row.length; r++) {
        row[r].style.display = "block";
        var item = document.querySelectorAll(" .item ");
        for (var i = 0; i < item.length; i++) {
            item[i].style.display = 'block';
            item[i].style.width = "auto";
        }
    }
}



function featBlock() {
    var windW = window.innerWidth;
    if (windW >= 1400) {
        var contentItem = document.querySelectorAll(" .content-item");
        for (var c = 0; c < contentItem.length; c++) {
            var lead = document.querySelectorAll(" .leading");
            for (var ln = 0; ln < lead.length; ln++) {
                lead[ln].style.display = "inline-block";
                lead[ln].style.width = "-moz-available";
                lead[ln].style.width = "-webkit-fill-available";
            }
            /*ROW*/
            var row = document.querySelectorAll(" .items-row");
            for (var r = 0; r < row.length; r++) {
                row[r].style.display = "flex";
                /*уровень строк*/
                let itemRow = row[r].getElementsByClassName("item");
                let itemRowWidth = row[r].clientWidth / itemRow.length;
                for (var l = 0; l < itemRow.length; l++) {
                    itemRow[l].style.display = "block";
                    itemRow[l].style.width = itemRowWidth - (8) + "px";
                }
            }
        }
    } else if (windW < 1400 && windW > 1012) {
        var lead = document.querySelectorAll(" .leading");
        for (var ln = 0; ln < lead.length; ln++) {
            lead[ln].style.display = "inline-block";
            lead[ln].style.margin = 4 + "px";
            lead[ln].style.width = "-moz-available";
            lead[ln].style.width = "-webkit-fill-available";
        }
        var row = document.querySelectorAll(" .items-row");
        for (var r = 0; r < row.length; r++) { //Пересчет строк с массиве                      
            row[r].style.display = "flex";
            /*уровень строк*/
            let itemRow = row[r].getElementsByClassName('item');
            let itemRowWidth = row[r].clientWidth / itemRow.length;
            for (var l = 0; l < itemRow.length; l++) {
                if (itemRow.length > 1) {
                    itemRow[l].style.display = "block";
                    itemRow[l].style.width = itemRowWidth - (8) + "px";
                } else {
                    itemRow[l].style.display = "block";
                    itemRow[l].style.width = "auto";
                }
            }
        }
    } else {
        var lead = document.querySelectorAll(" .leading");
        for (var ln = 0; ln < lead.length; ln++) {
            lead[ln].style.display = "block";
        }
        /*ROW*/
        var row = document.querySelectorAll(" .items-row");
        for (var r = 0; r < row.length; r++) {
            row[r].style.display = "block";
            var item = document.querySelectorAll(" .item ");
            for (var i = 0; i < item.length; i++) {
                item[i].style.display = 'block';
                item[i].style.width = "auto";
            }
        }
    }
}



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
                            Imag[img].style.width = (contentArticleBodyWidth / 2) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentArticleBodyWidth / 2) + "px";
                        } if (Imag.length > 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "none";
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
                    Imag[img].style.width = (contentArticleBodyWidth / 2) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "left";
                } if (Imag.length > 1) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "none";
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
        }
    }
}



function itemContentImage() {
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
                                Imag[img].style.width = (contentArticleBodyWidth / 2) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentArticleBodyWidth / 2) + "px";
                            } if (Imag.length > 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "none";
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
                        Imag[img].style.width = (contentArticleBodyWidth / 2) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "left";
                    } if (Imag.length > 1) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentArticleBodyWidth / Imag.length) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "none";
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
            }
        }
    }
}



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


var windW = window.innerWidth;
if (windW > 1012) {
    var contentItemsLeadingArea = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .area-content");
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
                            Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                            Iframe[ifrm].style.height = "auto";
                            Iframe[ifrm].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                        }
                        if (Iframe.length > 1) {
                            Iframe[ifrm].style.display = "block";
                            Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                            Iframe[ifrm].style.height = "auto";
                            Iframe[ifrm].style.float = "none";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
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
                    Iframe[ifrm].style.height = (contentItemsLeadingAreaWidth / 2) / 16 * 9 + "px";
                    Iframe[ifrm].style.float = "none";
                    tagP[p].style.display = "inline-flex";
                }
            }
        }
    }
}
else {
    var contentItemsLeadingArea = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .area-content");
    for (var cila = 0; cila < contentItemsLeadingArea.length; cila++) {
        var contentItemsLeadingAreaWidth = contentItemsLeadingArea[cila].clientWidth;
        let tagP = contentItemsLeadingArea[cila].querySelectorAll("p");
        for (var p = 0; p < tagP.length; p++) {
            var Imag = tagP[p].querySelectorAll("img")
            for (var img = 0; img < Imag.length; img++) {console.log(Imag[img]);
                if (Imag.length > 0) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = contentItemsLeadingAreaWidth + "px";
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


function itemContentImageFeat() {
    var windW = window.innerWidth;
    if (windW > 1012) {
        var contentItemsLeadingArea = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .area-content");
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
                                Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                                Iframe[ifrm].style.height = "auto";
                                Iframe[ifrm].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentItemsLeadingAreaWidth / 2) + "px";
                            }
                            if (Iframe.length > 1) {
                                Iframe[ifrm].style.display = "block";
                                Iframe[ifrm].style.width = (contentItemsLeadingAreaWidth / Iframe.length) + "px";
                                Iframe[ifrm].style.height = "auto";
                                Iframe[ifrm].style.float = "none";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentItemsLeadingAreaWidth / Imag.length) + "px";
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
                        Iframe[ifrm].style.height = (contentItemsLeadingAreaWidth / 2) / 16 * 9 + "px";
                        Iframe[ifrm].style.float = "none";
                        tagP[p].style.display = "inline-flex";
                    }
                }
            }
        }
    } else {
        var contentItemsLeadingArea = document.querySelectorAll(" .blog-featured .items-leading .leading .content-item .area-content");
        for (var cila = 0; cila < contentItemsLeadingArea.length; cila++) {
            var contentItemsLeadingAreaWidth = contentItemsLeadingArea[cila].clientWidth;
            let tagP = contentItemsLeadingArea[cila].querySelectorAll("p");
            for (var p = 0; p < tagP.length; p++) {
                var Imag = tagP[p].querySelectorAll("img")
                for (var img = 0; img < Imag.length; img++) {
                    console.log(Imag[img]);
                    if (Imag.length > 0) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = contentItemsLeadingAreaWidth + "px";
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


var row = document.querySelectorAll(" .items-row");
for (var r = 0; r < row.length; r++) {
    var image = row[r].querySelectorAll(" .item .content-item .item-image a img"); //Задает список img элементов в отдельной строке
    for (var e = 0; e < image.length; e++) { //Пересчет img элементов в списке
        image[e].classList.add("img-" + [r]);
    }
}
    

var windW = window.innerWidth;
if (windW > 1012) {
    var contentItemsLeading = document.querySelectorAll(" .blog .items-leading .leading .content-item");
    for (var cil = 0; cil < contentItemsLeading.length; cil++) {
        var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
        for (var img = 0; img < Imag.length; img++) {
            Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
            var width = (Imag[img].clientWidth);
            Imag[img].style.height = width / 16 * 9 + "px";
        }
    }
    var row = document.querySelectorAll(" .blog .items-row ");
    for (var r = 0; r < row.length; r++) {
        var contentItemsRow = row[r].querySelectorAll(" .item .content-item");
        for (var cir = 0; cir < contentItemsRow.length; cir++) {
            let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
            var Imag = contentItemsRow[cir].querySelectorAll(" .item-image a .img-" + [r]);
            for (var img = 0; img < Imag.length; img++) {
                if (Imag.length > 0) {
                    Imag[img].style.width = contentItemsRowWidth + 'px';
                    Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';
                }
            }
        }
    }
} else {
    var contentItemsLeading = document.querySelectorAll(" .blog .items-leading .leading .content-item");
    for (var cil = 0; cil < contentItemsLeading.length; cil++) {
        var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
        for (var img = 0; img < Imag.length; img++) {
            Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
            var width = (Imag[img].clientWidth);
            Imag[img].style.height = width / 16 * 9 + "px";
        }
    }
    var contentItemsRow = document.querySelectorAll(" .blog .items-row .item .content-item");
    for (var cir = 0; cir < contentItemsRow.length; cir++) {
        let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
        var Imag = contentItemsRow[cir].querySelectorAll(" .item-image a img");
        for (var img = 0; img < Imag.length; img++) {
            if (Imag.length > 0) {
                Imag[img].style.width = contentItemsRowWidth + 'px';
                Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';
            }
        }
    }
}


function itemImageBlg() {
    var windW = window.innerWidth;
    if (windW > 1012) {
        var contentItemsLeading = document.querySelectorAll(" .blog .items-leading .leading .content-item");
        for (var cil = 0; cil < contentItemsLeading.length; cil++) {
            var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
            for (var img = 0; img < Imag.length; img++) {
                Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
                var width = (Imag[img].clientWidth);
                Imag[img].style.height = width / 16 * 9 + "px";
            }
        }
        var row = document.querySelectorAll(" .blog .items-row ");
        for (var r = 0; r < row.length; r++) {
            var contentItemsRow = row[r].querySelectorAll(" .item .content-item");
            for (var cir = 0; cir < contentItemsRow.length; cir++) {
                let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
                var Imag = contentItemsRow[cir].querySelectorAll(" .item-image a .img-" + [r]);
                for (var img = 0; img < Imag.length; img++) {
                    if (Imag.length > 0) {
                        Imag[img].style.width = contentItemsRowWidth + 'px';
                        Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';
                    }
                }
            }
        }
    } else {
        var contentItemsLeading = document.querySelectorAll(" .blog .items-leading .leading .content-item");
        for (var cil = 0; cil < contentItemsLeading.length; cil++) {
            var Imag = contentItemsLeading[cil].querySelectorAll(" .itemImg");
            for (var img = 0; img < Imag.length; img++) {
                Imag[img].style.width = contentItemsLeading[cil].clientWidth + "px";
                var width = (Imag[img].clientWidth);
                Imag[img].style.height = width / 16 * 9 + "px";
            }
        }
        var contentItemsRow = document.querySelectorAll(" .blog .items-row .item .content-item");
        for (var cir = 0; cir < contentItemsRow.length; cir++) {
            let contentItemsRowWidth = contentItemsRow[cir].clientWidth;
            var Imag = contentItemsRow[cir].querySelectorAll(" .item-image a img");
            for (var img = 0; img < Imag.length; img++) {
                if (Imag.length > 0) {
                    Imag[img].style.width = contentItemsRowWidth + 'px';
                    Imag[img].style.height = contentItemsRowWidth / 16 * 9 + 'px';
                }
            }
        }
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



var windW = window.innerWidth;
var contentArticleBody = document.querySelectorAll(" .item-page ");
for (var cab = 0; cab < contentArticleBody.length; cab++) {
    var Imag = contentArticleBody[cab].querySelectorAll(" .itemImage");
    for (var img = 0; img < Imag.length; img++) {
        Imag[img].style.width = contentArticleBody[cab].clientWidth - 14 + "px";
        var width = (Imag[img].clientWidth);
        Imag[img].style.height = width / 16 * 9 + "px";
    }
}



function itemImagePg() {
    var windW = window.innerWidth;
    var contentArticleBody = document.querySelectorAll(" .item-page ");
    for (var cab = 0; cab < contentArticleBody.length; cab++) {
        var Imag = contentArticleBody[cab].querySelectorAll(" .itemImage");
        for (var img = 0; img < Imag.length; img++) {
            Imag[img].style.width = contentArticleBody[cab].clientWidth - 14 + "px";
            var width = (Imag[img].clientWidth);
            Imag[img].style.height = width / 16 * 9 + "px";
        }
    }
}

/* JForm*/

var Width = 22 + 'rem';
var controls = document.querySelectorAll ('.control-group .controls select');
for (var c=0; c<controls.length; c++) {
    controls[c].style.width = Width;
}

/* End JForm*/

/* Logotype*/

var logo = document.querySelector(" #logo ");
var logoImage = document.querySelector(" #logo img");
var windW = window.innerWidth;
if (windW != 1920 && windW != 1280 && windW != 1013 && windW != 992 && windW != 768) {
    if (logoImage != null) {
        var width = (logo.clientWidth) + "px";
        document.querySelector(" #logo img").style.width = width;
    }
}


function logoResize() {
    var logo = document.querySelector(" #logo ");
    var logoImage = document.querySelector(" #logo img");
    var windW = window.innerWidth;
    if (logoImage != null) {
        var width = (logo.clientWidth) + "px";
        document.querySelector(" #logo img").style.width = width;

    }
}
/*End Logotype */

