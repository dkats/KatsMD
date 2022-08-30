function numCommas(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function weight_kg(lbs_box, kg_box, weight_unit) {
	var weight = NaN;
	var weight_u = document.getElementById(weight_unit).value;

	switch(weight_u) {
		case 'lbs':
			weight = parseFloat(document.getElementById(lbs_box).value) / 2.205;
			break;
		case 'kg':
			weight = parseFloat(document.getElementById(kg_box).value);
	}

	return weight;
}

function height_cm(ft_box, in_box, tin_box, m_box, cm_box, height_unit) {
	var height = NaN;
	var height_u = document.getElementById(height_unit).value;

	switch(height_u) {
		case 'ft+in':
			height = 2.54 * (12 * parseFloat(document.getElementById(ft_box).value) + parseFloat(document.getElementById(in_box).value));
			break;
		case 'in':
			height = 2.54 * parseFloat(document.getElementById(tin_box).value);
			break;
		case 'm':
			height = 100 * parseFloat(document.getElementById(m_box).value);
			break;
		case 'cm':
			height = parseFloat(document.getElementById(cm_box).value);
			break;
	}

	return height;
}

// https://pediatrics.aappublications.org/content/28/2/169.long
function frac_tbw(lbs_box, kg_box, weight_unit, ft_box, in_box, tin_box, m_box, cm_box, height_unit, frac_tbw_box) {
	var weight = weight_kg(lbs_box, kg_box, weight_unit);
	var height = height_cm(ft_box, in_box, tin_box, m_box, cm_box, height_unit);
	var frac_box = document.getElementById(frac_tbw_box);

	if(isNaN(weight)) {
		frac_box.value = '';
	} else {
		if(isNaN(height)) {
			frac_box.value = Math.round(10 * 100 * 0.843 / Math.pow(weight, 0.109)) / 10;
		} else {
			frac_box.value = Math.round(10 * 100 * 0.135 * Math.pow(height, 0.535) / Math.pow(weight, 0.334)) / 10;
		}
	}
}

// https://www.uptodate.com/contents/hypernatremia-in-children#H192147418
function bodywater_deficit_currentna(weight_kg, percent_water_val, serumna_val, normna_val, result_box, formula_box) {
	var weight = weight_kg * 1000;
	var percent_water = percent_water_val;
	var serum_na = serumna_val;
	var norm_na = normna_val;

	// Free water deficit in milliliters = Current total body water x ([current plasma Na/normal Na] - 1)
	var deficit = weight * percent_water * (serum_na/norm_na - 1);

	result_box.value = numCommas(Math.round(deficit));
	formula_box.innerHTML = "Free water deficit = current total body water &times; ([current plasma Na/normal Na] - 1)";
}

// https://www.uptodate.com/contents/hypernatremia-in-children#H192147418
function bodywater_deficit_decreasena(weight_kg, serumna_val, goalna_val, result_box, formula_box) {
	var weight = weight_kg * 1000;
	var decrease_na = serumna_val - goalna_val;

	// Free water deficit in milliliters = (4 mL/kg) x (weight in kg) x (desired change in plasma Na)
	var deficit = 4 * weight * decrease_na;

	if(deficit < 0) {
		result_box.value = '';
	} else {
		result_box.value = numCommas(Math.round(deficit));
		formula_box.innerHTML = "Free water deficit = (4 mL/kg) &times; (weight in kg) x (desired change in plasma Na)";
	}
}

// Outputs either bodywater_deficit_currentna or bodywater_deficit_decreasena, depending on what data is provided
function bodywater_deficit(lbs_box, kg_box, weight_unit, percent_water_box, serumna_box, normna_box, goalna_box, result_box, formula_box) {
	var weight = weight_kg(lbs_box, kg_box, weight_unit);
	var percent_water = parseFloat(document.getElementById(percent_water_box).value) / 100;
	var serum_na = parseFloat(document.getElementById(serumna_box).value);
	var norm_na = parseFloat(document.getElementById(normna_box).value);
	var goal_na = parseFloat(document.getElementById(goalna_box).value);
	var result_box = document.getElementById(result_box);
	var formula_box = document.getElementById(formula_box);

	if(isNaN(weight)) {
		result_box.value = '';
	} else {
		if(!isNaN(percent_water) && !isNaN(serum_na) && !isNaN(norm_na)) {
			bodywater_deficit_currentna(weight, percent_water, serum_na, norm_na, result_box, formula_box);
		} else if(!isNaN(serum_na) && !isNaN(goal_na)) {
			bodywater_deficit_decreasena(weight, serum_na, goal_na, result_box, formula_box);
		} else {
			result_box.value = '';
		}
	}
}

// Content of IV fluids
// https://www.ncbi.nlm.nih.gov/books/NBK154437/
// https://www.nice.org.uk/guidance/cg174/resources/composition-of-commonly-used-crystalloids-table-191662813
// https://www.uptodate.com/contents/image?imageKey=PULM%2F117769&topicKey=PULM%2F1607&search=iv%20fluids&source=see_link
// https://www.facs.org/-/media/files/education/core-curriculum/fluids_electrolytes.ashx
function ivf(fluid_box, out_na, out_k, out_cl, out_ca, out_lactate, out_glu, out_cal, out_osm) {
	var fluid = document.getElementById(fluid_box).value;
	var na_box = document.getElementById(out_na);	// mEq/L
	var k_box = document.getElementById(out_k);	// mEq/L
	var cl_box = document.getElementById(out_cl);	// mEq/L
	var ca_box = document.getElementById(out_ca);	// mEq/L
	var lactate_box = document.getElementById(out_lactate);	// mmol/L
	var glu_box = document.getElementById(out_glu);	// g/L
	var cal_box = document.getElementById(out_cal);	// cal/L
	var osm_box = document.getElementById(out_osm);	// mOsm/L

	switch(fluid) {
		case 'lr':
			na_box.value = 130;
			k_box.value = 4.0;
			cl_box.value = 109;
			ca_box.value = 2.7;
			lactate_box.value = 28;
			glu_box.value = '';
			cal_box.value = '';
			osm_box.value = 273;
			break;
		case 'ns':
			na_box.value = 154;
			k_box.value = '';
			cl_box.value = 154;
			ca_box.value = '';
			lactate_box.value = '';
			glu_box.value = '';
			cal_box.value = '';
			osm_box.value = 308;
			break;
		case 'halfns':
			na_box.value = 77;
			k_box.value = '';
			cl_box.value = 77;
			ca_box.value = '';
			lactate_box.value = '';
			glu_box.value = '';
			cal_box.value = '';
			osm_box.value = 155;
			break;
		case 'd10':
			na_box.value = '';
			k_box.value = '';
			cl_box.value = '';
			ca_box.value = '';
			lactate_box.value = '';
			glu_box.value = 10;
			cal_box.value = 400;
			osm_box.value = '';
			break;
		case 'd5halfns':
			na_box.value = 77;
			k_box.value = '';
			cl_box.value = 77;
			ca_box.value = '';
			lactate_box.value = '';
			glu_box.value = 50;
			cal_box.value = 200;
			osm_box.value = 406;
			break;
		case 'darrow':
			na_box.value = 121;
			k_box.value = 35;
			cl_box.value = 103;
			ca_box.value = '';
			lactate_box.value = 53;
			glu_box.value = '';
			cal_box.value = '';
			osm_box.value = '';
			break;
		case 'd5halfdarrow':
			na_box.value = 61;
			k_box.value = 17;
			cl_box.value = 52;
			ca_box.value = '';
			lactate_box.value = 27;
			glu_box.value = 50;
			cal_box.value = 200;
			osm_box.value = '';
			break;
		case 'd5halflr':
			na_box.value = 65;
			k_box.value = 2.7;
			cl_box.value = 56;
			ca_box.value = 2;
			lactate_box.value = 14;
			glu_box.value = 50;
			cal_box.value = 200;
			osm_box.value = '';
			break;
		case 'd4fifthns':
			na_box.value = 31;
			k_box.value = '';
			cl_box.value = 31;
			ca_box.value = '';
			lactate_box.value = '';
			glu_box.value = 40;
			cal_box.value = 160;
			osm_box.value = '';
			break;
		case 'd5':
			na_box.value = '';
			k_box.value = '';
			cl_box.value = '';
			ca_box.value = '';
			lactate_box.value = '';
			glu_box.value = 50;
			cal_box.value = 200;
			osm_box.value = 252;
			break;
	}
}

// How much free water is in an IV fluid?
function bodywater_infusionwater(fluid_box, fluidna_box, serumna_box, fluidfree_box) {
	var fluid = document.getElementById(fluid_box).value;
	var fluid_na = NaN;
	var fluidna_box = document.getElementById(fluidna_box);
	var serum_na = parseFloat(document.getElementById(serumna_box).value);
	var fluidfree_box = document.getElementById(fluidfree_box);

	switch(fluid) {
		case 'lr':
			fluid_na = 130;
			break;
		case 'ns':
			fluid_na = 154;
			break;
		case 'halfns':
			fluid_na = 77;
			break;
		case 'd5halfns':
			fluid_na = 77;
			break;
		case 'darrow':
			fluid_na = 121;
			break;
		case 'd5halfdarrow':
			fluid_na = 61;
			break;
		case 'd5halflr':
			fluid_na = 65;
			break;
		case 'd4fifthns':
			fluid_na = 31;
			break;
	}

	if(!isNaN(fluid_na)) {
		fluidna_box.value = fluid_na;
	}

	if(!isNaN(fluid_na) && !isNaN(serum_na)) {
		// Free water (%) = (1 − (IV fluid Na/serum Na)) × 100
		fluidfree_box.value = Math.round((1 - fluid_na/serum_na) * 100 * 10) / 10;
	} else {
		fluidfree_box.value = '';
	}
}

// What volume of fluid to correct sodium?
function bodywater_fluidsodiumcorrection(lbs_box, kg_box, weight_unit, percent_water_box, fluidna_box, serumna_box, goalna_box, result_box) {
	var weight = weight_kg(lbs_box, kg_box, weight_unit);
	var percent_water = parseFloat(document.getElementById(percent_water_box).value) / 100;
	var fluidna = parseFloat(document.getElementById(fluidna_box).value);
	var serumna = parseFloat(document.getElementById(serumna_box).value);
	var goalna = parseFloat(document.getElementById(goalna_box).value);
	var result_box = document.getElementById(result_box);

	var volume = (serumna - goalna) * weight * percent_water * 1000 / (fluidna - goalna);

	if(isNaN(volume)) {
		result_box.value = '';
	} else {
		result_box.value = numCommas(Math.round(volume * 10) / 10);
	}
}

// Volume of fluid to fix free water deficit
function bodywater_fluidwatercorrection(deficit_box, fluid_free_perc_box, result_box) {
	var deficit = parseFloat(document.getElementById(deficit_box).value);
	var fluid_free_dec = parseFloat(document.getElementById(fluid_free_perc_box).value) / 100;
	var result_box = document.getElementById(result_box);

	if(!isNaN(deficit) && !isNaN(fluid_free_dec)) {
		result_box.value = numCommas(Math.round(deficit / fluid_free_dec * 10) / 10);
	}
}