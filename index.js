const nav_ids = ['about', 'listen', 'order', 'more-roar']

function showEl(el_id) {
	$('#' + el_id).show();
}

function hideEl(el_id) {
	$('#' + el_id).hide();
}

function showAll() {
	console.log('uhh')
	$("#hedgehog").attr("src","/assets/img/schematic.png");
	if($("#more-roar").text().length < 20){
		$("#more-roar").text($("#more-roar").text() + "!");
	}
}

function hideAll() {
	// nav_ids.forEach(el_id => $('#' + el_id).hide())
	$("#hedgehog").attr("src","/assets/img/hhg.bmp");
}

function swapSrc() {
	if ($("#hedgehog").attr("src") === "hhg.bmp") $("#hedgehog").attr("src","schematic.png");
	else $("#hedgehog").attr("src","/assets/img/hhg.bmp");
}