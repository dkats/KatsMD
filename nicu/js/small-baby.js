///////////////////////////////////////
// IDS OF ELEMENTS
///////////////////////////////////////

var ga_w_box = 'ga_w';
var ga_d_box = 'ga_d';
var wt_u_select = 'wt_u';
var wt_g_box = 'wt_g';
var wt_kg_box = 'wt_kg';
var wt_lbs_box = 'wt_lbs';
var wt_lbs_lab = 'wt_lbs_lab';
var wt_oz_box = 'wt_oz';
var wt_oz_lab = 'wt_oz_lab';
var small_baby_box = 'small-baby';
var thermo_box = 'thermo';
var surf_box = 'surf';
var ra_trial_box = 'ra-trial';
var nasal_cannula_box = 'nasal-cannula';
var caffeine_box = 'caffeine';
var tfg_box = 'tfg';
var ivf_box = 'ivf';
var ivf_same_day_box = 'ivf-same-day';
var ivf_extra_box = 'ivf-extra';
var feed_type_box = 'feed-type';
var feed_amt_box = 'feed-amt';
var feed_fortify_box = 'feed-fortify';
var feed_fortifier_box = 'feed-fortifier';
var feed_formula_box = 'feed-formula';
var lab_freq_box = 'lab-freq';

///////////////////////////////////////
// CLEANING INPUTS
///////////////////////////////////////

function only_whole_num(field) {
	var str = document.getElementById(field).value;

	if(str.length > 0) {
		var charCode = str[str.length-1].charCodeAt();
		// Delete if it's not a digit
		if(charCode > 31 && (charCode < 48 || charCode > 57)) {
			document.getElementById(field).value = str.substring(0,str.length-1);
			return false;
		}
		return true;
	}
	return false;
}

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

function lowerFirstChar(str) {
	return (str.charAt(0).toLowerCase() + str.slice(1));
}

function wt_click() {
	var u = document.getElementById(wt_u_select).value;
	var wt = NaN;

	switch(u) {
		case 'lbs+oz':
			wt = 16*parseInt(document.getElementById(wt_lbs_box).value) + parseInt(document.getElementById(wt_oz_box).value);
			if(!isNaN(wt)) {
				document.getElementById(wt_g_box).value = Math.round(28.3495 * wt);
				document.getElementById(wt_kg_box).value = parseInt(document.getElementById(wt_g_box).value) / 1000;
			}
			break;
		case 'kg':
			wt = parseFloat(document.getElementById(wt_kg_box).value);
			if(!isNaN(wt)) {
				document.getElementById(wt_g_box).value = Math.round(wt * 1000);
				document.getElementById(wt_lbs_box).value = Math.floor((wt * 1000 / 28.3495) / 16);
				document.getElementById(wt_oz_box).value = Math.round((wt * 1000 / 28.3495) % 16);
			}
			break;
		case 'g':
			wt = parseInt(document.getElementById(wt_g_box).value);
			if(!isNaN(wt)) {
				document.getElementById(wt_kg_box).value = wt / 1000;
				document.getElementById(wt_lbs_box).value = Math.floor((wt / 28.3495) / 16);
				document.getElementById(wt_oz_box).value = Math.round((wt / 28.3495) % 16);
			}
			break;
	}
}

function wt_change() {
	var u = document.getElementById(wt_u_select).value;

	switch(u) {
		case 'lbs+oz':
			document.getElementById(wt_g_box).style.display = 'none';
			document.getElementById(wt_kg_box).style.display = 'none';
			document.getElementById(wt_lbs_box).style.display = 'initial';
			document.getElementById(wt_lbs_lab).style.display = 'initial';
			document.getElementById(wt_oz_box).style.display = 'initial';
			document.getElementById(wt_oz_lab).style.display = 'initial';
			break;
		case 'kg':
			document.getElementById(wt_g_box).style.display = 'none';
			document.getElementById(wt_kg_box).style.display = 'initial';
			document.getElementById(wt_lbs_box).style.display = 'none';
			document.getElementById(wt_lbs_lab).style.display = 'none';
			document.getElementById(wt_oz_box).style.display = 'none';
			document.getElementById(wt_oz_lab).style.display = 'none';
			break;
		case 'g':
			document.getElementById(wt_g_box).style.display = 'initial';
			document.getElementById(wt_kg_box).style.display = 'none';
			document.getElementById(wt_lbs_box).style.display = 'none';
			document.getElementById(wt_lbs_lab).style.display = 'none';
			document.getElementById(wt_oz_box).style.display = 'none';
			document.getElementById(wt_oz_lab).style.display = 'none';
			break;
	}

	document.getElementById(wt_g_box).value = isNaN(document.getElementById(wt_g_box).value) ? "" : document.getElementById(wt_g_box).value;
	document.getElementById(wt_kg_box).value = isNaN(document.getElementById(wt_kg_box).value) ? "" : document.getElementById(wt_kg_box).value;
	document.getElementById(wt_lbs_box).value = isNaN(document.getElementById(wt_lbs_box).value) ? "" : document.getElementById(wt_lbs_box).value;
	document.getElementById(wt_oz_box).value = isNaN(document.getElementById(wt_oz_box).value) ? "" : document.getElementById(wt_oz_box).value;
}

