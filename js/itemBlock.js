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
                itemRow[l].style.width = itemRowWidth - (0) + "px";
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
                itemRow[l].style.width = itemRowWidth - (0) + "px";
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
                    itemRow[l].style.width = itemRowWidth - (0) + "px";
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
                    itemRow[l].style.width = itemRowWidth - (0) + "px";
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