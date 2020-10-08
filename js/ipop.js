function getChecked(radios) {
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			return(radios[i].value);
		}
	}
}

function validate(id) {
	var input = document.getElementById(id).value;
	var out = '';
	for(let i = 0; i < input.length; i++) {
		var curr_char = input[i];
		if(curr_char >= '0' && curr_char <= '9') {
			out += curr_char;
		}
	}

	document.getElementById(id).value = out;
	return(out);
}

class Lang {
	constructor(name, cyracom, pager, hours) {
		this._name = name;
		this._cyracom = cyracom;
		this._pager = pager;
		this._hours = hours;
	}

	get name() {
		return this._name;
	}

	get cyracom() {
		return this._cyracom;
	}

	get pager() {
		return this._pager;
	}

	get page() {
		return this._pager;
	}

	get beeper() {
		return this._pager;
	}

	get beep() {
		return this._pager;
	}

	get hours() {
		return this._hours;
	}

	get hrs() {
		return this._hours;
	}
}

var ipop_id = 'ipop';
var cyracom_id = 'cyracom';
var pager_id = 'pager';
var language_id = 'language';
var mrn_id = 'mrn';
var location_id = 'location';
var location_other_id = 'location_other_pin';
var language_display = 'language_display';
var hours_id = 'hours';
var cyracom_display = 'cyracom_display';
var pager_display = 'pager_display';

document.getElementById(mrn_id).style.backgroundColor = "pink";

var ipop_num = '6176433344';
var pager_num = '6177245700';

var arabic = new Lang('Arabic', '090');
var arabic_iraqi = new Lang('Arabic (Iraqi)', '399');
var arabic_moroccan = new Lang('Arabic (Moroccan)', '381');
var arabic_saudi = new Lang('Arabic (Saudi)', '400');
var arabic_sudanese = new Lang('Arabic (Sudanese)', '311');
var arabic_yemeni = new Lang('Arabic (Yemeni)', '387');
var asl = new Lang('American Sign Language', '404','30007');
var cantonese = new Lang('Cantonese', '031');
var cape_verdean = new Lang('Cape Verdean', '013');
var chinese = new Lang('Chinese', '030');
var creole_french = new Lang('French Creole', '217');
var filipino = new Lang('Filipino', '395');
var french = new Lang('French', '058');
var haitian_creole = new Lang('Haitian Creole', '129');
var hebrew = new Lang('Hebrew', '106');
var hindi = new Lang('Hindi', '082');
var hindustani = new Lang('Hindustani', '319');
var indonesian = new Lang('Indonesian', '050');
var italian = new Lang('Italian', '059');
var japanese = new Lang('Japanese', '040');
var korean = new Lang('Korean', '041');
var mandarin = new Lang('Mandarin', '035');
var portuguese = new Lang('Portuguese', '061', '30003');
var portuguese_brazilian = new Lang('Brazilian Portuguese', '270', '30003');
var punjabi = new Lang('Punjabi', '080');
var russian = new Lang('Russian', '078');
var spanish = new Lang('Spanish', '060', '30001');
var swahili = new Lang('Swahili', '026');
var taiwanese = new Lang('Taiwanese', '033');
var telugu = new Lang('Telugu', '303');
var thai = new Lang('Thai', '047');
var urdu = new Lang('Urdu', '079');
var vietnamese = new Lang('Vietnamese', '049');
// var  = new Lang('');
var other = new Lang('Other Language', '', '30009');

var refresh = function() {
	var language = document.getElementById(language_id).value;

	var mrn = validate(mrn_id);
	if(mrn.length < 7) {
		document.getElementById(mrn_id).style.backgroundColor = "pink";
	} else {
		document.getElementById(mrn_id).style.backgroundColor = "";
	}

	var pin = getChecked(document.getElementsByName(location_id));
	if(pin == "other") {
		pin = validate(location_other_id);
	}

	var lang = null;
	switch(language) {
		case 'asl':
			lang = asl;
			break;
		case 'cantonese':
			lang = cantonese;
			break;
		case 'haitian_creole':
			lang = haitian_creole;
			break;
		case 'portuguese_brazilian':
			lang = portuguese_brazilian;
			break;
		case 'portuguese':
			lang = portuguese;
			break;
		case 'spanish':
			lang = spanish;
			break;
		case 'other':
			lang = other;
			break;
	}
	document.getElementById(language_display).innerHTML = lang.name;

	document.getElementById(cyracom_id).innerHTML = '';
	var cyracom = new QRCode(cyracom_id, {
		// PIN + MRN + 1 + language (2 for Spanish, 3 for other) + 1 + 2
		text: ipop_num+(pin.length == 0 ? '' : ','+pin+(mrn.length==0 ? '' : ','+mrn+',,1'+(language == 'other' ? '' : (language == 'spanish' ? ',2,' : ',3,'+lang.cyracom+',')+'1,2'))),
		width: 128,
		height: 128,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
	document.getElementById(cyracom_display).innerHTML = "PIN: " + pin + "<br />Language code: " + lang.cyracom;

	document.getElementById(pager_id).innerHTML = '';
	var pager = new QRCode(pager_id, {
		text: pager_num+(lang.pager == undefined ? '' : ','+lang.pager),
		width: 128,
		height: 128,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
	document.getElementById(pager_display).innerHTML = "Pager: " + lang.pager;

	document.getElementById(hours_id).innerHTML = (lang.hrs == undefined ? '' : lang.hrs);
}

document.getElementById(language_display).innerHTML = "Spanish";

var ipop = new QRCode("ipop", {
	text: ipop_num,
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});

var pin = getChecked(document.getElementsByName('location'));
var cyracom = new QRCode("cyracom", {
	text: ipop_num+','+pin,
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
document.getElementById(cyracom_display).innerHTML = "PIN: " + pin + "<br />Language code: " + spanish.cyracom;

var pager = new QRCode("pager", {
	text: pager_num+','+spanish.pager,
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
document.getElementById(pager_display).innerHTML = "Pager: " + spanish.pager;
