function only_num(field) {
	var str = document.getElementById(field).value;

	if(str.length > 0) {
		var charCode = str[str.length-1].charCodeAt();
		// Delete if it's not a digit or period
		if(charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
			document.getElementById(field).value = str.substring(0,str.length-1);
			return false;
		// Delete if it's a period and there's already a period
		} else if(charCode == 46 && str.substring(0,str.length-1).includes('.')) {
			document.getElementById(field).value = str.substring(0,str.length-1);
			return false;
		}
		return true;
	}
	return false;
}

function bmi_ht_click(u_select, ft_box, in_box, tin_box, m_box, cm_box) {
	var u = document.getElementById(u_select).value;
	var ht = NaN;

	switch(u) {
		case 'ft+in':
			ht = 12 * parseFloat(document.getElementById(ft_box).value) + parseFloat(document.getElementById(in_box).value);
			if(!isNaN(ht)) {
				document.getElementById(tin_box).value = ht;
				document.getElementById(m_box).value = Math.round(2.54 * ht) / 100;
				document.getElementById(cm_box).value = Math.round(2.54 * ht);
			}
			break;
		case 'in':
			ht = parseFloat(document.getElementById(tin_box).value);
			if(!isNaN(ht)) {
				document.getElementById(ft_box).value = (ht - (ht % 12)) / 12;
				document.getElementById(in_box).value = ht % 12;
				document.getElementById(m_box).value = Math.round(2.54 * ht) / 100;
				document.getElementById(cm_box).value = Math.round(2.54 * ht);
			}
			break;
		case 'm':
			ht = parseFloat(document.getElementById(m_box).value);
			if(!isNaN(ht)) {
				document.getElementById(ft_box).value = ((100 * ht / 2.54) - (100 * ht / 2.54) % 12) / 12;
				document.getElementById(in_box).value = Math.round((100 * ht / 2.54) % 12);
				document.getElementById(tin_box).value = Math.round(100 * ht / 2.54);
				document.getElementById(cm_box).value = 100 * ht;
			}
			break;
		case 'cm':
			ht = parseFloat(document.getElementById(cm_box).value);
			if(!isNaN(ht)) {
				document.getElementById(ft_box).value = ((ht / 2.54) - (ht / 2.54) % 12) / 12;
				document.getElementById(in_box).value = Math.round((ht / 2.54) % 12);
				document.getElementById(tin_box).value = Math.round(ht / 2.54);
				document.getElementById(m_box).value = ht / 100;
			}
			break;
	}
}

function bmi_ht_change(u_select, ft_box, ft_lab, in_box, in_lab, tin_box, m_box, cm_box) {
	var u = document.getElementById(u_select).value;

	switch(u) {
		case 'ft+in':
			document.getElementById(ft_box).style.display = 'initial';
			document.getElementById(ft_lab).style.display = 'initial';
			document.getElementById(in_box).style.display = 'initial';
			document.getElementById(in_lab).style.display = 'initial';
			document.getElementById(tin_box).style.display = 'none';
			document.getElementById(m_box).style.display = 'none';
			document.getElementById(cm_box).style.display = 'none';
			break;
		case 'in':
			document.getElementById(ft_box).style.display = 'none';
			document.getElementById(ft_lab).style.display = 'none';
			document.getElementById(in_box).style.display = 'none';
			document.getElementById(in_lab).style.display = 'none';
			document.getElementById(tin_box).style.display = 'initial';
			document.getElementById(m_box).style.display = 'none';
			document.getElementById(cm_box).style.display = 'none';
			break;
		case 'm':
			document.getElementById(ft_box).style.display = 'none';
			document.getElementById(ft_lab).style.display = 'none';
			document.getElementById(in_box).style.display = 'none';
			document.getElementById(in_lab).style.display = 'none';
			document.getElementById(tin_box).style.display = 'none';
			document.getElementById(m_box).style.display = 'initial';
			document.getElementById(cm_box).style.display = 'none';
			break;
		case 'cm':
			document.getElementById(ft_box).style.display = 'none';
			document.getElementById(ft_lab).style.display = 'none';
			document.getElementById(in_box).style.display = 'none';
			document.getElementById(in_lab).style.display = 'none';
			document.getElementById(tin_box).style.display = 'none';
			document.getElementById(m_box).style.display = 'none';
			document.getElementById(cm_box).style.display = 'initial';
			break;
	}

	document.getElementById(ft_box).value = isNaN(document.getElementById(ft_box).value) ? "" : document.getElementById(ft_box).value;
	document.getElementById(in_box).value = isNaN(document.getElementById(in_box).value) ? "" : document.getElementById(in_box).value;
	document.getElementById(tin_box).value = isNaN(document.getElementById(tin_box).value) ? "" : document.getElementById(tin_box).value;
	document.getElementById(m_box).value = isNaN(document.getElementById(m_box).value) ? "" : document.getElementById(m_box).value;
	document.getElementById(cm_box).value = isNaN(document.getElementById(cm_box).value) ? "" : document.getElementById(cm_box).value;
}

