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