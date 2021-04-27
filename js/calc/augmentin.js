// Only allow numeric input
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

// Show/hide rows
function show() {
	switch(show_el.value) {
		case "all":
			for(var i = 0; i < formulations.length; i++) {
				formulations[i].display("");
			}
			break;
		case "appropriate":
			for(var i = 0; i < formulations.length; i++) {
				formulations[i].display(formulations[i].show == true ? "" : "none");
			}
			break;
	}
}

// Augment class constructor
class augmentin {
	constructor(row, ratio, form, amox_conc, clav_conc, quantity, frequency, amox_dose, amox_day, clav) {
		this._row = document.getElementById(row);
		this._ratio = ratio;
		this._form = form;
		this._amox_conc = amox_conc;
		this._clav_conc = clav_conc;
		this._quantity = document.getElementById(quantity);
		this._frequency = document.getElementById(frequency);
		this._amox_dose = document.getElementById(amox_dose);
		this._amox_day = document.getElementById(amox_day);
		this._clav = document.getElementById(clav);
		this._show = true;
	}

	// GETTERS
	get ratio() {
		return this._ratio;
	}

	get form() {
		return this._form;
	}

	get amox_conc() {
		return this._amox_conc;
	}

	get clav_conc() {
		return this._clav_conc;
	}

	get quantity() {
		return this._quantity.innerHTML;
	}

	get frequency() {
		return this._frequency.innerHTML;
	}

	get amox_dose() {
		return this._amox_dose.innerHTML;
	}

	get amox_day() {
		return this._amox_day.innerHTML;
	}

	get clav() {
		return this._clav.innerHTML;
	}

	get show() {
		return this._show;
	}

	// SETTERS
	set quantity(x) {
		this._quantity.innerHTML = x;
	}

	set frequency(x) {
		this._frequency.innerHTML = x;
	}

	set amox_dose(x) {
		this._amox_dose.innerHTML = x;
	}

	set amox_day(x) {
		this._amox_day.innerHTML = x;
	}

	set clav(x) {
		this._clav.innerHTML = x;
	}

	set show(x) {
		if(typeof(x) == "boolean") {
			this._show = x;
		}
	}

	display(x) {
		this._row.style.display = x;
	}
}

// Element IDs
var age_over_id = "age_over";
var age_under_id = "age_under";
var indication_id = "indication";
var dose_id = "dose";
var dose_u_id = "dose_u";
var freq_id = "frequency";
var wt_id = "wt";
var show_id = "show";

var l125_id = "l125";
var l250_id = "l250";
var t500_id = "t500";
var l200_id = "l200";
var c200_id = "c200";
var l400_id = "l400";
var c400_id = "c400";
var t875_id = "t875";
var l600_id = "l600";
var t1000_id = "t1000";

var l125_quant_id = "l125_quant";
var l250_quant_id = "l250_quant";
var t500_quant_id = "t500_quant";
var l200_quant_id = "l200_quant";
var c200_quant_id = "c200_quant";
var l400_quant_id = "l400_quant";
var c400_quant_id = "c400_quant";
var t875_quant_id = "t875_quant";
var l600_quant_id = "l600_quant";
var t1000_quant_id = "t1000_quant";

var l125_freq_id = "l125_freq";
var l250_freq_id = "l250_freq";
var t500_freq_id = "t500_freq";
var l200_freq_id = "l200_freq";
var c200_freq_id = "c200_freq";
var l400_freq_id = "l400_freq";
var c400_freq_id = "c400_freq";
var t875_freq_id = "t875_freq";
var l600_freq_id = "l600_freq";
var t1000_freq_id = "t1000_freq";

var l125_amox_dose_id = "l125_amox_dose";
var l250_amox_dose_id = "l250_amox_dose";
var t500_amox_dose_id = "t500_amox_dose";
var l200_amox_dose_id = "l200_amox_dose";
var c200_amox_dose_id = "c200_amox_dose";
var l400_amox_dose_id = "l400_amox_dose";
var c400_amox_dose_id = "c400_amox_dose";
var t875_amox_dose_id = "t875_amox_dose";
var l600_amox_dose_id = "l600_amox_dose";
var t1000_amox_dose_id = "t1000_amox_dose";

var l125_amox_day_id = "l125_amox_day";
var l250_amox_day_id = "l250_amox_day";
var t500_amox_day_id = "t500_amox_day";
var l200_amox_day_id = "l200_amox_day";
var c200_amox_day_id = "c200_amox_day";
var l400_amox_day_id = "l400_amox_day";
var c400_amox_day_id = "c400_amox_day";
var t875_amox_day_id = "t875_amox_day";
var l600_amox_day_id = "l600_amox_day";
var t1000_amox_day_id = "t1000_amox_day";

