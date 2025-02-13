const nav_ids = ['about', 'listen', 'order', 'more-roar']

function showEl(el_id) {
	$('#' + el_id).show();
}

function hideEl(el_id) {
	$('#' + el_id).hide();
}

function showAll() {
	nav_ids.forEach(el_id => $('#' + el_id).show())
	$("#hedgehog").attr("src","schematic.png");
}

function hideAll() {
	nav_ids.forEach(el_id => $('#' + el_id).hide())
	$("#hedgehog").attr("src","hhg.bmp");
}

function swapSrc() {
	if ($("#hedgehog").attr("src") === "hhg.bmp") $("#hedgehog").attr("src","schematic.png");
	else $("#hedgehog").attr("src","hhg.bmp");
}