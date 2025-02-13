const nav_ids = ['about', 'listen', 'order', 'more-roar']

function showEl(el_id) {
	$('#' + el_id).show();
}

function hideEl(el_id) {
	$('#' + el_id).hide();
}

function showAll() {
	nav_ids.forEach(el_id => $('#' + el_id).show())
}

function hideAll() {
	nav_ids.forEach(el_id => $('#' + el_id).hide())
}