///////////////////////////////////////
// GUIDELINES
///////////////////////////////////////

// return 'Yes' if GA<32w or EFW≤1500g; 'No' otherwise
function small_baby(ga_w, wt_g) {
	if(ga_w < 32 || wt_g <= 1500) {
		return 'Yes';
	}
	return 'No';
}

// return 'Yes' if GA<32w or EFW≤1500g; 'No' otherwise
function thermoregulatory(ga_w, wt_g) {
	if(ga_w < 32 || wt_g <= 1500) {
		return 'Yes';
	}
	return 'No';
}

// return 'Bring' if GA<27w; 'Use clinical judgement' otherwise
function surfactant(ga_w) {
	if(ga_w < 27) {
		return 'Bring';
	}
	return 'Use clinical judgement';
}

// return 'When >32 weeks and CPAP 5 FiO2 21% for 5 days' if GA<32w; 'If CPAP 5 FiO2 21% for 5 days' otherwise
function ra_trial(ga_w) {
	var fio2 = 'FiO2';

	if(ga_w < 32) {
		return 'When >32 weeks and CPAP 5 ' + fio2 + ' 21% for 5 days';
	}
	return 'If CPAP 5 ' + fio2 + ' 21% for 5 days';
}

// return 'When >34 weeks and showing feeding cues' if GA<34w; 'When showing feeding cues' otherwise
function nasal_cannula(ga_w) {
	if(ga_w < 34) {
		return 'When >34 weeks and showing feeding cues';
	}
	return 'When showing feeding cues';
}

// return 'Start within 6 hours of life' if GA<30w or Wt<1250g; 'Use clinical judgement' otherwise
function caffeine(ga_w, wt_g) {
	if((!isNaN(ga_w) && ga_w < 30) || (!isNaN(wt_g) && wt_g <= 1250)) {
		return 'Start within 6 hours of life';
	}
	return 'Use clinical judgement';
}

function tfg(ga_w) {
	if(ga_w < 28) {
		return '115 mL/kg/d';
	} else if(ga_w < 32) {
		return '95 mL/kg/d';
	} else if(ga_w < 34) {
		return '80 mL/kg/d';
	} else if(ga_w < 37) {
		return '40-80 mL/kg/d';
	}
	return '60 mL/kg/d';
}

function feed_amt(ga_w) {
	if(ga_w < 28) {
		return 'Start 15 mL/kg/d x2d, then advance by 10 mL/kg/d BID';
	} else if(ga_w < 32) {
		return 'Start 15 mL/kg/d x1d, then advance by 10 mL/kg/d BID';
	} else if(ga_w < 34) {
		return 'Start 30 mL/kg/d x1d, then advance by 15 mL/kg/d BID';
	}
	return 'Start 40 mL/kg/d x12h, then advance by 15 mL/kg/d BID';
}

function feed_fortify(ga_w, wt_g) {
	if((!isNaN(ga_w) && ga_w < 34) || (!isNaN(wt_g) && wt_g <= 1800)) {
		return 'Yes';
	}
	return 'No';
}

function feed_fortifier(ga_w, wt_g) {
	if((!isNaN(ga_w) && ga_w < 34) || (!isNaN(wt_g) && wt_g <= 1800)) {
		return 'Liquid HMF (powder if Kosher/Halal)';
	} else if((!isNaN(ga_w) && ga_w > 37) || (!isNaN(wt_g) && wt_g <= 2500)) {
		return 'Enfamil';
	}
	return 'Neosure';
}