var l125_clav_id = "l125_clav";
var l250_clav_id = "l250_clav";
var t500_clav_id = "t500_clav";
var l200_clav_id = "l200_clav";
var c200_clav_id = "c200_clav";
var l400_clav_id = "l400_clav";
var c400_clav_id = "c400_clav";
var t875_clav_id = "t875_clav";
var l600_clav_id = "l600_clav";
var t1000_clav_id = "t1000_clav";

// Elements
var age_over_el = document.getElementById(age_over_id);
var age_under_el = document.getElementById(age_under_id);
var indication_el = document.getElementById(indication_id);
var dose_el = document.getElementById(dose_id);
var dose_u_el = document.getElementById(dose_u_id);
var freq_el = document.getElementById(freq_id);
var wt_el = document.getElementById(wt_id);
var show_el = document.getElementById(show_id);

var l125 = new augmentin(l125_id, "4:1", "liquid", 125, 31.25, l125_quant_id, l125_freq_id, l125_amox_dose_id, l125_amox_day_id, l125_clav_id);
var l250 = new augmentin(l250_id, "4:1", "liquid", 250, 62.5, l250_quant_id, l250_freq_id, l250_amox_dose_id, l250_amox_day_id, l250_clav_id);
var t500 = new augmentin(t500_id, "4:1", "tablet", 500, 125, t500_quant_id, t500_freq_id, t500_amox_dose_id, t500_amox_day_id, t500_clav_id);
var l200 = new augmentin(l200_id, "7:1", "liquid", 200, 28.5, l200_quant_id, l200_freq_id, l200_amox_dose_id, l200_amox_day_id, l200_clav_id);
var c200 = new augmentin(c200_id, "7:1", "chewable", 200, 28.5, c200_quant_id, c200_freq_id, c200_amox_dose_id, c200_amox_day_id, c200_clav_id);
var l400 = new augmentin(l400_id, "7:1", "liquid", 400, 57, l400_quant_id, l400_freq_id, l400_amox_dose_id, l400_amox_day_id, l400_clav_id);
var c400 = new augmentin(c400_id, "7:1", "chewable", 400, 57, c400_quant_id, c400_freq_id, c400_amox_dose_id, c400_amox_day_id, c400_clav_id);
var t875 = new augmentin(t875_id, "7:1", "tablet", 875, 125, t875_quant_id, t875_freq_id, t875_amox_dose_id, t875_amox_day_id, t875_clav_id);
var l600 = new augmentin(l600_id, "14:1", "liquid", 600, 42.9, l600_quant_id, l600_freq_id, l600_amox_dose_id, l600_amox_day_id, l600_clav_id);
var t1000 = new augmentin(t1000_id, "16:1", "tablet", 1000, 62.5, t1000_quant_id, t1000_freq_id, t1000_amox_dose_id, t1000_amox_day_id, t1000_clav_id);

var formulations = [l125, l250, t500, l200, c200, l400, c400, t875, l600, t1000];

var dose_day = NaN;
var dose_dose = NaN;
var dose_dose_max = NaN;
var dose_day_max = NaN;
var freq = parseInt(freq_el.value);
var wt = NaN;

