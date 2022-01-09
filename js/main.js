var windW = window.innerWidth;


if (windW > 1012) {
    var catChildrenPull = document.querySelectorAll(" .cat-children-pull");
    for (let ccp = 0; ccp < catChildrenPull.length; ccp++) {
        var cat = catChildrenPull[ccp].querySelectorAll(" .cat");
        for (var c = 0; c < cat.length; c++) {
            cat[c].style.display = "block";
            cat[c].style.width = catChildrenPull[ccp].clientWidth / cat.length + "px";
            var catChildDesc = cat[c].querySelectorAll(".category-desc");
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
    }
}
else {
    var cat = document.querySelectorAll(" .cat");
    for (var c = 0; c < cat.length; c++) {
        cat[c].style.display = "block";
        cat[c].style.width = "-moz-available";
        cat[c].style.width = "-webkit-fill-available";
        var catChildDesc = cat[c].querySelectorAll(".category-desc");
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
        var catChildrenPull = document.querySelectorAll(" .cat-children-pull");
        for (let ccp = 0; ccp < catChildrenPull.length; ccp++) {
            var cat = catChildrenPull[ccp].querySelectorAll(" .cat");
            for (var c = 0; c < cat.length; c++) {
                cat[c].style.display = "block";
                cat[c].style.width = catChildrenPull[ccp].clientWidth / cat.length + "px";
                var catChildDesc = cat[c].querySelectorAll(".category-desc");
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
    } else {
        var cat = document.querySelectorAll(" .cat");
        for (var c = 0; c < cat.length; c++) {
            cat[c].style.display = "block";
            cat[c].style.width = "-moz-available";
            cat[c].style.width = "-webkit-fill-available";
            var catChildDesc = cat[c].querySelectorAll(".category-desc");
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

/* Block for Blog */
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
            if (itemRow.length > 0) {
                itemRow[l].style.display = "block";
                itemRow[l].style.width = itemRowWidth - (8) + "px";
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
                if (itemRow.length > 0) {
                    itemRow[l].style.display = "block";
                    itemRow[l].style.width = itemRowWidth - (8) + "px";
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

/* End / Block for Blog */



/*Img and iframe */
if (windW > 1012) {
    var contentItemImage = document.querySelectorAll(" .item-image");
    for (var cii = 0; cii < contentItemImage.length; cii++){
        var contentItemImageWidth = contentItemImage[cii].clientWidth;
        let Img = contentItemImage[cii].querySelectorAll(" img");
        for (let i = 0; i < Img.length; i++) {
            Img[i].style.width = contentItemImageWidth + "px";
            Img[i].style.height = (contentItemImageWidth / 16 * 9) + "px";
        }
    }
    var contentArticleBody = document.querySelectorAll(" .articleBody"); 
    for (var cab = 0; cab < contentArticleBody.length; cab++) {
        var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
        let tagP = contentArticleBody[cab].querySelectorAll("p");
        for (let p = 0; p < tagP.length; p++) {

            let tagA = tagP[p].querySelectorAll(" a ");
            for (let a = 0; a < tagA.length; a++) {
                if (tagA.length > 0) {
                    let Imag = tagA[a].querySelectorAll("img");
                    for (let img = 0; img < Imag.length; img++) {
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
            for (let img = 0; img < Imag.length; img++) {
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
            let Iframe = tagP[p].querySelectorAll("iframe");
            for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                if (Iframe.length > 0) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = (contentArticleBodyWidth) + "px";
                    Iframe[ifrm].style.height = (contentArticleBodyWidth / 16 * 9) + "px";
                    Iframe[ifrm].style.float = "left";
                } 
            }
        }
    }
    var contentAreaContent = document.querySelectorAll(" .area-content");
    for (let cac = 0; cac < contentAreaContent.length; cac++) {
        var contentAreaContentWidth = contentAreaContent[cac].clientWidth;
        let tagP = contentAreaContent[cac].querySelectorAll("p"); 
        for (let p = 0; p < tagP.length; p++) { 
            let tagA = tagP[p].querySelectorAll(" a ");
            for (let a = 0; a < tagA.length; a++) {
                if (tagA.length > 0) {
                    let Imag = tagA[a].querySelectorAll("img");
                    for (let img = 0; img < Imag.length; img++) {
                        if (Imag.length = 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentAreaContentWidth / 2) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentAreaContentWidth / 2) + "px";
                        } if (Imag.length > 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentAreaContentWidth / Imag.length) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "none";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentAreaContentWidth / Imag.length) + "px";
                            tagP[p].style.display = "inline-flex";
                        }
                    }
                }
            }
            let Imag = tagP[p].querySelectorAll("img");
            for (let img = 0; img < Imag.length; img++) {
                if (Imag.length = 1) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentAreaContentWidth / 2) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "left";
                } if (Imag.length > 1) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentAreaContentWidth / Imag.length) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "none";
                    tagP[p].style.display = "inline-flex";
                }
            }
            let Iframe = tagP[p].querySelectorAll("iframe");
            for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                if (Iframe.length > 0) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = (contentAreaContentWidth) + "px";
                    Iframe[ifrm].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                    Iframe[ifrm].style.float = "left";
                    tagP[p].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                } 
            }
        }
    } 
} else {
    var contentItemImage = document.querySelectorAll(" .item-image");
    for (var cii = 0; cii < contentItemImage.length; cii++){
        var contentItemImageWidth = contentItemImage[cii].clientWidth;
        let Img = contentItemImage[cii].querySelectorAll(" img");
        for (let i = 0; i < Img.length; i++) {
            Img[i].style.width = contentItemImageWidth + "px";
            Img[i].style.height = (contentItemImageWidth / 16 * 9) + "px";
        }
    }
    var contentArticleBody = document.querySelectorAll(" .articleBody"); 
    for (var cab = 0; cab < contentArticleBody.length; cab++) {
        var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
        let tagP = contentArticleBody[cab].querySelectorAll("p");
        for (let p = 0; p < tagP.length; p++) {

            let tagA = tagP[p].querySelectorAll(" a ");
            for (let a = 0; a < tagA.length; a++) {
                if (tagA.length > 0) {
                    let Imag = tagA[a].querySelectorAll("img");
                    for (let img = 0; img < Imag.length; img++) {
                        if (Imag.length > 0) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentArticleBodyWidth) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentArticleBodyWidth) + "px";
                        }
                    }
                }
            }
            let Imag = tagP[p].querySelectorAll("img");
            for (let img = 0; img < Imag.length; img++) {
                if (Imag.length > 0) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentArticleBodyWidth) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "none";
                    tagP[p].style.display = "block";
                }
            }
            let Iframe = tagP[p].querySelectorAll("iframe");
            for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                if (Iframe.length > 0) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = (contentArticleBodyWidth) + "px";
                    Iframe[ifrm].style.height = (contentArticleBodyWidth / 16 * 9) + "px";
                    Iframe[ifrm].style.float = "left";
                } 
            }
        }
    }
    var contentAreaContent = document.querySelectorAll(" .area-content");
    for (let cac = 0; cac < contentAreaContent.length; cac++) {
        var contentAreaContentWidth = contentAreaContent[cac].clientWidth;
        let tagP = contentAreaContent[cac].querySelectorAll("p"); 
        for (let p = 0; p < tagP.length; p++) {
            let tagA = tagP[p].querySelectorAll(" a ");
            for (let a = 0; a < tagA.length; a++) {
                if (tagA.length > 0) {
                    let Imag = tagA[a].querySelectorAll("img");
                    for (let img = 0; img < Imag.length; img++) {
                        if (Imag.length = 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentAreaContentWidth / 2) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "left";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentAreaContentWidth / 2) + "px";
                        } if (Imag.length > 1) {
                            Imag[img].style.display = "block";
                            Imag[img].style.width = (contentAreaContentWidth / Imag.length) + "px";
                            Imag[img].style.height = "auto";
                            Imag[img].style.float = "none";
                            tagA[a].style.display = "block";
                            tagA[a].style.width = (contentAreaContentWidth / Imag.length) + "px";
                            tagP[p].style.display = "inline-flex";
                        }
                    }
                }
            }
            let Imag = tagP[p].querySelectorAll("img");
            for (let img = 0; img < Imag.length; img++) {
                if (Imag.length > 0) {
                    Imag[img].style.display = "block";
                    Imag[img].style.width = (contentAreaContentWidth) + "px";
                    Imag[img].style.height = "auto";
                    Imag[img].style.float = "left";
                    tagP[p].style.display = "inline-block";
                } 
            }
            let Iframe = tagP[p].querySelectorAll("iframe");
            for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                if (Iframe.length > 0) {
                    Iframe[ifrm].style.display = "block";
                    Iframe[ifrm].style.width = (contentAreaContentWidth) + "px";
                    Iframe[ifrm].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                    Iframe[ifrm].style.float = "left";
                    tagP[p].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                } 
            }
        }
    } 
}



