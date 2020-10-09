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
// TODO: get cyracom number
var cyracom_num = '6176433344';
var pager_num = '6177245700';

var acholi = new Lang('Acholi (Sudan-Uganda)', '264');
var afar = new Lang('Afar', '438');
var afghan = new Lang('Afghan', '265');
var afrikaans = new Lang('afrikaans', '224');
var akan = new Lang('Akan', '016');
var akateko = new Lang('Akateko', '418');
var aklan = new Lang('Aklan', '120');
var albanian = new Lang('Albanian', '070');
var amharic = new Lang('Amharic', '027');
var apache = new Lang('Apache', '323');
var arabic = new Lang('Arabic', '090');
var arabic_egyptian = new Lang('Arabic (Egyptian)', '398');
var arabic_gulf = new Lang('Arabic (Gulf)', '401');
var arabic_iraqi = new Lang('Arabic (Iraqi)', '399');
var arabic_moroccan = new Lang('Arabic (Moroccan)', '381');
var arabic_saudi = new Lang('Arabic (Saudi)', '400');
var arabic_sudanese = new Lang('Arabic (Sudanese)', '311');
var arabic_yemeni = new Lang('Arabic (Yemeni)', '387');
var armenian = new Lang('Armenian', '072');
var armenian_eastern = new Lang('Armenian (Eastern)', '420');
var armenian_western = new Lang('Armenian (Western)', '421');
var ashanti = new Lang('Ashanti', '365');
var asl = new Lang('American Sign Language', '404','30007');
var assyrian = new Lang('Assyrian', '139');
var azerbaijani = new Lang('Azerbaijani', '109');
var bahasa = new Lang('Bahasa', '343');
var brunei = new Lang('Brunei', '343');
var baluchi = new Lang('Baluchi', '394');
var bambara = new Lang('Bambara', '019');
var banda = new Lang('Banda', '267');
var bangi = new Lang('Bangi', '268');
var baoan = new Lang('Bao-an', '252');
var basque = new Lang('Basque', '136');
var bassa = new Lang('Bassa', '314');
var belorusian = new Lang('Belorusian', '225');
var bemba = new Lang('Bemba (Zambia)', '324');
var bengali = new Lang('Bengali', '084');
var berber = new Lang('Berber', '269');
var bhojpuri = new Lang('Bhojpuri', '085');
var bhutanese = new Lang('Bhutanese', '391');
var bikol = new Lang('Bikol', '118');
var borana = new Lang('Borana', '382');
var bosnian = new Lang('Bosnian', '263');
var bulgarian = new Lang('Bulgarian', '069');
var burmese = new Lang('Burmese', '042');
var cakchiquel = new Lang('Cakchiquel', '325');
var cambodian = new Lang('Cambodian', '048');
var cantonese = new Lang('Cantonese', '031');
var cape_verdean = new Lang('Cape Verdean', '013');
var catalan = new Lang('Catalan', '132');
var cebuano = new Lang('Cebuano', '122');
var chaldean = new Lang('Chaldean', '138');
var chamorro = new Lang('Chamorro', '403');
var chaochow = new Lang('Chao Chow', '038');
var chavacano = new Lang('Chavacano', '226');
var cherokee = new Lang('Cherokee', '344');
var chichewa = new Lang('Chichewa', '025');
var chimwiini = new Lang('Chimwiini', '433');
var chin = new Lang('Chin', '378');
var chin_falam = new Lang('Chin (Falam)', '405');
var chin_hakha = new Lang('Chin (Hakha)', '406');
var chin_matu = new Lang('Chin (Matu)', '426');
var chin_tedim = new Lang('Chin (Tedim)', '408');
var chin_zanniat = new Lang('Chin (Zanniat)', '417');
var chin_zophei = new Lang('Chin (Zophei)', '407');
var chinese = new Lang('Chinese', '030');
var chittagonian = new Lang('Chittagonian', '434');
var chuichow = new Lang('Chui Chow', '346');
var chuj = new Lang('Chuj', '429');
var chungshan = new Lang('Chungshan', '034');
var chuukese = new Lang('Chuukese', '316');
var cree = new Lang('Cree', '347');
var creek = new Lang('Creek', '348');
var crioulo = new Lang('Crioulo', '341');
var croatian = new Lang('Croatian', '067');
var czech = new Lang('Czech', '063');
var dakota = new Lang('Dakota', '271');
var danish = new Lang('Danish', '055');
var dari = new Lang('Dari (Afghanistan)', '111');
var dinka = new Lang('Dinka (Sudan)', '131');
var dutch = new Lang('Dutch', '056');
var dzongkha = new Lang('Dzongkha', '392');
var ebon = new Lang('Ebon', '272');
var edo = new Lang('Edo', '273');
var eritrean = new Lang('Eritrean', '274');
var eskimo = new Lang('Eskimo', '349');
var esperanto = new Lang('Esperanto', '326');
var estonian = new Lang('Estonian', '077');
var ethiopian = new Lang('Ethiopian', '275');
var ewe = new Lang('Ewe', '321');
var fang = new Lang('Fang', '327');
var fante = new Lang('Fante', '074');
var farsi = new Lang('Farsi', '107');
var fijian = new Lang('Fijian', '127');
var fijian_polynesian = new Lang('Fijian Polynesian', '017');
var filipino = new Lang('Filipino', '395');
var finnish = new Lang('Finnish', '052');
var flemish = new Lang('Flemish', '227');
var fon = new Lang('Fon', '228');
var foochow = new Lang('Foochow', '276');
var french = new Lang('French', '058');
var french_canadian = new Lang('French Canadian', '383');
var french_cajun = new Lang('French Cajun', '277');
var french_creole = new Lang('French Creole', '217');
var frisian = new Lang('Frisian', '278');
var fukienese = new Lang('Fukienese', '032');
var fulani = new Lang('Fulani', '014');
var fuzhou = new Lang('Fuzhou', '229');
var ga = new Lang('Ga', '230');
var gaddang = new Lang('Gaddang', '231');
var gaelic = new Lang('Gaelic', '232');
var galician = new Lang('Galician', '250');
var gallinya = new Lang('Gallinya', '280');
var gana = new Lang('Gana', '281');
var ganda = new Lang('Ganda (Uganda)', '282');
var garre = new Lang('Garre', '388');
var georgian = new Lang('Georgian', '216');
var german = new Lang('German', '057');
var grebo = new Lang('Grebo', '322');
var greek = new Lang('Greek', '071');
var guamanian = new Lang('Guamanian', '125');
var guarani = new Lang('Guarani', '350');
var gujarati = new Lang('Gujarati', '083');
var gwa = new Lang('Gwa', '284');
var haitian_creole = new Lang('Haitian Creole', '129');
var hakka = new Lang('Hakka', '039');
var hamerbana = new Lang('Hamer-Bana', '396');
var hausa = new Lang('Hausa', '022');
var hawaii_creole = new Lang('Hawaii Creole', '285');
var hebrew = new Lang('Hebrew', '106');
var hindi = new Lang('Hindi', '082');
var hindko = new Lang('Hindko', '351');
var hindustani = new Lang('Hindustani', '319');
var hmong = new Lang('Hmong', '046');
var hokkien = new Lang('Hokkien', '286');
var hopi = new Lang('Hopi', '310');
// var  = new Lang('', '');

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
// var other = new Lang('Other Language', '', '30009');

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
		case 'arabic':
			lang = arabic;
			break;
		case 'haitian_creole':
			lang = haitian_creole;
			break;
		case 'portuguese_brazilian':
			lang = portuguese_brazilian;
			break;
		case 'spanish':
			lang = spanish;
			break;
		case 'Frequently':
			lang = Frequently;
			break;
		case 'arabic_iraqi':
			lang = arabic_iraqi;
			break;
		case 'arabic_moroccan':
			lang = arabic_moroccan;
			break;
		case 'arabic_saudi':
			lang = arabic_saudi;
			break;
		case 'arabic_sudanese':
			lang = arabic_sudanese;
			break;
		case 'arabic_yemeni':
			lang = arabic_yemeni;
			break;
		case 'asl':
			lang = asl;
			break;
		case 'cantonese':
			lang = cantonese;
			break;
		case 'cape_verdean':
			lang = cape_verdean;
			break;
		case 'chinese':
			lang = chinese;
			break;
		case 'french_creole':
			lang = french_creole;
			break;
		case 'filipino':
			lang = filipino;
			break;
		case 'french':
			lang = french;
			break;
		case 'hebrew':
			lang = hebrew;
			break;
		case 'hindi':
			lang = hindi;
			break;
		case 'hindustani':
			lang = hindustani;
			break;
		case 'indonesian':
			lang = indonesian;
			break;
		case 'italian':
			lang = italian;
			break;
		case 'japanese':
			lang = japanese;
			break;
		case 'korean':
			lang = korean;
			break;
		case 'mandarin':
			lang = mandarin;
			break;
		case 'portuguese':
			lang = portuguese;
			break;
		case 'punjabi':
			lang = punjabi;
			break;
		case 'russian':
			lang = russian;
			break;
		case 'swahili':
			lang = swahili;
			break;
		case 'taiwanese':
			lang = taiwanese;
			break;
		case 'telugu':
			lang = telugu;
			break;
		case 'thai':
			lang = thai;
			break;
		case 'urdu':
			lang = urdu;
			break;
		case 'vietnamese':
			lang = vietnamese;
			break;
		// case 'other':
		// 	lang = other;
		// 	break;
	}
	document.getElementById(language_display).innerHTML = lang.name;

	document.getElementById(cyracom_id).innerHTML = '';
	var cyracom = new QRCode(cyracom_id, {
		// PIN + MRN + 1 + language (2 for Spanish, 3 for other) + 1 + 2
		text: cyracom_num+(pin.length == 0 ? '' : ','+pin+(mrn.length==0 ? '' : ','+mrn+',,1'+(language == 'other' ? '' : (language == 'spanish' ? ',2,' : ',3,'+lang.cyracom+',')+'1,2'))),
		width: 128,
		height: 128,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
	document.getElementById(cyracom_display).innerHTML = (pin == '' ? '' : "PIN: " + pin + "<br />") + (lang.cyracom == "" ? "" : "Language code: " + lang.cyracom);

	document.getElementById(pager_id).innerHTML = '';
	var pager = new QRCode(pager_id, {
		text: pager_num+(lang.pager == undefined ? '' : ','+lang.pager),
		width: 128,
		height: 128,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
	document.getElementById(pager_display).innerHTML = (lang.pager == undefined ? "" : "Pager: " + lang.pager);

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
	text: cyracom_num+','+pin,
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
