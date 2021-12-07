var Width = 22 + 'rem';
var controls = document.querySelectorAll ('.control-group .controls select');
for (var c=0; c<controls.length; c++) {
	controls[c].style.width = Width;
}