function refresh(listener) {

	// Get updated values
	var indication = indication_el.value;
	var dose = dose_el.value;
	var dose_u = dose_u_el.value;
	freq = parseInt(freq_el.value);
	wt = wt_el.value;

	if((listener == "age" || listener == "indication") && !age_over.checked && age_under.checked) {
		// If <3 months old --> 30 mg/kg/day
		dose_day = 30;
		dose_el.value = dose_day;
	} else if(listener == "dose") {
		switch(dose_u) {
			case "day":
				dose_day = parseFloat(dose);
				dose_dose = dose_day / freq;
				break;
			case "dose":
				dose_dose = parseFloat(dose);
				dose_day = dose_dose * freq;
				break;
		}
	} else if(listener == "indication" || (listener == "age" && age_over.checked && !age_under.checked)) {
		validate(dose_el.id);

		switch(indication) {
			case "":
				dose_day = "";
				freq = NaN;
				break;
			case "general":
				dose_day = "";
				freq = NaN;
				break;
			case "impetigo":
				dose_day = 25;
				freq = 2;
				dose_dose_max = 875;
				break;
			case "aom":
				dose_day = 90;
				freq = 2;
				dose_day_max = 4000;
				break;
			case "cap":
				dose_day = 90;
				freq = 2;
				dose_day_max = 4000;
				break;
			case "sinus":
				dose_day = 45;
				freq = 2;
				dose_dose_max = 875;
				break;
			case "gas":
				dose_day = 40;
				freq = 3;
				dose_day_max = 2000;
				dose_dose_max = 500;
				break;
			case "uti":
				dose_day = 30;
				freq = 3;
				dose_day_max = 2000;
				dose_dose_max = 500;
				break;
		}
		dose_dose = dose_day / freq;

		// Set dose value
		dose_el.value = dose_day;

		// Set dose unit to mg/kg/DAY
		if(!isNaN(dose_day)) {
			dose_u_el.value = "day";
		}
	} else if(listener == "weight") {
		validate(wt_el.id);
		wt = wt_el.value;
	}

	if(!isNaN(freq)) {
		// Update frequency
		var frequency = "";
		freq_el.value = freq;

		switch(freq) {
			case 1:
				frequency = "daily";
				break;
			case 2:
				frequency = "BID";
				break;
			case 3:
				frequency = "TID";
				break;
		}

		for(var i = 0; i < formulations.length; i++) {
			formulations[i].frequency = frequency;
		}

		// Calculate doses
		if(!isNaN(wt) && wt != "") {
			if(!isNaN(dose_dose)) {
				for(var i = 0; i < formulations.length; i++) {
					// Calculate dose increment
					var increment = NaN;
					var liquid_correction = 1;
					switch(formulations[i].form) {
						case "liquid":
							// Increments of 0.1 mL, divide by five because concentrations are per 5 mL
							increment = 0.1;
							liquid_correction = 1/5;
							break;
						case "tablet":
							// Increments of 1/2 tabs
							increment = 0.5;
							break;
						case "chewable":
							// Increments of 1/2 tabs
							increment = 0.5;
							break;
					}
					// Calculate maximums
					var quant_max = NaN;
					if(!isNaN(dose_dose_max)) {
						quant_max = dose_dose_max / (formulations[i].amox_conc * liquid_correction);
					}
					if(!isNaN(dose_day_max)) {
						quant_max = dose_day_max / (formulations[i].amox_conc * liquid_correction) / freq;
					}
					// Make sure it's a multiple of the increment (ignore the multiplying by 10, it's to overcome floating point inaccuracy)
					quant_max = Math.round((quant_max * 10) - (quant_max * 10) % (increment * 10)) / 10;

					// Calculate quantity
					var quant_low = Math.min(Math.round(Math.floor(Math.round(dose_dose * wt / (increment * liquid_correction * formulations[i].amox_conc) * 1000) / 1000) * increment * 10) / 10, quant_max);
					var quant_high = Math.min(Math.round(Math.ceil(Math.round(dose_dose * wt / (increment * liquid_correction * formulations[i].amox_conc) * 1000) / 1000) * increment * 10) / 10, quant_max);
					formulations[i].quantity = (quant_low == quant_high || quant_low == 0 ? quant_high : quant_low + "&ndash;" + quant_high);

					// Calculate amoxicillin dose per DOSE
					var dose_low = Math.round(quant_low * formulations[i].amox_conc * liquid_correction / wt * 10) / 10;
					var dose_high = Math.round(quant_high * formulations[i].amox_conc * liquid_correction / wt * 10) / 10;
					formulations[i].amox_dose = (quant_low == quant_high || quant_low == 0 ? dose_high : dose_low + "&ndash;" + dose_high);
					formulations[i].amox_day = (quant_low == quant_high || quant_low == 0 ? Math.round(dose_high * freq * 1000) / 1000 : Math.round(dose_low * freq * 1000) / 1000 + "&ndash;" + Math.round(dose_high * freq * 1000) / 1000);

					// Calculate clavulanate dose per DAY
					var clav_low = Math.round(quant_low * formulations[i].clav_conc * liquid_correction * freq / wt * 10) / 10;
					var clav_high = Math.round(quant_high * formulations[i].clav_conc * liquid_correction * freq / wt * 10) / 10;
					formulations[i].clav = (quant_low == quant_high || quant_low == 0 ? clav_high : clav_low + "&ndash;" + clav_high);

					// Show the row if the clavulanate is between 6-10 (inclusive)
					formulations[i].show = (clav_low >= 6 && clav_low <= 10) || (clav_high >= 6 && clav_high <= 10);
				}
			}
		}
	} else {
		for(var i = 0; i < formulations.length; i++) {
			formulations[i].frequency = "";
		}
	}
	// Augmentin ES is not studied in patients >40 kg
	if(wt > 40) {
		l600.show = false;
	}
	// Augmentin XR only in patients >40 kg
	if(wt < 40) {
		t1000.show = false;
	}

	show();
}
