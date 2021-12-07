	var windW = window.innerWidth;
	var contentArticleBody = document.querySelectorAll(" .item-page .articleBody");
	for (var cab = 0; cab < contentArticleBody.length; cab++) {
	    var videoIframe = contentArticleBody[cab].querySelectorAll(" iframe");
	    for (var v = 0; v < videoIframe.length; v++) {
	        videoIframe[v].style.width = contentArticleBody[cab].clientWidth + "px";
	        var width = (videoIframe[v].clientWidth);
	        videoIframe[v].style.height = width / 16 * 9 + "px";


	    }
	}


	function itemIframePg() {
	    var contentArticleBody = document.querySelectorAll(" .item-page .articleBody");
	    for (var cab = 0; cab < contentArticleBody.length; cab++) {
	        var videoIframe = contentArticleBody[cab].querySelectorAll(" iframe");
	        for (var v = 0; v < videoIframe.length; v++) {
	            videoIframe[v].style.width = contentArticleBody[cab].clientWidth + "px";
	            var width = (videoIframe[v].clientWidth);
	            videoIframe[v].style.height = width / 16 * 9 + "px";


	        }
	    }
	}