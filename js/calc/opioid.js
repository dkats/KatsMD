// CDC: https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf
// AAFP: https://www.aafp.org/dam/AAFP/documents/patient_care/pain_management/conversion-table.pdf

// Dose: single dose
// Doses: Number of doses/day
function opioid_conversion(start_drug_id, start_dose_id, start_doses_id, return_drug_id, return_doses_id, decrease_id, return_dose_id, mme_id) {
	var start_drug = document.getElementById(start_drug_id).value;
	var start_dose = parseFloat(document.getElementById(start_dose_id).value);
	var start_doses = parseFloat(document.getElementById(start_doses_id).value);
	var return_drug = document.getElementById(return_drug_id).value;
	var return_doses = parseFloat(document.getElementById(return_doses_id).value);
	var decrease_dose = 1 - parseFloat(document.getElementById(decrease_id).value / 100);
	var return_dose_box = document.getElementById(return_dose_id);
	var mme_box = document.getElementById(mme_id);

	if(!isNaN(start_dose) && !isNaN(start_doses)) {
		var start_mme = NaN;
		var return_mme = NaN;

		// Assigning the MME
		switch(start_drug) {
			case 'codeine':
				start_mme = 0.15;
				break;
			case 'fentanyl patch':
				start_mme = 2.4;	// Transdermal patch (mcg/hr)
				break;
			case 'fentanyl buccal/sl':
				start_mme = 0.13;
				break;
			case 'hydrocodone':
				start_mme = 1;
				break;
			case 'hydromorphone':
				start_mme = 4;
				break;
			case 'methadone':
				// Dose-dependent
				if(start_dose <= 20) {
					start_mme = 4;
				} else if(start_dose <= 40) {
					start_mme = 8;
				} else if(start_dose <= 60) {
					start_mme = 10;
				} else {
					start_mme = 12;
				}
				break;
			case 'morphine':
				start_mme = 1;
				break;
			case 'oxycodone':
				start_mme = 1.5;
				break;
			case 'oxymorphone':
				start_mme = 3;
				break;
		}

		// Dose * doses/day * MME
		start_mme = start_mme * start_doses * start_dose;

		mme_box.value = Math.round(start_mme * 10) / 10;

		// Assigning the MME
		switch(return_drug) {
			case 'codeine':
				return_mme = 0.15;
				break;
			case 'fentanyl patch':
				return_mme = 2.4;	// Transdermal patch (mcg/hr)
				break;
			case 'fentanyl buccal/sl':
				return_mme = 0.13;
				break;
			case 'hydrocodone':
				return_mme = 1;
				break;
			case 'hydromorphone':
				return_mme = 4;
				break;
			case 'methadone':
				return_mme = 4;
				break;
			case 'morphine':
				return_mme = 1;
				break;
			case 'oxycodone':
				return_mme = 1.5;
				break;
			case 'oxymorphone':
				return_mme = 3;
				break;
		}

		var return_dose = start_mme / return_mme;

		// Methadone is dose-dependent
		if(return_drug == 'methadone') {
			if(return_dose > 20) {
				return_mme = 8;
				return_dose = (start_mme / return_mme > 20 ? start_mme / return_mme : 20);
			}
			if(return_dose > 40) {
				return_mme = 10;
				return_dose = (start_mme / return_mme > 40 ? start_mme / return_mme : 40);
			}
			if(return_dose > 60) {
				return_mme = 12;
				return_dose = (start_mme / return_mme > 60 ? start_mme / return_mme : 60);
			}
		}

		if(!isNaN(return_dose)) {
			return_dose_box.value = Math.round(return_dose / return_doses * decrease_dose * 10) / 10;
		}
	}
}