function feed_formula(ga_w, wt_g) {
	if((!isNaN(ga_w) && ga_w < 34) || (!isNaN(wt_g) && wt_g <= 1800)) {
		return 'Premature Enfamil';
	} else if((!isNaN(ga_w) && ga_w > 37) || (!isNaN(wt_g) && wt_g >= 2500)) {
		return 'Enfamil';
	}
	return 'Neosure';
}

function ivf(ga_w) {
	if(ga_w < 28) {
		return '100 mL/kg/d';
	} else if(ga_w < 32) {
		return '80 mL/kg/d';
	} else if(ga_w < 34) {
		return '50 mL/kg/d';
	} else if(ga_w < 37) {
		return '0-40 mL/kg/d';
	}
	return '20 mL/kg/d';
}

function ivf_same_day(ga_w) {
	if(ga_w < 32) {
		return '60 mL/kg/d';
	}
	return 'None';
}

function ivf_extra(ga_w) {
	if(ga_w < 28) {
		return '40 mL/kg/d D5 or D10';
	} else if(ga_w < 32) {
		return '20 mL/kg/d D10';
	} else if(ga_w < 34) {
		return '50 mL/kg/d D10 or >D10';
	} else if(ga_w < 37) {
		return '0-40 mL/kg/d D10 or >D10';
	}
	return '20 mL/kg/d D10 or >D10';
}

// return 'BID and PRN' if GA<28w; 'qDay and PRN' otherwise
function lab_freq(ga_w) {
	if(ga_w < 28) {
		return 'BID and PRN';
	}
	return 'qDay and PRN';
}

///////////////////////////////////////
// WRAPPER
///////////////////////////////////////

function wrap_output() {
	var ga_w = parseInt(document.getElementById(ga_w_box).value);
	var wt_g = parseInt(document.getElementById(wt_g_box).value);

	document.getElementById(small_baby_box).value = small_baby(ga_w, wt_g);
	document.getElementById(thermo_box).value = thermoregulatory(ga_w, wt_g);
	document.getElementById(surf_box).value = surfactant(ga_w);
	document.getElementById(ra_trial_box).value = ra_trial(ga_w);
	document.getElementById(nasal_cannula_box).value = nasal_cannula(ga_w);
	document.getElementById(caffeine_box).value = caffeine(ga_w, wt_g);
	document.getElementById(tfg_box).value = tfg(ga_w);
	document.getElementById(feed_amt_box).value = feed_amt(ga_w);
	document.getElementById(feed_fortify_box).value = feed_fortify(ga_w, wt_g);
	document.getElementById(feed_fortifier_box).value = feed_fortifier(ga_w, wt_g);
	document.getElementById(feed_formula_box).value = feed_formula(ga_w, wt_g);
	document.getElementById(ivf_box).value = ivf(ga_w);
	document.getElementById(ivf_same_day_box).value = ivf_same_day(ga_w);
	document.getElementById(ivf_extra_box).value = ivf_extra(ga_w);
	document.getElementById(lab_freq_box).value = lab_freq(ga_w);

	// Highlight Small Baby box
	if(document.getElementById(small_baby_box).value == 'Yes') {
		document.getElementById(small_baby_box).style.backgroundColor = "#FDFF47";
		document.getElementById(small_baby_box).style.fontWeight = "bold";
	} else {
		document.getElementById(small_baby_box).style.backgroundColor = "#ddd";
	}
}

///////////////////////////////////////
// COPY FUNCTIONS
///////////////////////////////////////

function copyToClipboard(text) {
	const elem = document.createElement('textarea');
	elem.value = text;
	document.body.appendChild(elem);
	elem.select();
	document.execCommand('copy');
	document.body.removeChild(elem);
}

function clipResp() {
	out = '';
	out += 'Room air trial: Consider ' + lowerFirstChar(document.getElementById(ra_trial_box).value) + '\n';
	out += 'Nasal cannula: Consider ' + lowerFirstChar(document.getElementById(nasal_cannula_box).value) + '\n';
	out += 'Caffeine: ' + document.getElementById(caffeine_box).value;
	copyToClipboard(out);
}

function clipFEN() {
	out = '';
	out += 'Total fluid goal: ' + lowerFirstChar(document.getElementById(tfg_box).value) + '\n';
	out += 'Feeding advancement: ' + lowerFirstChar(document.getElementById(feed_amt_box).value) + '\n';
	out += (document.getElementById(feed_fortify_box).value == 'Yes' ? 'Plan to fortify feeds when rate >80 mL/kg/d\n' : '');
	copyToClipboard(out);
}

