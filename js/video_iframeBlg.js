	var windW = window.innerWidth;
	var contentItemsLeading = document.querySelectorAll(" .blog .items-leading .leading .content-item");
	for (var cil = 0; cil < contentItemsLeading.length; cil++) {
	    var videoIframe = contentItemsLeading[cil].querySelectorAll(" iframe");
	    for (var v = 0; v < videoIframe.length; v++) {
	        videoIframe[v].style.width = contentItemsLeading[cil].clientWidth + "px";
	        var width = (videoIframe[v].clientWidth);
	        videoIframe[v].style.height = width / 16 * 9 + "px";
	    }
	}


	function itemIframeBlg() {
	    var windW = window.innerWidth;
	    var contentItemsLeading = document.querySelectorAll(" .blog .items-leading .leading .content-item");
	    for (var cil = 0; cil < contentItemsLeading.length; cil++) {
	        var videoIframe = contentItemsLeading[cil].querySelectorAll(" iframe");
	        for (var v = 0; v < videoIframe.length; v++) {
	            videoIframe[v].style.width = contentItemsLeading[cil].clientWidth + "px";
	            var width = (videoIframe[v].clientWidth);
	            videoIframe[v].style.height = width / 16 * 9 + "px";
	        }
	    }
	}