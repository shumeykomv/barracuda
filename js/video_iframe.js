var row = document.querySelectorAll( " .items-row");
for(var r=0; r<row.length; r++){
	var iframe = row[r].querySelectorAll( " .item .content-item p iframe");	//Задает список img элементов в отдельной строке
	for(var e=0; e<iframe.length; e++){											//Пересчет img элементов в списке
		iframe[e].classList.add("iframe-" + [r]);						
	}
}


var windW = window.innerWidth;
if (windW >= 1400){

	var content = document.querySelectorAll( " .items-leading .leading .content-item ");
	for (var c=0; c<content.length; c++){
		var contentWidth = content[c].clientWidth;
		var videoIframe = content[c].querySelectorAll( " iframe ");
		for (var v=0; v<videoIframe.length; v++) {
  			videoIframe[v].style.width = contentWidth + 'px';
  			videoIframe[v].style.height = (contentWidth) / 16 * 9 + 'px';
		}	 
	}

	var row = document.querySelectorAll( " .items-row");
	for(var r=0; r<row.length; r++){
		let itemRow = row[r].getElementsByClassName("item");		
		let itemRowWidth = row[r].clientWidth / itemRow.length;
		let Ifrm = document.getElementsByClassName("iframe-"+[r]);
   		for(var e=0; e<Ifrm.length; e++){       
    		for(var n=0; n<itemRow.length; n++){					
        		document.getElementsByClassName("iframe-"+[r])[e].style.width = itemRowWidth - 30 + "px";
           		document.getElementsByClassName("iframe-"+[r])[e].style.height = (itemRowWidth - 30) / 16 * 9  + "px";
        	}
		}
	}
}
else if (windW < 1400 && windW > 1012){

	var content = document.querySelectorAll( " .items-leading .leading .content-item ");
	for (var c=0; c<content.length; c++){
		var contentWidth = content[c].clientWidth;
		var videoIframe = content[c].querySelectorAll( " iframe ");
		for (var v=0; v<videoIframe.length; v++) {
  			videoIframe[v].style.width = contentWidth + 'px';
  			videoIframe[v].style.height = (contentWidth) / 16 * 9 + 'px';
		}	 
	}

	var row = document.querySelectorAll( " .items-row");
	for(var r=0; r<row.length; r++){
		let itemRow = row[r].getElementsByClassName("item");		
		let itemRowWidth = row[r].clientWidth / itemRow.length;
		let Ifrm = document.getElementsByClassName("iframe-"+[r]);
   		for(var e=0; e<Ifrm.length; e++){       
    		for(var n=0; n<itemRow.length; n++){					
        		document.getElementsByClassName("iframe-"+[r])[e].style.width = itemRowWidth - 30 + "px";
           		document.getElementsByClassName("iframe-"+[r])[e].style.height = (itemRowWidth - 30) / 16 * 9  + "px";
        	}
		}
	}
}
else {
  	var content = document.querySelectorAll( " .items-leading .leading .content-item ");
	for (var c=0; c<content.length; c++){
		var contentWidth = content[c].clientWidth;
		var videoIframe = content[c].querySelectorAll( " iframe ");
		for (var v=0; v<videoIframe.length; v++) {
  			videoIframe[v].style.width = contentWidth + 'px';
  			videoIframe[v].style.height = (contentWidth) / 16 * 9 + 'px';
		}
	}
  	var row = document.querySelectorAll( " .items-row");
	for(var r=0; r<row.length; r++){
		let itemRow = row[r].getElementsByClassName("item");		
		let itemRowWidth = row[r].clientWidth;
		let Ifrm = document.getElementsByClassName("iframe-"+[r]);
   		for(var e=0; e<Ifrm.length; e++){       
    		for(var n=0; n<itemRow.length; n++){					
        		document.getElementsByClassName("iframe-"+[r])[e].style.width = itemRowWidth - 30 + "px";
           		document.getElementsByClassName("iframe-"+[r])[e].style.height = (itemRowWidth - 30) / 16 * 9  + "px";
        	}
		}
	}
} 
     





function videoIframeSize() {
  	var windW = window.innerWidth;
if (windW >= 1400){

	var content = document.querySelectorAll( " .items-leading .leading .content-item ");
	for (var c=0; c<content.length; c++){
		var contentWidth = content[c].clientWidth;
		var videoIframe = content[c].querySelectorAll( " iframe ");
		for (var v=0; v<videoIframe.length; v++) {
  			videoIframe[v].style.width = contentWidth + 'px';
  			videoIframe[v].style.height = (contentWidth) / 16 * 9 + 'px';
		}	 
	}

	var row = document.querySelectorAll( " .items-row");
	for(var r=0; r<row.length; r++){
		let itemRow = row[r].getElementsByClassName("item");		
		let itemRowWidth = row[r].clientWidth / itemRow.length;
		let Ifrm = document.getElementsByClassName("iframe-"+[r]);
   		for(var e=0; e<Ifrm.length; e++){       
    		for(var n=0; n<itemRow.length; n++){					
        		document.getElementsByClassName("iframe-"+[r])[e].style.width = itemRowWidth - 30 + "px";
           		document.getElementsByClassName("iframe-"+[r])[e].style.height = (itemRowWidth - 30) / 16 * 9  + "px";
        	}
		}
	}
}
else if (windW < 1400 && windW > 1012){

	var content = document.querySelectorAll( " .items-leading .leading .content-item ");
	for (var c=0; c<content.length; c++){
		var contentWidth = content[c].clientWidth;
		var videoIframe = content[c].querySelectorAll( " iframe ");
		for (var v=0; v<videoIframe.length; v++) {
  			videoIframe[v].style.width = contentWidth + 'px';
  			videoIframe[v].style.height = (contentWidth) / 16 * 9 + 'px';
		}	 
	}

	var row = document.querySelectorAll( " .items-row");
	for(var r=0; r<row.length; r++){
		let itemRow = row[r].getElementsByClassName("item");		
		let itemRowWidth = row[r].clientWidth / itemRow.length;
		let Ifrm = document.getElementsByClassName("iframe-"+[r]);
   		for(var e=0; e<Ifrm.length; e++){       
    		for(var n=0; n<itemRow.length; n++){					
        		document.getElementsByClassName("iframe-"+[r])[e].style.width = itemRowWidth - 30 + "px";
           		document.getElementsByClassName("iframe-"+[r])[e].style.height = (itemRowWidth - 30) / 16 * 9  + "px";
        	}
		}
	}
}
else {
  	var content = document.querySelectorAll( " .items-leading .leading .content-item ");
	for (var c=0; c<content.length; c++){
		var contentWidth = content[c].clientWidth;
		var videoIframe = content[c].querySelectorAll( " iframe ");
		for (var v=0; v<videoIframe.length; v++) {
  			videoIframe[v].style.width = contentWidth + 'px';
  			videoIframe[v].style.height = (contentWidth) / 16 * 9 + 'px';
		}
	}
  	var row = document.querySelectorAll( " .items-row");
	for(var r=0; r<row.length; r++){
		let itemRow = row[r].getElementsByClassName("item");		
		let itemRowWidth = row[r].clientWidth;
		let Ifrm = document.getElementsByClassName("iframe-"+[r]);
   		for(var e=0; e<Ifrm.length; e++){       
    		for(var n=0; n<itemRow.length; n++){					
        		document.getElementsByClassName("iframe-"+[r])[e].style.width = itemRowWidth - 30 + "px";
           		document.getElementsByClassName("iframe-"+[r])[e].style.height = (itemRowWidth - 30) / 16 * 9  + "px";
        	}
		}
	}
} 
}