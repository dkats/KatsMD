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
	constructor(name, cyracom, pager, hour_mf_start, hour_mf_end, hour_ss_start, hour_ss_end) {
		this._name = name;
		this._cyracom = cyracom;
		this._pager = pager;
		this._hour_mf_start = hour_mf_start;
		this._hour_mf_end = hour_mf_end;
		this._hour_ss_start = hour_ss_start;
		this._hour_ss_end = hour_ss_end;
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

	get hour_mf_start() {
		return this._hour_mf_start;
	}

	get hour_mf_end() {
		return this._hour_mf_end;
	}

	get hours_mf() {
		return this._hour_mf_start + "&ndash;" + this._hour_mf_end;
	}

	get hours_mf_inv() {
		return this._hour_mf_end + "&ndash;" + this._hour_mf_start;
	}

	get hour_ss_start() {
		return this._hour_ss_start;
	}

	get hour_ss_end() {
		return this._hour_ss_end;
	}

	get hours_ss() {
		return this._hour_ss_start + "&ndash;" + this._hour_ss_end;
	}

	get hours_ss_inv() {
		return this._hour_ss_end + "&ndash;" + this._hour_ss_start;
	}

	get hours() {
		if(this._hour_mf_start == undefined && this._hour_mf_end == undefined) {
			return undefined;
		}
		if(this._hour_ss_start != undefined && this._hour_ss_end != undefined) {
			if(this._hour_ss_start != this._hour_mf_start && this._hour_ss_end != this._hour_mf_end) {
				return "Weekdays: " + this.hours_mf + "<br />Weekends: " + this.hours_ss;
			}
			return "Every day: " + this.hours_mf;
		}
		return "Weekdays: " + this.hours_mf;
	}

	get hours_inv() {
		if(this._hour_mf_start == undefined && this._hour_mf_end == undefined) {
			return undefined;
		}
		if(this._hour_ss_start != undefined && this._hour_ss_end != undefined) {
			if(this._hour_ss_start != this._hour_mf_start && this._hour_ss_end != this._hour_mf_end) {
				return "Weekdays: " + this.hours_mf_inv + "<br />Weekends: " + this.hours_ss_inv;
			}
			return "Every day: " + this.hours_mf_inv;
		}
		return "Weekdays: " + this.hours_mf_inv + "<br />Weekends: all day";
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
var hours_on_id = 'hours_on';
var hours_off_id = 'hours_off';
var after_hours_id = 'after_hours';
var cyracom_display = 'cyracom_display';
var pager_display = 'pager_display';
var qr_is_class = 'qris';
var qr_pager_class = 'qrpager';
var pause_id = 'pause';

document.getElementById(mrn_id).style.backgroundColor = "pink";

var ipop_num = '6176433344';
var cyracom_num = '8554964429';
var pager_num = '6177245700';

var acholi = new Lang('Acholi (Sudan-Uganda)', '264');
var afar = new Lang('Afar', '438');
var afghan = new Lang('Afghan', '265');
var afrikaans = new Lang('Afrikaans', '224');
var akan = new Lang('Akan', '016');
var akateko = new Lang('Akateko', '418');
var aklan = new Lang('Aklan', '120');
var albanian = new Lang('Albanian', '070');
var asl = new Lang('American Sign Language', '404', '30007', '7am', '8pm');
var amharic = new Lang('Amharic', '027', undefined, '7am', '8pm');
var apache = new Lang('Apache', '323');
var arabic = new Lang('Arabic', '090', '30009', '7am', '8pm');
var arabic_egyptian = new Lang('Arabic (Egyptian)', '398', '30009', '7am', '8pm');
var arabic_gulf = new Lang('Arabic (Gulf)', '401', '30009', '7am', '8pm');
var arabic_iraqi = new Lang('Arabic (Iraqi)', '399', '30009', '7am', '8pm');
var arabic_levantine = new Lang('Arabic (Levantine)', '402', '30009', '7am', '8pm');
var arabic_moroccan = new Lang('Arabic (Moroccan)', '381', '30009', '7am', '8pm');
var arabic_saudi = new Lang('Arabic (Saudi)', '400', '30009', '7am', '8pm');
var arabic_sudanese = new Lang('Arabic (Sudanese)', '311', '30009', '7am', '8pm');
var arabic_yemeni = new Lang('Arabic (Yemeni)', '387', '30009', '7am', '8pm');
var armenian = new Lang('Armenian', '072');
var armenian_eastern = new Lang('Armenian (Eastern)', '420');
var armenian_western = new Lang('Armenian (Western)', '421');
var ashanti = new Lang('Ashanti', '365');
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
var bengali = new Lang('Bengali', '084', undefined, '7am', '8pm');
var berber = new Lang('Berber', '269');
var bhojpuri = new Lang('Bhojpuri', '085');
var bhutanese = new Lang('Bhutanese', '391');
var bikol = new Lang('Bikol', '118');
var borana = new Lang('Borana', '382');
var bosnian = new Lang('Bosnian', '263');
var bulgarian = new Lang('Bulgarian', '069');
var burmese = new Lang('Burmese', '042', undefined, '7am', '8pm');
var cakchiquel = new Lang('Cakchiquel', '325');
var cambodian = new Lang('Cambodian', '048', '30009', '7am', '8pm');
var cantonese = new Lang('Cantonese', '031', '30009', '7am', '8pm');
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
var chinese = new Lang('Chinese', '030', '30009', '7am', '8pm');
var chittagonian = new Lang('Chittagonian', '434');
var chuichow = new Lang('Chui Chow', '346');
var chuj = new Lang('Chuj', '429');
var chungshan = new Lang('Chungshan', '034');
var chuukese = new Lang('Chuukese', '316');
var trukese_chuukese = new Lang('Chuukese/Trukese', '342');
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
var french = new Lang('French', '058', '30009', '7am', '8pm');
var french_canadian = new Lang('French Canadian', '383', '30009', '7am', '8pm');
var french_cajun = new Lang('French Cajun', '277');
var french_creole = new Lang('French Creole', '217', '30009', '7am', '8pm');
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
var greek = new Lang('Greek', '071', undefined, '7am', '8pm');
var guamanian = new Lang('Guamanian', '125');
var guarani = new Lang('Guarani', '350');
var gujarati = new Lang('Gujarati', '083', undefined, '7am', '8pm');
var gwa = new Lang('Gwa', '284');
var haitian_creole = new Lang('Haitian Creole', '129');
var hakka = new Lang('Hakka', '039');
var hamerbana = new Lang('Hamer-Bana', '396');
var hausa = new Lang('Hausa', '022');
var hawaii_creole = new Lang('Hawaii Creole', '285');
var hebrew = new Lang('Hebrew', '106');
var hindi = new Lang('Hindi', '082', undefined, '7am', '8pm');
var hindko = new Lang('Hindko', '351');
var hindustani = new Lang('Hindustani', '319');
var hmong = new Lang('Hmong', '046');
var hokkien = new Lang('Hokkien', '286');
var hopi = new Lang('Hopi', '310');
var huibei = new Lang('Huibei', '233');
var huizhou = new Lang('Huizhou', '352');
var hunanese = new Lang('Hunanese', '147');
var hungarian = new Lang('Hungarian', '065');
var ibanag = new Lang('Ibanag', '234');
var icelandic = new Lang('Icelandic', '133');
var igbo = new Lang('Igbo', '218');
var ilocano = new Lang('Ilocano', '113');
var ilonggo = new Lang('Ilonggo', '121');
var indonesian = new Lang('Indonesian', '050');
var inupiaq = new Lang('Inupiaq', '018');
var italian = new Lang('Italian', '059', '30009', '7am', '8pm');
var jakartanese = new Lang('Jakartanese', '235');
var jamaicanenglish_creole = new Lang('Jamaican English Creole', '357');
var japanese = new Lang('Japanese', '040', undefined, '7am', '8pm');
var jarai = new Lang('Jarai', '411');
var javanese = new Lang('Javanese', '236');
var jingpho = new Lang('Jingpho', '379');
var jula = new Lang('Jula', '328');
var kachchi = new Lang('Kachchi', '371');
var kamba = new Lang('Kamba', '412');
var kanjobal = new Lang('Kanjobal', '288');
var kannada = new Lang('Kannada', '289');
var karen = new Lang('Karen', '369');
var karenni = new Lang('Karenni', '384');
var kashmiri = new Lang('Kashmiri', '237');
var kayah = new Lang('Kayah', '385');
var kazakh = new Lang('Kazakh', '238');
var kham = new Lang('Kham', '441');
var khmer = new Lang('Khmer', '023', '30009', '7am', '8pm');
var khmu = new Lang('Khmu', '044');
var kibajuni = new Lang('Kibajuni', '422');
var kikuyu = new Lang('Kikuyu', '239');
var kinya = new Lang('Kinya', '366');
var kirundi = new Lang('Kirundi', '338');
var kisii = new Lang('Kisii', '437');
var kiswahili = new Lang('Kiswahili', '424');
var kizigua = new Lang('Kizigua', '425');
var kongo = new Lang('Kongo', '376');
var korean = new Lang('Korean', '041');
var kotokoli = new Lang('Kotokoli', '440');
var krahn = new Lang('Krahn', '320');
var krio = new Lang('Krio', '241');
var kru = new Lang('Kru/Krumen', '364');
var kunama = new Lang('Kunama', '370');
var kurdish = new Lang('Kurdish', '140');
var kurdish_badini = new Lang('Kurdish (Badini)', '414');
var kurdish_kurmanji = new Lang('Kurdish (Kurmanji)', '372');
var kurdish_sorani = new Lang('Kurdish (Sorani)', '375');
var kyrgyz = new Lang('Kyrgyz', '240');
var lahu = new Lang('Lahu', '353');
var lakota = new Lang('Lakota', '143');
var lanzhou = new Lang('Lanzhou', '367');
var lao = new Lang('Lao', '043');
var latvian = new Lang('Latvian', '204');
var lingala = new Lang('Lingala', '024');
var lithuanian = new Lang('Lithuanian', '075');
var loma = new Lang('Loma', '313');
var luganda = new Lang('Luganda', '242');
var luo = new Lang('Luo', '329');
var luxembourgish = new Lang('Luxembourgish', '243');
var maaymaay = new Lang('Maay Maay', '315');
var macedonian = new Lang('Macedonian', '068');
var magahi = new Lang('Magahi', '087');
var maithili = new Lang('Maithili', '086');
var malagasy = new Lang('Malagasy', '244');
var malay = new Lang('Malay', '051');
var malayalam = new Lang('Malayalam', '088');
var malinke = new Lang('Malinke', '354');
var maltese = new Lang('Maltese', '245');
var mam = new Lang('Mam', '318');
var mandarin = new Lang('Mandarin', '035', '30009', '7am', '8pm');
var mandingo = new Lang('Mandingo', '015');
var mandinka = new Lang('Mandinka', '246');
var mankon = new Lang('Mankon', '247');
var mara = new Lang('Mara', '436');
var marathi = new Lang('Marathi', '205');
var marshallese = new Lang('Marshallese', '291');
var maya = new Lang('Maya', '355');
var mende = new Lang('Mende', '356');
var mien = new Lang('Mien', '045');
var mina = new Lang('Mina', '423');
var mirpuri = new Lang('Mirpuri', '373');
var mixteco = new Lang('Mixteco', '292');
var mixteco_alto = new Lang('Mixteco Alto', '415');
var mixteco_bajo = new Lang('Mixteco Bajo', '416');
var mizo = new Lang('Mizo', '091');
var mola = new Lang('Mola', '389');
var moldovan = new Lang('Moldovan', '340');
var mongolian = new Lang('Mongolian', '150');
var monkhmer = new Lang('Mon-Khmer', '330');
var montagnarddega = new Lang('Montagnard Dega', '330');
var montenegrin = new Lang('Montenegrin', '339');
var mossi = new Lang('Mossi', '390');
var nahuatl = new Lang('Nahuatl', '293');
var nanjing = new Lang('Nanjing', '248');
var navajo = new Lang('Navajo', '144');
var ndebele = new Lang('Ndebele', '374');
var neapolitan = new Lang('Neapolitan', '249');
var nepali = new Lang('Nepali', '081', undefined, '7am', '8pm');
var nigerianpidgin = new Lang('Nigerian Pidgin', '363');
var norwegian = new Lang('Norwegian', '054');
var nuer = new Lang('Nuer', '294');
var oromo = new Lang('Oromo (Ethiopia)', '251');
var ouatchi = new Lang('Ouatchi', '386');
var palauan = new Lang('Palauan', '296');
var pampango = new Lang('Pampango', '116');
var pangasinan = new Lang('Pangasinan', '114');
var papiamento = new Lang('Papiamento', '253');
var pashto = new Lang('Pashto (Afghanistan)', '110');
var pennsylvania_dutch = new Lang('Pennsylvania Dutch', '397');
var persian = new Lang('Persian', '297');
var pidgin_english = new Lang('Pidgin English', '254');
var pohnpeian = new Lang('Pohnpeian', '331');
var polish = new Lang('Polish', '062');
var polynesian = new Lang('Polynesian', '073');
var portuguese = new Lang('Portuguese', '061', '30003', '7am', '8pm');
var portuguese_brazilian = new Lang('Brazilian Portuguese', '270', '30003', '7am', '8pm');
var portugeuse_creole = new Lang('Portuguese Creole', '141');
var pothohari = new Lang('Pothohari', '358');
var pulaar = new Lang('Pulaar', '409');
var punjabi = new Lang('Punjabi', '080', undefined, '7am', '8pm');
var purepecha = new Lang('Purepecha', '332');
var quechua = new Lang('Quechua', '145');
var quiche = new Lang('Quiche', '317');
var rohingya = new Lang('Rohingya', '430');
var romani = new Lang('Romani', '298');
var romanian = new Lang('Romanian', '066');
var russian = new Lang('Russian', '078', '30009', '7am', '8pm');
var rwanda = new Lang('Rwanda', '366');
var samoan = new Lang('Samoan', '126');
var sango = new Lang('Sango', '432');
var saraiki = new Lang('Saraiki', '431');
var arabic_saudi = new Lang('Saudi Arabic', '400', '30009', '7am', '8pm');
var senegalese = new Lang('Senegalese', '255');
var serbian = new Lang('Serbian', '148');
var serbocroatian = new Lang('Serbo-Croatian', '299');
var shanghainese = new Lang('Shanghainese', '037');
var sichuan = new Lang('Sichuan', '333');
var sicilian = new Lang('Sicilian', '256');
var sierraleone_creole = new Lang('Sierra Leone Creole', '393');
var singhi = new Lang('Sindhi', '257');
var sinhala = new Lang('Sinhala', '089');
var slovak = new Lang('Slovak', '064');
var slovakian = new Lang('Slovakian', '301');
var slovene = new Lang('Slovene', '134');
var somali = new Lang('Somali', '142', undefined, '7am', '8pm');
var soninke = new Lang('Soninke', '312');
var soninke_maraka = new Lang('Soninke (Maraka)', '413');
var soninke_sarahuleh = new Lang('Soninke (Sarahuleh)', '337');
var soninke_sarakole = new Lang('Soninke (Sarakole)', '419');
var spanish = new Lang('Spanish', '060', '30001', '7am', '8pm', '8am', '6:30pm');
var suchown = new Lang('Suchown', '258');
var susu = new Lang('Susu', '368');
var swahili = new Lang('Swahili', '026');
var swedish = new Lang('Swedish', '053');
var sylheti = new Lang('Sylheti', '377');
var szechuan = new Lang('Szechuan', '333');
var tadzhik = new Lang('Tadzhik', '108');
var tagalog = new Lang('Tagalog', '117');
var taishanese = new Lang('Taishanese', '444');
var taiwanese = new Lang('Taiwanese', '033');
var tamil = new Lang('Tamil', '137');
var tarasco = new Lang('Tarasco', '332');
var telugu = new Lang('Telugu', '303');
var tem = new Lang('Tem', '439');
var temne = new Lang('Temne', '359');
var teochew = new Lang('Teochew', '302');
var thai = new Lang('Thai', '047');
var tibetan = new Lang('Tibetan', '105', undefined, '7am', '8pm');
var tigre = new Lang('Tigre', '442');
var tigrigna = new Lang('Tigrigna (Eritrea)', '028');
var tohono = new Lang("Tohono O'Odham", '307');
var toisan = new Lang('Toisan', '305');
var toishanese = new Lang('Toishanese', '036', undefined, '7am', '8pm');
var tongan = new Lang('Tongan', '128');
var triqui = new Lang('Triqui', '334');
var trukese = new Lang('Trukese', '342');
var tshiluba = new Lang('Tshiluba', '259');
var turkish = new Lang('Turkish', '112', undefined, '7am', '8pm');
var turkmen = new Lang('Turkmen', '435');
var twi = new Lang('Twi', '095');
var ukrainian = new Lang('Ukrainian', '076', undefined, '7am', '8pm');
var urdu = new Lang('Urdu', '079', undefined, '7am', '8pm');
var uyghur = new Lang('Uyghur', '410');
var uzbek = new Lang('Uzbek', '336');
var vietnamese = new Lang('Vietnamese', '049');
var visayan = new Lang('Visayan', '214');
var waraywaray = new Lang('Waray-Waray', '119');
var welsh = new Lang('Welsh', '428');
var wenzhou = new Lang('Wenzhou', '443');
var wolof = new Lang('Wolof', '020');
var wu = new Lang('Wu', '306');
var wuxinese = new Lang('Wuxinese', '260');
var xhosa = new Lang('Xhosa', '360');
var yapese = new Lang('Yapese', '361');
var yiddish = new Lang('Yiddish', '135');
var yoruba = new Lang('Yoruba', '021');
var yucateco = new Lang('Yucateco', '362');
var yugoslavian = new Lang('Yugoslavian', '262');
var yupik = new Lang("Yup'ik", '146');
var zambal = new Lang('Zambal', '115');
var zande = new Lang('Zande', '380');
var zapoteco = new Lang('Zapoteco', '029');
var zarma = new Lang('Zarma', '335');
var zomi = new Lang('Zomi', '427');
var zulu = new Lang('Zulu', '309');

var refresh = function() {
	var language = document.getElementById(language_id).value;

	var mrn = validate(mrn_id);
	if(mrn.length == 7) {
		document.getElementById(mrn_id).style.backgroundColor = "";
	} else {
		document.getElementById(mrn_id).style.backgroundColor = "pink";
	}

	var pause = validate(pause_id);
	if(!(pause > 0)) {
		pause = 1;
	}
	var pauses = '';
	for(i = 0; i < pause; i++) {
		pauses += ',';
	}

	var pin = getChecked(document.getElementsByName(location_id));
	if(pin == "other") {
		pin = validate(location_other_id);
	}

	var lang = null;
	switch(language) {
		case 'acholi':
			lang = acholi;
			break;
		case 'afar':
			lang = afar;
			break;
		case 'afghan':
			lang = afghan;
			break;
		case 'afrikaans':
			lang = afrikaans;
			break;
		case 'akan':
			lang = akan;
			break;
		case 'akateko':
			lang = akateko;
			break;
		case 'aklan':
			lang = aklan;
			break;
		case 'albanian':
			lang = albanian;
			break;
		case 'asl':
			lang = asl;
			break;
		case 'amharic':
			lang = amharic;
			break;
		case 'apache':
			lang = apache;
			break;
		case 'arabic':
			lang = arabic;
			break;
		case 'arabic_egyptian':
			lang = arabic_egyptian;
			break;
		case 'arabic_gulf':
			lang = arabic_gulf;
			break;
		case 'arabic_iraqi':
			lang = arabic_iraqi;
			break;
		case 'arabic_levantine':
			lang = arabic_levantine;
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
		case 'armenian':
			lang = armenian;
			break;
		case 'armenian_eastern':
			lang = armenian_eastern;
			break;
		case 'armenian_western':
			lang = armenian_western;
			break;
		case 'ashanti':
			lang = ashanti;
			break;
		case 'assyrian':
			lang = assyrian;
			break;
		case 'azerbaijani':
			lang = azerbaijani;
			break;
		case 'bahasa':
			lang = bahasa;
			break;
		case 'brunei':
			lang = brunei;
			break;
		case 'baluchi':
			lang = baluchi;
			break;
		case 'bambara':
			lang = bambara;
			break;
		case 'banda':
			lang = banda;
			break;
		case 'bangi':
			lang = bangi;
			break;
		case 'baoan':
			lang = baoan;
			break;
		case 'basque':
			lang = basque;
			break;
		case 'bassa':
			lang = bassa;
			break;
		case 'belorusian':
			lang = belorusian;
			break;
		case 'bemba':
			lang = bemba;
			break;
		case 'bengali':
			lang = bengali;
			break;
		case 'berber':
			lang = berber;
			break;
		case 'bhojpuri':
			lang = bhojpuri;
			break;
		case 'bhutanese':
			lang = bhutanese;
			break;
		case 'bikol':
			lang = bikol;
			break;
		case 'borana':
			lang = borana;
			break;
		case 'bosnian':
			lang = bosnian;
			break;
		case 'bulgarian':
			lang = bulgarian;
			break;
		case 'burmese':
			lang = burmese;
			break;
		case 'cakchiquel':
			lang = cakchiquel;
			break;
		case 'cambodian':
			lang = cambodian;
			break;
		case 'cantonese':
			lang = cantonese;
			break;
		case 'cape_verdean':
			lang = cape_verdean;
			break;
		case 'catalan':
			lang = catalan;
			break;
		case 'cebuano':
			lang = cebuano;
			break;
		case 'chaldean':
			lang = chaldean;
			break;
		case 'chamorro':
			lang = chamorro;
			break;
		case 'chaochow':
			lang = chaochow;
			break;
		case 'chavacano':
			lang = chavacano;
			break;
		case 'cherokee':
			lang = cherokee;
			break;
		case 'chichewa':
			lang = chichewa;
			break;
		case 'chimwiini':
			lang = chimwiini;
			break;
		case 'chin':
			lang = chin;
			break;
		case 'chin_falam':
			lang = chin_falam;
			break;
		case 'chin_hakha':
			lang = chin_hakha;
			break;
		case 'chin_matu':
			lang = chin_matu;
			break;
		case 'chin_tedim':
			lang = chin_tedim;
			break;
		case 'chin_zanniat':
			lang = chin_zanniat;
			break;
		case 'chin_zophei':
			lang = chin_zophei;
			break;
		case 'chinese':
			lang = chinese;
			break;
		case 'chittagonian':
			lang = chittagonian;
			break;
		case 'chuichow':
			lang = chuichow;
			break;
		case 'chuj':
			lang = chuj;
			break;
		case 'chungshan':
			lang = chungshan;
			break;
		case 'chuukese':
			lang = chuukese;
			break;
		case 'trukese_chuukese':
			lang = trukese_chuukese;
			break;
		case 'cree':
			lang = cree;
			break;
		case 'creek':
			lang = creek;
			break;
		case 'crioulo':
			lang = crioulo;
			break;
		case 'croatian':
			lang = croatian;
			break;
		case 'czech':
			lang = czech;
			break;
		case 'dakota':
			lang = dakota;
			break;
		case 'danish':
			lang = danish;
			break;
		case 'dari':
			lang = dari;
			break;
		case 'dinka':
			lang = dinka;
			break;
		case 'dutch':
			lang = dutch;
			break;
		case 'dzongkha':
			lang = dzongkha;
			break;
		case 'ebon':
			lang = ebon;
			break;
		case 'edo':
			lang = edo;
			break;
		case 'eritrean':
			lang = eritrean;
			break;
		case 'eskimo':
			lang = eskimo;
			break;
		case 'esperanto':
			lang = esperanto;
			break;
		case 'estonian':
			lang = estonian;
			break;
		case 'ethiopian':
			lang = ethiopian;
			break;
		case 'ewe':
			lang = ewe;
			break;
		case 'fang':
			lang = fang;
			break;
		case 'fante':
			lang = fante;
			break;
		case 'farsi':
			lang = farsi;
			break;
		case 'fijian':
			lang = fijian;
			break;
		case 'fijian_polynesian':
			lang = fijian_polynesian;
			break;
		case 'filipino':
			lang = filipino;
			break;
		case 'finnish':
			lang = finnish;
			break;
		case 'flemish':
			lang = flemish;
			break;
		case 'fon':
			lang = fon;
			break;
		case 'foochow':
			lang = foochow;
			break;
		case 'french':
			lang = french;
			break;
		case 'french_canadian':
			lang = french_canadian;
			break;
		case 'french_cajun':
			lang = french_cajun;
			break;
		case 'french_creole':
			lang = french_creole;
			break;
		case 'frisian':
			lang = frisian;
			break;
		case 'fukienese':
			lang = fukienese;
			break;
		case 'fulani':
			lang = fulani;
			break;
		case 'fuzhou':
			lang = fuzhou;
			break;
		case 'ga':
			lang = ga;
			break;
		case 'gaddang':
			lang = gaddang;
			break;
		case 'gaelic':
			lang = gaelic;
			break;
		case 'galician':
			lang = galician;
			break;
		case 'gallinya':
			lang = gallinya;
			break;
		case 'gana':
			lang = gana;
			break;
		case 'ganda':
			lang = ganda;
			break;
		case 'garre':
			lang = garre;
			break;
		case 'georgian':
			lang = georgian;
			break;
		case 'german':
			lang = german;
			break;
		case 'grebo':
			lang = grebo;
			break;
		case 'greek':
			lang = greek;
			break;
		case 'guamanian':
			lang = guamanian;
			break;
		case 'guarani':
			lang = guarani;
			break;
		case 'gujarati':
			lang = gujarati;
			break;
		case 'gwa':
			lang = gwa;
			break;
		case 'haitian_creole':
			lang = haitian_creole;
			break;
		case 'hakka':
			lang = hakka;
			break;
		case 'hamerbana':
			lang = hamerbana;
			break;
		case 'hausa':
			lang = hausa;
			break;
		case 'hawaii_creole':
			lang = hawaii_creole;
			break;
		case 'hebrew':
			lang = hebrew;
			break;
		case 'hindi':
			lang = hindi;
			break;
		case 'hindko':
			lang = hindko;
			break;
		case 'hindustani':
			lang = hindustani;
			break;
		case 'hmong':
			lang = hmong;
			break;
		case 'hokkien':
			lang = hokkien;
			break;
		case 'hopi':
			lang = hopi;
			break;
		case 'huibei':
			lang = huibei;
			break;
		case 'huizhou':
			lang = huizhou;
			break;
		case 'hunanese':
			lang = hunanese;
			break;
		case 'hungarian':
			lang = hungarian;
			break;
		case 'ibanag':
			lang = ibanag;
			break;
		case 'icelandic':
			lang = icelandic;
			break;
		case 'igbo':
			lang = igbo;
			break;
		case 'ilocano':
			lang = ilocano;
			break;
		case 'ilonggo':
			lang = ilonggo;
			break;
		case 'indonesian':
			lang = indonesian;
			break;
		case 'inupiaq':
			lang = inupiaq;
			break;
		case 'italian':
			lang = italian;
			break;
		case 'jakartanese':
			lang = jakartanese;
			break;
		case 'jamaicanenglish_creole':
			lang = jamaicanenglish_creole;
			break;
		case 'japanese':
			lang = japanese;
			break;
		case 'jarai':
			lang = jarai;
			break;
		case 'javanese':
			lang = javanese;
			break;
		case 'jingpho':
			lang = jingpho;
			break;
		case 'jula':
			lang = jula;
			break;
		case 'kachchi':
			lang = kachchi;
			break;
		case 'kamba':
			lang = kamba;
			break;
		case 'kanjobal':
			lang = kanjobal;
			break;
		case 'kannada':
			lang = kannada;
			break;
		case 'karen':
			lang = karen;
			break;
		case 'karenni':
			lang = karenni;
			break;
		case 'kashmiri':
			lang = kashmiri;
			break;
		case 'kayah':
			lang = kayah;
			break;
		case 'kazakh':
			lang = kazakh;
			break;
		case 'kham':
			lang = kham;
			break;
		case 'khmer':
			lang = khmer;
			break;
		case 'khmu':
			lang = khmu;
			break;
		case 'kibajuni':
			lang = kibajuni;
			break;
		case 'kikuyu':
			lang = kikuyu;
			break;
		case 'kinya':
			lang = kinya;
			break;
		case 'kirundi':
			lang = kirundi;
			break;
		case 'kisii':
			lang = kisii;
			break;
		case 'kiswahili':
			lang = kiswahili;
			break;
		case 'kizigua':
			lang = kizigua;
			break;
		case 'kongo':
			lang = kongo;
			break;
		case 'korean':
			lang = korean;
			break;
		case 'kotokoli':
			lang = kotokoli;
			break;
		case 'krahn':
			lang = krahn;
			break;
		case 'krio':
			lang = krio;
			break;
		case 'kru':
			lang = kru;
			break;
		case 'kunama':
			lang = kunama;
			break;
		case 'kurdish':
			lang = kurdish;
			break;
		case 'kurdish_badini':
			lang = kurdish_badini;
			break;
		case 'kurdish_kurmanji':
			lang = kurdish_kurmanji;
			break;
		case 'kurdish_sorani':
			lang = kurdish_sorani;
			break;
		case 'kyrgyz':
			lang = kyrgyz;
			break;
		case 'lahu':
			lang = lahu;
			break;
		case 'lakota':
			lang = lakota;
			break;
		case 'lanzhou':
			lang = lanzhou;
			break;
		case 'lao':
			lang = lao;
			break;
		case 'latvian':
			lang = latvian;
			break;
		case 'lingala':
			lang = lingala;
			break;
		case 'lithuanian':
			lang = lithuanian;
			break;
		case 'loma':
			lang = loma;
			break;
		case 'luganda':
			lang = luganda;
			break;
		case 'luo':
			lang = luo;
			break;
		case 'luxembourgish':
			lang = luxembourgish;
			break;
		case 'maaymaay':
			lang = maaymaay;
			break;
		case 'macedonian':
			lang = macedonian;
			break;
		case 'magahi':
			lang = magahi;
			break;
		case 'maithili':
			lang = maithili;
			break;
		case 'malagasy':
			lang = malagasy;
			break;
		case 'malay':
			lang = malay;
			break;
		case 'malayalam':
			lang = malayalam;
			break;
		case 'malinke':
			lang = malinke;
			break;
		case 'maltese':
			lang = maltese;
			break;
		case 'mam':
			lang = mam;
			break;
		case 'mandarin':
			lang = mandarin;
			break;
		case 'mandingo':
			lang = mandingo;
			break;
		case 'mandinka':
			lang = mandinka;
			break;
		case 'mankon':
			lang = mankon;
			break;
		case 'mara':
			lang = mara;
			break;
		case 'marathi':
			lang = marathi;
			break;
		case 'marshallese':
			lang = marshallese;
			break;
		case 'maya':
			lang = maya;
			break;
		case 'mende':
			lang = mende;
			break;
		case 'mien':
			lang = mien;
			break;
		case 'mina':
			lang = mina;
			break;
		case 'mirpuri':
			lang = mirpuri;
			break;
		case 'mixteco':
			lang = mixteco;
			break;
		case 'mixteco_alto':
			lang = mixteco_alto;
			break;
		case 'mixteco_bajo':
			lang = mixteco_bajo;
			break;
		case 'mizo':
			lang = mizo;
			break;
		case 'mola':
			lang = mola;
			break;
		case 'moldovan':
			lang = moldovan;
			break;
		case 'mongolian':
			lang = mongolian;
			break;
		case 'monkhmer':
			lang = monkhmer;
			break;
		case 'montagnarddega':
			lang = montagnarddega;
			break;
		case 'montenegrin':
			lang = montenegrin;
			break;
		case 'mossi':
			lang = mossi;
			break;
		case 'nahuatl':
			lang = nahuatl;
			break;
		case 'nanjing':
			lang = nanjing;
			break;
		case 'navajo':
			lang = navajo;
			break;
		case 'ndebele':
			lang = ndebele;
			break;
		case 'neapolitan':
			lang = neapolitan;
			break;
		case 'nepali':
			lang = nepali;
			break;
		case 'nigerianpidgin':
			lang = nigerianpidgin;
			break;
		case 'norwegian':
			lang = norwegian;
			break;
		case 'nuer':
			lang = nuer;
			break;
		case 'oromo':
			lang = oromo;
			break;
		case 'ouatchi':
			lang = ouatchi;
			break;
		case 'palauan':
			lang = palauan;
			break;
		case 'pampango':
			lang = pampango;
			break;
		case 'pangasinan':
			lang = pangasinan;
			break;
		case 'papiamento':
			lang = papiamento;
			break;
		case 'pashto':
			lang = pashto;
			break;
		case 'pennsylvania_dutch':
			lang = pennsylvania_dutch;
			break;
		case 'persian':
			lang = persian;
			break;
		case 'pidgin_english':
			lang = pidgin_english;
			break;
		case 'pohnpeian':
			lang = pohnpeian;
			break;
		case 'polish':
			lang = polish;
			break;
		case 'polynesian':
			lang = polynesian;
			break;
		case 'portuguese':
			lang = portuguese;
			break;
		case 'portuguese_brazilian':
			lang = portuguese_brazilian;
			break;
		case 'portugeuse_creole':
			lang = portugeuse_creole;
			break;
		case 'pothohari':
			lang = pothohari;
			break;
		case 'pulaar':
			lang = pulaar;
			break;
		case 'punjabi':
			lang = punjabi;
			break;
		case 'purepecha':
			lang = purepecha;
			break;
		case 'quechua':
			lang = quechua;
			break;
		case 'quiche':
			lang = quiche;
			break;
		case 'rohingya':
			lang = rohingya;
			break;
		case 'romani':
			lang = romani;
			break;
		case 'romanian':
			lang = romanian;
			break;
		case 'russian':
			lang = russian;
			break;
		case 'rwanda':
			lang = rwanda;
			break;
		case 'samoan':
			lang = samoan;
			break;
		case 'sango':
			lang = sango;
			break;
		case 'saraiki':
			lang = saraiki;
			break;
		case 'arabic_saudi':
			lang = arabic_saudi;
			break;
		case 'senegalese':
			lang = senegalese;
			break;
		case 'serbian':
			lang = serbian;
			break;
		case 'serbocroatian':
			lang = serbocroatian;
			break;
		case 'shanghainese':
			lang = shanghainese;
			break;
		case 'sichuan':
			lang = sichuan;
			break;
		case 'sicilian':
			lang = sicilian;
			break;
		case 'sierraleone_creole':
			lang = sierraleone_creole;
			break;
		case 'singhi':
			lang = singhi;
			break;
		case 'sinhala':
			lang = sinhala;
			break;
		case 'slovak':
			lang = slovak;
			break;
		case 'slovakian':
			lang = slovakian;
			break;
		case 'slovene':
			lang = slovene;
			break;
		case 'somali':
			lang = somali;
			break;
		case 'soninke':
			lang = soninke;
			break;
		case 'soninke_maraka':
			lang = soninke_maraka;
			break;
		case 'soninke_sarahuleh':
			lang = soninke_sarahuleh;
			break;
		case 'soninke_sarakole':
			lang = soninke_sarakole;
			break;
		case 'spanish':
			lang = spanish;
			break;
		case 'suchown':
			lang = suchown;
			break;
		case 'susu':
			lang = susu;
			break;
		case 'swahili':
			lang = swahili;
			break;
		case 'swedish':
			lang = swedish;
			break;
		case 'sylheti':
			lang = sylheti;
			break;
		case 'szechuan':
			lang = szechuan;
			break;
		case 'tadzhik':
			lang = tadzhik;
			break;
		case 'tagalog':
			lang = tagalog;
			break;
		case 'taishanese':
			lang = taishanese;
			break;
		case 'taiwanese':
			lang = taiwanese;
			break;
		case 'tamil':
			lang = tamil;
			break;
		case 'tarasco':
			lang = tarasco;
			break;
		case 'telugu':
			lang = telugu;
			break;
		case 'tem':
			lang = tem;
			break;
		case 'temne':
			lang = temne;
			break;
		case 'teochew':
			lang = teochew;
			break;
		case 'thai':
			lang = thai;
			break;
		case 'tibetan':
			lang = tibetan;
			break;
		case 'tigre':
			lang = tigre;
			break;
		case 'tigrigna':
			lang = tigrigna;
			break;
		case 'tohono':
			lang = tohono;
			break;
		case 'toisan':
			lang = toisan;
			break;
		case 'toishanese':
			lang = toishanese;
			break;
		case 'tongan':
			lang = tongan;
			break;
		case 'triqui':
			lang = triqui;
			break;
		case 'trukese':
			lang = trukese;
			break;
		case 'tshiluba':
			lang = tshiluba;
			break;
		case 'turkish':
			lang = turkish;
			break;
		case 'turkmen':
			lang = turkmen;
			break;
		case 'twi':
			lang = twi;
			break;
		case 'ukrainian':
			lang = ukrainian;
			break;
		case 'urdu':
			lang = urdu;
			break;
		case 'uyghur':
			lang = uyghur;
			break;
		case 'uzbek':
			lang = uzbek;
			break;
		case 'vietnamese':
			lang = vietnamese;
			break;
		case 'visayan':
			lang = visayan;
			break;
		case 'waraywaray':
			lang = waraywaray;
			break;
		case 'welsh':
			lang = welsh;
			break;
		case 'wenzhou':
			lang = wenzhou;
			break;
		case 'wolof':
			lang = wolof;
			break;
		case 'wu':
			lang = wu;
			break;
		case 'wuxinese':
			lang = wuxinese;
			break;
		case 'xhosa':
			lang = xhosa;
			break;
		case 'yapese':
			lang = yapese;
			break;
		case 'yiddish':
			lang = yiddish;
			break;
		case 'yoruba':
			lang = yoruba;
			break;
		case 'yucateco':
			lang = yucateco;
			break;
		case 'yugoslavian':
			lang = yugoslavian;
			break;
		case 'yupik':
			lang = yupik;
			break;
		case 'zambal':
			lang = zambal;
			break;
		case 'zande':
			lang = zande;
			break;
		case 'zapoteco':
			lang = zapoteco;
			break;
		case 'zarma':
			lang = zarma;
			break;
		case 'zomi':
			lang = zomi;
			break;
		case 'zulu':
			lang = zulu;
			break;
	}
	document.getElementById(language_display).innerHTML = lang.name;

	if(lang.hours != undefined) {
		for(let element of document.getElementsByClassName(qr_is_class)){
			element.style.display = "table-cell";
		}
	} else {
		for(let element of document.getElementsByClassName(qr_is_class)){
			element.style.display = "none";
		}
	}

	if(lang.pager != undefined) {
		for(let element of document.getElementsByClassName(qr_pager_class)){
			element.style.display = "table-cell";
		}
	} else {
		for(let element of document.getElementsByClassName(qr_pager_class)){
			element.style.display = "none";
		}
	}

	document.getElementById(cyracom_id).innerHTML = '';
	var cyracom = new QRCode(cyracom_id, {
		// PIN + MRN + 1 + language (2 for Spanish, 3 for other) + 1 + 2
		text: cyracom_num+(pin.length == 0 ? '' : pauses+pin+(mrn.length==0 ? '' : ','+mrn+',,1'+(language == 'other' ? '' : (language == 'spanish' ? ',2,' : ',3,'+lang.cyracom+',')+'1,2'))),
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

	document.getElementById(hours_on_id).innerHTML = (lang.hours == undefined ? '' : lang.hours);
	document.getElementById(hours_off_id).innerHTML = (lang.hours_inv == undefined ? '' : lang.hours_inv);
	document.getElementById(after_hours_id).style.display = (lang.hours == undefined ? "none" : "block");
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

document.getElementById(hours_on_id).innerHTML = (spanish.hours == undefined ? '' : spanish.hours);
document.getElementById(hours_off_id).innerHTML = (spanish.hours_inv == undefined ? '' : spanish.hours_inv);