function bmi_wt_click(u_select, lbs_box, kg_box) {
	var u = document.getElementById(u_select).value;
	var wt = NaN;

	switch(u) {
		case 'lbs':
			wt = parseFloat(document.getElementById(lbs_box).value);
			if(!isNaN(wt)) {
				document.getElementById(kg_box).value = Math.round(10 * wt / 2.205) / 10;
			}
			break;
		case 'kg':
			wt = parseFloat(document.getElementById(kg_box).value);
			if(!isNaN(wt)) {
				document.getElementById(lbs_box).value = Math.round(10 * wt * 2.205) / 10;
			}
			break;
	}
}

function bmi_wt_change(u_select, lbs_box, kg_box) {
	var u = document.getElementById(u_select).value;

	switch(u) {
		case 'lbs':
			document.getElementById(lbs_box).style.display = 'initial';
			document.getElementById(kg_box).style.display = 'none';
			break;
		case 'kg':
			document.getElementById(lbs_box).style.display = 'none';
			document.getElementById(kg_box).style.display = 'initial';
			break;
	}
}

function bmi(ht_u_select, ht_ft_box, ht_in_box, ht_tin_box, ht_m_box, ht_cm_box, wt_u_select, wt_lbs_box, wt_kg_box, bmi_box) {
	var ht_u = document.getElementById(ht_u_select).value;
	var wt_u = document.getElementById(wt_u_select).value;
	var ht = NaN;
	var wt = NaN;

	switch(ht_u) {
		case 'ft+in':
			ht = 12 * (!isNaN(parseFloat(document.getElementById(ht_ft_box).value)) ? parseFloat(document.getElementById(ht_ft_box).value) : 0);
			ht += !isNaN(parseFloat(document.getElementById(ht_in_box).value)) ? parseFloat(document.getElementById(ht_in_box).value) : 0;
			ht *= 2.54/100;
			break;
		case 'in':
			ht = parseFloat(document.getElementById(ht_tin_box).value) * 2.54 / 100;
			break;
		case 'm':
			ht = parseFloat(document.getElementById(ht_m_box).value);
			break;
		case 'cm':
			ht = parseFloat(document.getElementById(ht_cm_box).value) / 100;
			break;
	}

	switch(wt_u) {
		case 'lbs':
			wt = parseFloat(document.getElementById(wt_lbs_box).value) / 2.205;
			break;
		case 'kg':
			wt = parseFloat(document.getElementById(wt_kg_box).value);
			break;
	}

	if(!isNaN(ht) && !isNaN(wt)) {
		document.getElementById(bmi_box).value = Math.round(10 * wt / Math.pow(ht,2)) / 10;
	}

	if(document.getElementById(bmi_box).value == Infinity || document.getElementById(bmi_box).value < 0) {
		document.getElementById(bmi_box).value = "";
	}
}

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