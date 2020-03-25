function acid_base(disorder_select, time_select, paco2_box, bicarb_box, formula_box) {
	var disorder = document.getElementById(disorder_select).value;
	var time = document.getElementById(time_select).value;

	var norm_pco2 = 40;
	var norm_bicarb = 24;
	var d_pco2 = parseFloat(document.getElementById(paco2_box).value) - norm_pco2;
	var d_bicarb = parseFloat(document.getElementById(bicarb_box).value) - norm_bicarb;

	switch(disorder) {
		case 'metabolic acidosis':
			document.getElementById(paco2_box).readOnly = true;
			document.getElementById(bicarb_box).readOnly = false;
			if(!isNaN(d_bicarb)){
				document.getElementById(paco2_box).value = Math.round(10 * (norm_pco2 + 1.2 * d_bicarb))/10;
			}
			document.getElementById(formula_box).innerHTML = "&Delta; P<sub>a</sub>CO<sub>2</sub> = " + norm_pco2 + " &plus; 1.2 &times; &Delta; HCO<sub>3</sub>";
			break;
		case 'metabolic alkalosis':
			document.getElementById(paco2_box).readOnly = true;
			document.getElementById(bicarb_box).readOnly = false;
			if(!isNaN(d_bicarb)){
				document.getElementById(paco2_box).value = Math.round(10 * (norm_pco2 + 0.7 * d_bicarb))/10;
			}
			document.getElementById(formula_box).innerHTML = "&Delta; P<sub>a</sub>CO<sub>2</sub> = " + norm_pco2 + " &plus; 0.7 &times; &Delta; HCO<sub>3</sub>";
			break;
		case 'respiratory acidosis':
			document.getElementById(bicarb_box).readOnly = true;
			document.getElementById(paco2_box).readOnly = false;
			if(!isNaN(d_pco2)){
				if(time == 'acute') {
					document.getElementById(bicarb_box).value = Math.round(10 * (norm_bicarb + 0.10 * d_pco2))/10;
				} else if(time == 'chronic') {
					document.getElementById(bicarb_box).value = Math.round(10 * (norm_bicarb + 0.35 * d_pco2))/10;
				}
			}
			if(time == 'acute') {
				document.getElementById(formula_box).innerHTML = "&Delta; HCO<sub>3</sub> = " + norm_bicarb + " &plus; 0.10 &times; &Delta; P<sub>a</sub>CO<sub>2</sub>";
			} else if(time == 'chronic') {
				document.getElementById(formula_box).innerHTML = "&Delta; HCO<sub>3</sub> = " + norm_bicarb + " &plus; 0.35 &times; &Delta; P<sub>a</sub>CO<sub>2</sub>";
			}
			break;
		case 'respiratory alkalosis':
			document.getElementById(bicarb_box).readOnly = true;
			document.getElementById(paco2_box).readOnly = false;
			if(!isNaN(d_pco2)){
				if(time == 'acute') {
					document.getElementById(bicarb_box).value = Math.round(10 * (norm_bicarb + 0.2 * d_pco2))/10;
				} else if(time == 'chronic') {
					document.getElementById(bicarb_box).value = Math.round(10 * (norm_bicarb + 0.5 * d_pco2))/10;
				}
			}
			if(time == 'acute') {
				document.getElementById(formula_box).innerHTML = "&Delta; HCO<sub>3</sub> = " + norm_bicarb + " &plus; 0.2 &times; &Delta; P<sub>a</sub>CO<sub>2</sub>";
			} else if(time == 'chronic') {
				document.getElementById(formula_box).innerHTML = "&Delta; HCO<sub>3</sub> = " + norm_bicarb + " &plus; 0.5 &times; &Delta; P<sub>a</sub>CO<sub>2</sub>";
			}
			break;
	}
}