function itemContentImage() {
    var windW = window.innerWidth;
    if (windW > 1012) {
        var contentItemImage = document.querySelectorAll(" .item-image");
        for (var cii = 0; cii < contentItemImage.length; cii++){
            var contentItemImageWidth = contentItemImage[cii].clientWidth;
            let Img = contentItemImage[cii].querySelectorAll(" img");
            for (let i = 0; i < Img.length; i++) {
                Img[i].style.width = contentItemImageWidth + "px";
                Img[i].style.height = (contentItemImageWidth / 16 * 9) + "px";
            }
        }
        var contentArticleBody = document.querySelectorAll(" .articleBody"); 
        for (var cab = 0; cab < contentArticleBody.length; cab++) {
            var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
            let tagP = contentArticleBody[cab].querySelectorAll("p");
            for (let p = 0; p < tagP.length; p++) {
    
                let tagA = tagP[p].querySelectorAll(" a ");
                for (let a = 0; a < tagA.length; a++) {
                    if (tagA.length > 0) {
                        let Imag = tagA[a].querySelectorAll("img");
                        for (let img = 0; img < Imag.length; img++) {
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
                for (let img = 0; img < Imag.length; img++) {
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
                let Iframe = tagP[p].querySelectorAll("iframe");
                for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                    if (Iframe.length > 0) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = (contentArticleBodyWidth) + "px";
                        Iframe[ifrm].style.height = (contentArticleBodyWidth / 16 * 9) + "px";
                        Iframe[ifrm].style.float = "left";
                    } 
                }
            }
        }
        var contentAreaContent = document.querySelectorAll(" .area-content");
        for (let cac = 0; cac < contentAreaContent.length; cac++) {
            var contentAreaContentWidth = contentAreaContent[cac].clientWidth;
            let tagP = contentAreaContent[cac].querySelectorAll("p"); 
            for (let p = 0; p < tagP.length; p++) { 
                let tagA = tagP[p].querySelectorAll(" a ");
                for (let a = 0; a < tagA.length; a++) {
                    if (tagA.length > 0) {
                        let Imag = tagA[a].querySelectorAll("img");
                        for (let img = 0; img < Imag.length; img++) {
                            if (Imag.length = 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentAreaContentWidth / 2) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentAreaContentWidth / 2) + "px";
                            } if (Imag.length > 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentAreaContentWidth / Imag.length) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "none";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentAreaContentWidth / Imag.length) + "px";
                                tagP[p].style.display = "inline-flex";
                            }
                        }
                    }
                }
                let Imag = tagP[p].querySelectorAll("img");
                for (let img = 0; img < Imag.length; img++) {
                    if (Imag.length = 1) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentAreaContentWidth / 2) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "left";
                    } if (Imag.length > 1) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentAreaContentWidth / Imag.length) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "none";
                        tagP[p].style.display = "inline-flex";
                    }
                }
                let Iframe = tagP[p].querySelectorAll("iframe");
                for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                    if (Iframe.length > 0) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = (contentAreaContentWidth) + "px";
                        Iframe[ifrm].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                        Iframe[ifrm].style.float = "left";
                        tagP[p].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                    } 
                }
            }
        } 
    } else {
        var contentItemImage = document.querySelectorAll(" .item-image");
        for (var cii = 0; cii < contentItemImage.length; cii++){
            var contentItemImageWidth = contentItemImage[cii].clientWidth;
            let Img = contentItemImage[cii].querySelectorAll(" img");
            for (let i = 0; i < Img.length; i++) {
                Img[i].style.width = contentItemImageWidth + "px";
                Img[i].style.height = (contentItemImageWidth / 16 * 9) + "px";
            }
        }
        var contentArticleBody = document.querySelectorAll(" .articleBody"); 
        for (var cab = 0; cab < contentArticleBody.length; cab++) {
            var contentArticleBodyWidth = contentArticleBody[cab].clientWidth;
            let tagP = contentArticleBody[cab].querySelectorAll("p");
            for (let p = 0; p < tagP.length; p++) {
    
                let tagA = tagP[p].querySelectorAll(" a ");
                for (let a = 0; a < tagA.length; a++) {
                    if (tagA.length > 0) {
                        let Imag = tagA[a].querySelectorAll("img");
                        for (let img = 0; img < Imag.length; img++) {
                            if (Imag.length > 0) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentArticleBodyWidth) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentArticleBodyWidth) + "px";
                            }
                        }
                    }
                }
                let Imag = tagP[p].querySelectorAll("img");
                for (let img = 0; img < Imag.length; img++) {
                    if (Imag.length > 0) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentArticleBodyWidth) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "none";
                        tagP[p].style.display = "block";
                    }
                }
                let Iframe = tagP[p].querySelectorAll("iframe");
                for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                    if (Iframe.length > 0) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = (contentArticleBodyWidth) + "px";
                        Iframe[ifrm].style.height = (contentArticleBodyWidth / 16 * 9) + "px";
                        Iframe[ifrm].style.float = "left";
                    } 
                }
            }
        }
        var contentAreaContent = document.querySelectorAll(" .area-content");
        for (let cac = 0; cac < contentAreaContent.length; cac++) {
            var contentAreaContentWidth = contentAreaContent[cac].clientWidth;
            let tagP = contentAreaContent[cac].querySelectorAll("p"); 
            for (let p = 0; p < tagP.length; p++) {
                let tagA = tagP[p].querySelectorAll(" a ");
                for (let a = 0; a < tagA.length; a++) {
                    if (tagA.length > 0) {
                        let Imag = tagA[a].querySelectorAll("img");
                        for (let img = 0; img < Imag.length; img++) {
                            if (Imag.length = 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentAreaContentWidth / 2) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "left";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentAreaContentWidth / 2) + "px";
                            } if (Imag.length > 1) {
                                Imag[img].style.display = "block";
                                Imag[img].style.width = (contentAreaContentWidth / Imag.length) + "px";
                                Imag[img].style.height = "auto";
                                Imag[img].style.float = "none";
                                tagA[a].style.display = "block";
                                tagA[a].style.width = (contentAreaContentWidth / Imag.length) + "px";
                                tagP[p].style.display = "inline-flex";
                            }
                        }
                    }
                }
                let Imag = tagP[p].querySelectorAll("img");
                for (let img = 0; img < Imag.length; img++) {
                    if (Imag.length > 0) {
                        Imag[img].style.display = "block";
                        Imag[img].style.width = (contentAreaContentWidth) + "px";
                        Imag[img].style.height = "auto";
                        Imag[img].style.float = "left";
                        tagP[p].style.display = "inline-block";
                    } 
                }
                let Iframe = tagP[p].querySelectorAll("iframe");
                for (let ifrm = 0; ifrm < Iframe.length; ifrm++) {
                    if (Iframe.length > 0) {
                        Iframe[ifrm].style.display = "block";
                        Iframe[ifrm].style.width = (contentAreaContentWidth) + "px";
                        Iframe[ifrm].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                        Iframe[ifrm].style.float = "left";
                        tagP[p].style.height = (contentAreaContentWidth / 16 * 9) + "px";
                    } 
                }
            }
        } 
    }
}
/*End / img and iframe */


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

