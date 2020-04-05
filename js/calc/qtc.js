function qtc_hr_update(updated, hr_box, rr_u_select, rr_msec_box, rr_sbox_box) {
	if(updated == 'hr') {
		var hr = parseFloat(document.getElementById(hr_box).value);

		if(!isNaN(hr)) {
			document.getElementById(rr_msec_box).value = Math.round(60000/hr);
			document.getElementById(rr_sbox_box).value = Math.round(40*60000/hr);
		}
	} else if(updated == 'rr') {
		var u = document.getElementById(rr_u_select).value;
		var rr = NaN;

		switch(u) {
			case 'msec':
				rr = parseFloat(document.getElementById(rr_msec_box).value);
				break;
			case 'sbox':
				rr = 40 * parseFloat(document.getElementById(rr_sbox_box).value);
				break;
		}

		if(!isNaN(rr)) {
			document.getElementById(hr_box).value = Math.round(60000/rr);
		}
	}
}

function qtc_rr_click(u_select, msec_box, sbox_box) {
	var u = document.getElementById(u_select).value;
	var rr = NaN;

	switch(u) {
		case 'msec':
			rr = parseFloat(document.getElementById(msec_box).value);
			if(!isNaN(rr)) {
				document.getElementById(sbox_box).value = Math.round(rr / 40);
			}
			break;
		case 'sbox':
			rr = parseFloat(document.getElementById(sbox_box).value);
			if(!isNaN(rr)) {
				document.getElementById(msec_box).value = Math.round(40 * rr);
			}
			break;
	}
}

function qtc_rr_change(u_select, msec_box, sbox_box) {
	var u = document.getElementById(u_select).value;

	switch(u) {
		case 'msec':
			document.getElementById(msec_box).style.display = 'initial';
			document.getElementById(sbox_box).style.display = 'none';
			break;
		case 'sbox':
			document.getElementById(msec_box).style.display = 'none';
			document.getElementById(sbox_box).style.display = 'initial';
			break;
	}
}

function qtc(qt_box, rr_u_select, rr_msec_box, rr_sbox_box, qtc_box) {
	var qt = parseFloat(document.getElementById(qt_box).value);
	var rr = NaN;

	var rr_u = document.getElementById(rr_u_select).value;

	switch(rr_u) {
		case 'msec':
			rr = parseFloat(document.getElementById(rr_msec_box).value);
			break;
		case 'sbox':
			rr = parseFloat(document.getElementById(rr_sbox_box).value) * 40;
			break;
	}

	if(!isNaN(qt) && !isNaN(rr)) {
		document.getElementById(qtc_box).value = Math.round(qt / Math.sqrt(rr/1000));
	}
}