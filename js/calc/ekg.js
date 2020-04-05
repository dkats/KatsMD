// Median and one percentile value (pile is which percentile, val is what the actual value is)
var med_stddev1 = function(median, pile, val, digits = NaN) {
	this.median = median;
	this.pile = pile;
	this.val = val;
	this.digits = digits;	// How many digits to report when returning a String
	this.toString = function med_stddev1_toString() {
		return (isNaN(this.digits) ? this.median : this.median.toFixed(this.digits)) + " (" + ordinal_suffix_of(this.pile) + " %ile: " + (isNaN(this.val) ? "N/A" : (isNaN(this.digits) ? this.val : this.val.toFixed(this.digits))) + ")";
	}
};

// Median and two percentile values (pile is which percentile, val is what the actual value is)
var med_stddev2 = function(median, pile1, val1, pile2, val2, digits = NaN) {
	this.median = median;
	this.pile1 = pile1;
	this.val1 = val1;
	this.pile2 = pile2;
	this.val2 = val2;
	this.digits = digits;	// How many digits to report when returning a String
	this.toString = function med_stddev1_toString() {
		return (isNaN(this.digits) ? this.median : this.median.toFixed(this.digits)) + " (" + ordinal_suffix_of(this.pile1) + "-" + ordinal_suffix_of(this.pile2) + " %iles: " + (isNaN(this.val1) ? "N/A" : (isNaN(this.digits) ? this.val1 : this.val1.toFixed(this.digits))) + "-" + (isNaN(this.val2) ? "N/A" : (isNaN(this.digits) ? this.val2 : this.val2.toFixed(this.digits))) + ")";
	}
};

// https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number/13627586
function ordinal_suffix_of(i) {
	var j = i % 10,
		k = i % 100;
	if (j == 1 && k != 11) {
		return i + "st";
	}
	if (j == 2 && k != 12) {
		return i + "nd";
	}
	if (j == 3 && k != 13) {
		return i + "rd";
	}
	return i + "th";
}

var age = [0, 1/12, 3/12, 6/12, 1, 3, 5, 8, 12, 16];

var hr_m = [
	new med_stddev2(160, 2, 129, 98, 192),
	new med_stddev2(152, 2, 126, 98, 187),
	new med_stddev2(134, 2, 112, 98, 165),
	new med_stddev2(128, 2, 106, 98, 194),
	new med_stddev2(119, 2, 97, 98, 155),
	new med_stddev2(98, 2, 73, 98, 123),
	new med_stddev2(88, 2, 62, 98, 113),
	new med_stddev2(78, 2, 55, 98, 101),
	new med_stddev2(73, 2, 48, 98, 99)
];

var hr_f = [
	new med_stddev2(155, 2, 136, 98, 216),
	new med_stddev2(154, 2, 126, 98, 200),
	new med_stddev2(139, 2, 122, 98, 191),
	new med_stddev2(134, 2, 106, 98, 187),
	new med_stddev2(128, 2, 95, 98, 178),
	new med_stddev2(101, 2, 78, 98, 124),
	new med_stddev2(89, 2, 68, 98, 115),
	new med_stddev2(80, 2, 58, 98, 110),
	new med_stddev2(76, 2, 54, 98, 107)
];

var p_axis_m = [
	new med_stddev2(56, 2, 13, 98, 99),
	new med_stddev2(52, 2, 10, 98, 73),
	new med_stddev2(49, 2, -5, 98, 70),
	new med_stddev2(49, 2, 9, 98, 87),
	new med_stddev2(48, 2, -12, 98, 78),
	new med_stddev2(43, 2, -13, 98, 69),
	new med_stddev2(41, 2, -54, 98, 72),
	new med_stddev2(39, 2, -17, 98, 6),
	new med_stddev2(40, 2, -24, 98, 76)
];

var p_axis_f = [
	new med_stddev2(52, 2, 24, 98, 80),
	new med_stddev2(48, 2, 20, 98, 77),
	new med_stddev2(51, 2, 16, 98, 80),
	new med_stddev2(50, 2, 14, 98, 69),
	new med_stddev2(47, 2, 1, 98, 90),
	new med_stddev2(44, 2, -6, 98, 90),
	new med_stddev2(42, 2, -13, 98, 77),
	new med_stddev2(42, 2, -15, 98, 2),
	new med_stddev2(45, 2, -18, 98, 77)
];

var p_dur_m = [
	new med_stddev2(78, 2, 64, 98, 85),
	new med_stddev2(79, 2, 65, 98, 98),
	new med_stddev2(81, 2, 64, 98, 103),
	new med_stddev2(80, 2, 66, 98, 96),
	new med_stddev2(80, 2, 63, 98, 113),
	new med_stddev2(87, 2, 67, 98, 102),
	new med_stddev2(92, 2, 73, 98, 108),
	new med_stddev2(98, 2, 78, 98, 117),
	new med_stddev2(100, 2, 82, 98, 118)
];

var p_dur_f = [
	new med_stddev2(79, 2, 69, 98, 106),
	new med_stddev2(78, 2, 62, 98, 105),
	new med_stddev2(78, 2, 63, 98, 106),
	new med_stddev2(80, 2, 64, 98, 107),
	new med_stddev2(83, 2, 62, 98, 104),
	new med_stddev2(84, 2, 66, 98, 101),
	new med_stddev2(89, 2, 71, 98, 107),
	new med_stddev2(94, 2, 75, 98, 114),
	new med_stddev2(98, 2, 78, 98, 122)
];

var p_amp_II_m = [
	new med_stddev1(0.15, 98, 0.23, 2),
	new med_stddev1(0.16, 98, 0.25, 2),
	new med_stddev1(0.15, 98, 0.22, 2),
	new med_stddev1(0.16, 98, 0.26, 2),
	new med_stddev1(0.15, 98, 0.25, 2),
	new med_stddev1(0.13, 98, 0.23, 2),
	new med_stddev1(0.12, 98, 0.22, 2),
	new med_stddev1(0.12, 98, 0.22, 2),
	new med_stddev1(0.13, 98, 0.24, 2)
];

var p_amp_II_f = [
	new med_stddev1(0.16, 98, 0.25, 2),
	new med_stddev1(0.16, 98, 0.23, 2),
	new med_stddev1(0.16, 98, 0.23, 2),
	new med_stddev1(0.16, 98, 0.24, 2),
	new med_stddev1(0.16, 98, 0.25, 2),
	new med_stddev1(0.13, 98, 0.23, 2),
	new med_stddev1(0.12, 98, 0.24, 2),
	new med_stddev1(0.14, 98, 0.24, 2),
	new med_stddev1(0.15, 98, 0.26, 2)
];

var p_amp_V1_m = [
	new med_stddev1(0.12, 98, 0.22, 2),
	new med_stddev1(0.10, 98, 0.19, 2),
	new med_stddev1(0.09, 98, 0.17, 2),
	new med_stddev1(0.10, 98, 0.17, 2),
	new med_stddev1(0.13, 98, 0.20, 2),
	new med_stddev1(0.12, 98, 0.19, 2),
	new med_stddev1(0.12, 98, 0.20, 2),
	new med_stddev1(0.11, 98, 0.19, 2),
	new med_stddev1(0.11, 98, 0.18, 2)
];

var p_amp_V1_f = [
	new med_stddev1(0.10, 98, 0.19, 2),
	new med_stddev1(0.10, 98, 0.16, 2),
	new med_stddev1(0.10, 98, 0.16, 2),
	new med_stddev1(0.11, 98, 0.21, 2),
	new med_stddev1(0.12, 98, 0.20, 2),
	new med_stddev1(0.12, 98, 0.20, 2),
	new med_stddev1(0.11, 98, 0.18, 2),
	new med_stddev1(0.11, 98, 0.19, 2),
	new med_stddev1(0.10, 98, 0.17, 2)
];

var p_amp_V2_m = [
	new med_stddev1(0.15, 98, 0.25, 2),
	new med_stddev1(0.13, 98, 0.24, 2),
	new med_stddev1(0.11, 98, 0.20, 2),
	new med_stddev1(0.13, 98, 0.23, 2),
	new med_stddev1(0.13, 98, 0.22, 2),
	new med_stddev1(0.11, 98, 0.20, 2),
	new med_stddev1(0.11, 98, 0.17, 2),
	new med_stddev1(0.11, 98, 0.16, 2),
	new med_stddev1(0.10, 98, 0.17, 2)
];

var p_amp_V2_f = [
	new med_stddev1(0.16, 98, 0.28, 2),
	new med_stddev1(0.13, 98, 0.23, 2),
	new med_stddev1(0.12, 98, 0.19, 2),
	new med_stddev1(0.13, 98, 0.23, 2),
	new med_stddev1(0.13, 98, 0.23, 2),
	new med_stddev1(0.11, 98, 0.19, 2),
	new med_stddev1(0.11, 98, 0.17, 2),
	new med_stddev1(0.10, 98, 0.18, 2),
	new med_stddev1(0.10, 98, 0.17, 2)
];

var pr_int_m = [
	new med_stddev2(99, 2, 77, 98, 120),
	new med_stddev2(98, 2, 85, 98, 120),
	new med_stddev2(106, 2, 87, 98, 134),
	new med_stddev2(114, 2, 82, 98, 141),
	new med_stddev2(118, 2, 86, 98, 151),
	new med_stddev2(121, 2, 98, 98, 152),
	new med_stddev2(129, 2, 99, 98, 160),
	new med_stddev2(134, 2, 105, 98, 174),
	new med_stddev2(139, 2, 107, 98, 178)
];

var pr_int_f = [
	new med_stddev2(101, 2, 91, 98, 121),
	new med_stddev2(99, 2, 78, 98, 133),
	new med_stddev2(106, 2, 84, 98, 127),
	new med_stddev2(109, 2, 88, 98, 133),
	new med_stddev2(113, 2, 78, 98, 147),
	new med_stddev2(123, 2, 99, 98, 153),
	new med_stddev2(124, 2, 92, 98, 156),
	new med_stddev2(129, 2, 103, 98, 163),
	new med_stddev2(135, 2, 106, 98, 176)
];

var qrs_axis_m = [
	new med_stddev2(97, 2, 75, 98, 140),
	new med_stddev2(87, 2, 37, 98, 138),
	new med_stddev2(66, 2, -6, 98, 107),
	new med_stddev2(68, 2, 14, 98, 122),
	new med_stddev2(64, 2, -4, 98, 118),
	new med_stddev2(70, 2, 7, 98, 112),
	new med_stddev2(70, 2, -10, 98, 112),
	new med_stddev2(70, 2, -21, 98, 114),
	new med_stddev2(65, 2, -9, 98, 112)
];

var qrs_axis_f = [
	new med_stddev2(110, 2, 63, 98, 155),
	new med_stddev2(80, 2, 39, 98, 121),
	new med_stddev2(70, 2, 17, 98, 108),
	new med_stddev2(67, 2, 1, 98, 102),
	new med_stddev2(69, 2, 2, 98, 121),
	new med_stddev2(69, 2, 3, 98, 106),
	new med_stddev2(74, 2, 27, 98, 117),
	new med_stddev2(66, 2, 5, 98, 117),
	new med_stddev2(66, 2, 5, 98, 101)
];

var qrs_dur_m = [
	new med_stddev2(67, 2, 50, 98, 85),
	new med_stddev2(64, 2, 52, 98, 77),
	new med_stddev2(66, 2, 54, 98, 85),
	new med_stddev2(69, 2, 52, 98, 86),
	new med_stddev2(71, 2, 54, 98, 88),
	new med_stddev2(75, 2, 58, 98, 92),
	new med_stddev2(80, 2, 63, 98, 98),
	new med_stddev2(85, 2, 67, 98, 103),
	new med_stddev2(91, 2, 78, 98, 111)
];

var qrs_dur_f = [
	new med_stddev2(67, 2, 54, 98, 79),
	new med_stddev2(63, 2, 48, 98, 77),
	new med_stddev2(64, 2, 50, 98, 78),
	new med_stddev2(64, 2, 52, 98, 80),
	new med_stddev2(68, 2, 54, 98, 85),
	new med_stddev2(71, 2, 58, 98, 88),
	new med_stddev2(77, 2, 59, 98, 95),
	new med_stddev2(82, 2, 66, 98, 99),
	new med_stddev2(87, 2, 72, 98, 106)
];

var q_amp_II_m = [
	new med_stddev1(0.14, 98, 0.23, 2),
	new med_stddev1(0.18, 98, 0.32, 2),
	new med_stddev1(0.14, 98, 0.34, 2),
	new med_stddev1(0.18, 98, 0.48, 2),
	new med_stddev1(0.15, 98, 0.44, 2),
	new med_stddev1(0.11, 98, 0.26, 2),
	new med_stddev1(0.10, 98, 0.28, 2),
	new med_stddev1(0.09, 98, 0.24, 2),
	new med_stddev1(0.08, 98, 0.21, 2)
];

var q_amp_II_f = [
	new med_stddev1(0.09, 98, 0.26, 2),
	new med_stddev1(0.14, 98, 0.32, 2),
	new med_stddev1(0.15, 98, 0.43, 2),
	new med_stddev1(0.16, 98, 0.44, 2),
	new med_stddev1(0.16, 98, 0.48, 2),
	new med_stddev1(0.13, 98, 0.27, 2),
	new med_stddev1(0.08, 98, 0.26, 2),
	new med_stddev1(0.08, 98, 0.21, 2),
	new med_stddev1(0.09, 98, 0.20, 2)
];

var q_amp_III_m = [
	new med_stddev1(0.15, 98, 0.26, 2),
	new med_stddev1(0.29, 98, 0.50, 2),
	new med_stddev1(0.31, 98, 0.71, 2),
	new med_stddev1(0.35, 98, 0.79, 2),
	new med_stddev1(0.30, 98, 0.74, 2),
	new med_stddev1(0.19, 98, 0.46, 2),
	new med_stddev1(0.15, 98, 0.36, 2),
	new med_stddev1(0.10, 98, 0.28, 2),
	new med_stddev1(0.10, 98, 0.29, 2)
];

var q_amp_III_f = [
	new med_stddev1(0.18, 0.35, 2),
	new med_stddev1(0.24, 0.50, 2),
	new med_stddev1(0.28, 0.65, 2),
	new med_stddev1(0.34, 0.79, 2),
	new med_stddev1(0.31, 0.73, 2),
	new med_stddev1(0.18, 0.40, 2),
	new med_stddev1(0.16, 0.38, 2),
	new med_stddev1(0.10, 0.27, 2),
	new med_stddev1(0.10, 0.21, 2)
];

var q_amp_aVF_m = [
	new med_stddev1(0.13, 98, 0.23, 2),
	new med_stddev1(0.20, 98, 0.35, 2),
	new med_stddev1(0.20, 98, 0.40, 2),
	new med_stddev1(0.22, 98, 0.58, 2),
	new med_stddev1(0.20, 98, 0.54, 2),
	new med_stddev1(0.14, 98, 0.34, 2),
	new med_stddev1(0.12, 98, 0.25, 2),
	new med_stddev1(0.09, 98, 0.25, 2),
	new med_stddev1(0.08, 98, 0.23, 2)
];

var q_amp_aVF_f = [
	new med_stddev1(0.10, 98, 0.27, 2),
	new med_stddev1(0.17, 98, 0.35, 2),
	new med_stddev1(0.20, 98, 0.44, 2),
	new med_stddev1(0.23, 98, 0.52, 2),
	new med_stddev1(0.20, 98, 0.54, 2),
	new med_stddev1(0.12, 98, 0.31, 2),
	new med_stddev1(0.11, 98, 0.31, 2),
	new med_stddev1(0.08, 98, 0.21, 2),
	new med_stddev1(0.09, 98, 0.18, 2)
];

var q_amp_V6_m = [
	new med_stddev1(0.11, 98, 0.22, 2),
	new med_stddev1(0.16, 98, 0.31, 2),
	new med_stddev1(0.17, 98, 0.35, 2),
	new med_stddev1(0.20, 98, 0.60, 2),
	new med_stddev1(0.20, 98, 0.56, 2),
	new med_stddev1(0.15, 98, 0.42, 2),
	new med_stddev1(0.12, 98, 0.39, 2),
	new med_stddev1(0.12, 98, 0.43, 2),
	new med_stddev1(0.11, 98, 0.43, 2)
];

var q_amp_V6_f = [
	new med_stddev1(0.09, 98, 0.17, 2),
	new med_stddev1(0.15, 98, 0.37, 2),
	new med_stddev1(0.15, 98, 0.40, 2),
	new med_stddev1(0.18, 98, 0.39, 2),
	new med_stddev1(0.17, 98, 0.49, 2),
	new med_stddev1(0.15, 98, 0.42, 2),
	new med_stddev1(0.10, 98, 0.41, 2),
	new med_stddev1(0.11, 98, 0.34, 2),
	new med_stddev1(0.09, 98, 0.23, 2)
];

var q_amp_V7_m = [
	new med_stddev1(0.08, 98, 0.13, 2),
	new med_stddev1(0.13, 98, 0.28, 2),
	new med_stddev1(0.14, 98, 0.32, 2),
	new med_stddev1(0.17, 98, 0.52, 2),
	new med_stddev1(0.19, 98, 0.46, 2),
	new med_stddev1(0.13, 98, 0.36, 2),
	new med_stddev1(0.11, 98, 0.30, 2),
	new med_stddev1(0.11, 98, 0.29, 2),
	new med_stddev1(0.11, 98, 0.32, 2)
];

var q_amp_V7_f = [
	new med_stddev1(0.08, 98, 0.15, 2),
	new med_stddev1(0.13, 98, 0.28, 2),
	new med_stddev1(0.13, 98, 0.36, 2),
	new med_stddev1(0.16, 98, 0.34, 2),
	new med_stddev1(0.17, 98, 0.43, 2),
	new med_stddev1(0.15, 98, 0.33, 2),
	new med_stddev1(0.09, 98, 0.36, 2),
	new med_stddev1(0.09, 98, 0.26, 2),
	new med_stddev1(0.09, 98, 0.24, 2)
];

var r_amp_I_m = [
	new med_stddev1(0.25, 98, 0.45, 2),
	new med_stddev1(0.56, 98, 1.12, 2),
	new med_stddev1(0.80, 98, 1.52, 2),
	new med_stddev1(0.82, 98, 1.52, 2),
	new med_stddev1(0.77, 98, 1.37, 2),
	new med_stddev1(0.63, 98, 1.09, 2),
	new med_stddev1(0.62, 98, 1.16, 2),
	new med_stddev1(0.59, 98, 1.04, 2),
	new med_stddev1(0.58, 98, 1.09, 2)
];

var r_amp_I_f = [
	new med_stddev1(0.31, 98, 0.62, 2),
	new med_stddev1(0.55, 98, 1.09, 2),
	new med_stddev1(0.74, 98, 1.26, 2),
	new med_stddev1(0.75, 98, 1.38, 2),
	new med_stddev1(0.68, 98, 1.52, 2),
	new med_stddev1(0.65, 98, 1.20, 2),
	new med_stddev1(0.49, 98, 1.00, 2),
	new med_stddev1(0.54, 98, 1.21, 2),
	new med_stddev1(0.48, 98, 1.02, 2)
];

var r_amp_II_m = [
	new med_stddev1(0.64, 98, 1.28, 2),
	new med_stddev1(1.08, 98, 1.76, 2),
	new med_stddev1(1.27, 98, 1.97, 2),
	new med_stddev1(1.27, 98, 2.09, 2),
	new med_stddev1(1.27, 98, 2.47, 2),
	new med_stddev1(1.36, 98, 2.20, 2),
	new med_stddev1(1.24, 98, 2.42, 2),
	new med_stddev1(1.39, 98, 2.23, 2),
	new med_stddev1(1.31, 98, 2.08, 2)
];

var r_amp_II_f = [
	new med_stddev1(0.70, 98, 1.21, 2),
	new med_stddev1(1.15, 98, 2.04, 2),
	new med_stddev1(1.33, 98, 2.24, 2),
	new med_stddev1(1.35, 98, 2.21, 2),
	new med_stddev1(1.27, 98, 2.34, 2),
	new med_stddev1(1.38, 98, 2.24, 2),
	new med_stddev1(1.33, 98, 2.27, 2),
	new med_stddev1(1.32, 98, 2.29, 2),
	new med_stddev1(1.32, 98, 2.03, 2)
];

var r_amp_III_m = [
	new med_stddev1(0.79, 98, 1.44, 2),
	new med_stddev1(0.76, 98, 1.60, 2),
	new med_stddev1(0.72, 98, 1.50, 2),
	new med_stddev1(0.82, 98, 1.65, 2),
	new med_stddev1(0.80, 98, 1.96, 2),
	new med_stddev1(0.94, 98, 1.82, 2),
	new med_stddev1(0.80, 98, 1.92, 2),
	new med_stddev1(0.89, 98, 1.86, 2),
	new med_stddev1(0.85, 98, 1.74, 2)
];

var r_amp_III_f = [
	new med_stddev1(0.85, 98, 1.50, 2),
	new med_stddev1(0.91, 98, 1.82, 2),
	new med_stddev1(0.95, 98, 1.85, 2),
	new med_stddev1(0.90, 98, 1.95, 2),
	new med_stddev1(0.96, 98, 2.00, 2),
	new med_stddev1(0.94, 98, 1.96, 2),
	new med_stddev1(1.03, 98, 2.09, 2),
	new med_stddev1(0.92, 98, 1.88, 2),
	new med_stddev1(0.88, 98, 1.66, 2)
];

var r_amp_aVR_m = [
	new med_stddev1(0.32, 98, 0.52, 2),
	new med_stddev1(0.36, 98, 0.63, 2),
	new med_stddev1(0.32, 98, 0.58, 2),
	new med_stddev1(0.30, 98, 0.62, 2),
	new med_stddev1(0.21, 98, 0.53, 2),
	new med_stddev1(0.21, 98, 0.48, 2),
	new med_stddev1(0.23, 98, 0.51, 2),
	new med_stddev1(0.24, 98, 0.49, 2),
	new med_stddev1(0.23, 98, 0.46, 2)
];

var r_amp_aVR_f = [
	new med_stddev1(0.30, 98, 0.61, 2),
	new med_stddev1(0.27, 98, 0.49, 2),
	new med_stddev1(0.23, 98, 0.51, 2),
	new med_stddev1(0.21, 98, 0.48, 2),
	new med_stddev1(0.25, 98, 0.48, 2),
	new med_stddev1(0.17, 98, 0.39, 2),
	new med_stddev1(0.18, 98, 0.40, 2),
	new med_stddev1(0.18, 98, 0.41, 2),
	new med_stddev1(0.18, 98, 0.37, 2)
];

var r_amp_aVL_m = [
	new med_stddev1(0.16, 98, 0.32, 2),
	new med_stddev1(0.35, 98, 0.66, 2),
	new med_stddev1(0.40, 98, 1.09, 2),
	new med_stddev1(0.44, 98, 1.04, 2),
	new med_stddev1(0.38, 98, 0.86, 2),
	new med_stddev1(0.26, 98, 0.58, 2),
	new med_stddev1(0.22, 98, 0.70, 2),
	new med_stddev1(0.17, 98, 0.52, 2),
	new med_stddev1(0.19, 98, 0.69, 2)
];

var r_amp_aVL_f = [
	new med_stddev1(0.18, 98, 0.45, 2),
	new med_stddev1(0.25, 98, 0.69, 2),
	new med_stddev1(0.37, 98, 0.78, 2),
	new med_stddev1(0.40, 98, 0.92, 2),
	new med_stddev1(0.38, 98, 1.02, 2),
	new med_stddev1(0.24, 98, 0.70, 2),
	new med_stddev1(0.18, 98, 0.55, 2),
	new med_stddev1(0.17, 98, 0.69, 2),
	new med_stddev1(0.16, 98, 0.53, 2)
];

var r_amp_aVF_m = [
	new med_stddev1(0.59, 98, 1.36, 2),
	new med_stddev1(0.88, 98, 1.58, 2),
	new med_stddev1(0.93, 98, 1.70, 2),
	new med_stddev1(0.96, 98, 1.81, 2),
	new med_stddev1(1.00, 98, 2.20, 2),
	new med_stddev1(1.13, 98, 1.97, 2),
	new med_stddev1(1.00, 98, 2.19, 2),
	new med_stddev1(1.16, 98, 2.00, 2),
	new med_stddev1(1.06, 98, 1.88, 2)
];

var r_amp_aVF_f = [
	new med_stddev1(0.72, 98, 1.26, 2),
	new med_stddev1(0.98, 98, 1.91, 2),
	new med_stddev1(1.07, 98, 1.82, 2),
	new med_stddev1(1.11, 98, 2.04, 2),
	new med_stddev1(1.10, 98, 2.08, 2),
	new med_stddev1(1.14, 98, 2.06, 2),
	new med_stddev1(1.20, 98, 2.17, 2),
	new med_stddev1(1.09, 98, 2.06, 2),
	new med_stddev1(1.10, 98, 1.84, 2)
];

var r_amp_V3R_m = [
	new med_stddev1(0.62, 98, 1.04, 2),
	new med_stddev1(0.58, 98, 1.24, 2),
	new med_stddev1(0.57, 98, 1.20, 2),
	new med_stddev1(0.48, 98, 1.24, 2),
	new med_stddev1(0.49, 98, 1.06, 2),
	new med_stddev1(0.41, 98, 0.81, 2),
	new med_stddev1(0.23, 98, 0.63, 2),
	new med_stddev1(0.22, 98, 0.51, 2),
	new med_stddev1(0.19, 98, 0.54, 2)
];

var r_amp_V3R_f = [
	new med_stddev1(0.68, 98, 1.26, 2),
	new med_stddev1(0.55, 98, 0.93, 2),
	new med_stddev1(0.49, 98, 1.11, 2),
	new med_stddev1(0.42, 98, 0.98, 2),
	new med_stddev1(0.43, 98, 0.92, 2),
	new med_stddev1(0.34, 98, 0.64, 2),
	new med_stddev1(0.21, 98, 0.57, 2),
	new med_stddev1(0.19, 98, 0.47, 2),
	new med_stddev1(0.17, 98, 0.49, 2)
];

var r_amp_V1_m = [
	new med_stddev1(1.10, 98, 2.05, 2),
	new med_stddev1(1.23, 98, 2.07, 2),
	new med_stddev1(1.32, 98, 2.20, 2),
	new med_stddev1(1.12, 98, 2.14, 2),
	new med_stddev1(1.08, 98, 2.11, 2),
	new med_stddev1(0.95, 98, 1.78, 2),
	new med_stddev1(0.63, 98, 1.48, 2),
	new med_stddev1(0.54, 98, 1.14, 2),
	new med_stddev1(0.48, 98, 1.18, 2)
];

var r_amp_V1_f = [
	new med_stddev1(1.35, 98, 2.22, 2),
	new med_stddev1(1.17, 98, 1.99, 2),
	new med_stddev1(1.14, 98, 2.04, 2),
	new med_stddev1(1.01, 98, 1.92, 2),
	new med_stddev1(1.01, 98, 1.91, 2),
	new med_stddev1(0.77, 98, 1.38, 2),
	new med_stddev1(0.55, 98, 1.24, 2),
	new med_stddev1(0.49, 98, 1.14, 2),
	new med_stddev1(0.35, 98, 1.10, 2)
];

var r_amp_V2_m = [
	new med_stddev1(1.83, 98, 2.67, 2),
	new med_stddev1(1.82, 98, 2.63, 2),
	new med_stddev1(2.08, 98, 2.54, 2),
	new med_stddev1(1.94, 98, 2.51, 2),
	new med_stddev1(1.82, 98, 2.41, 2),
	new med_stddev1(1.58, 98, 2.26, 2),
	new med_stddev1(1.21, 98, 2.22, 2),
	new med_stddev1(1.02, 98, 1.90, 2),
	new med_stddev1(0.94, 98, 1.87, 2)
];

var r_amp_V2_f = [
	new med_stddev1(1.83, 98, 2.17, 2),
	new med_stddev1(1.81, 98, 2.45, 2),
	new med_stddev1(1.88, 98, 2.60, 2),
	new med_stddev1(1.82, 98, 2.36, 2),
	new med_stddev1(1.75, 98, 2.38, 2),
	new med_stddev1(1.41, 98, 2.25, 2),
	new med_stddev1(1.06, 98, 1.91, 2),
	new med_stddev1(0.90, 98, 1.86, 2),
	new med_stddev1(0.69, 98, 1.57, 2)
];

var r_amp_V4_m = [
	new med_stddev1(1.80, 98, 2.62, 2),
	new med_stddev1(2.30, 98, 3.05, 2),
	new med_stddev1(2.32, 98, 3.23, 2),
	new med_stddev1(2.27, 98, 3.32, 2),
	new med_stddev1(2.37, 98, 3.38, 2),
	new med_stddev1(2.42, 98, 3.30, 2),
	new med_stddev1(2.11, 98, 3.11, 2),
	new med_stddev1(1.86, 98, 3.16, 2),
	new med_stddev1(1.87, 98, 3.06, 2)
];

var r_amp_V4_f = [
	new med_stddev1(1.68, 98, 2.21, 2),
	new med_stddev1(2.26, 98, 3.26, 2),
	new med_stddev1(2.26, 98, 3.31, 2),
	new med_stddev1(2.23, 98, 3.09, 2),
	new med_stddev1(2.21, 98, 3.54, 2),
	new med_stddev1(2.24, 98, 3.38, 2),
	new med_stddev1(1.84, 98, 3.04, 2),
	new med_stddev1(1.72, 98, 3.23, 2),
	new med_stddev1(1.24, 98, 2.55, 2)
];

var r_amp_V6_m = [
	new med_stddev1(1.00, 98, 1.78, 2),
	new med_stddev1(1.55, 98, 2.23, 2),
	new med_stddev1(1.65, 98, 2.73, 2),
	new med_stddev1(1.70, 98, 2.79, 2),
	new med_stddev1(1.79, 98, 2.96, 2),
	new med_stddev1(1.94, 98, 3.14, 2),
	new med_stddev1(1.97, 98, 2.98, 2),
	new med_stddev1(2.18, 98, 3.24, 2),
	new med_stddev1(2.02, 98, 3.05, 2)
];

var r_amp_V6_f = [
	new med_stddev1(0.93, 98, 1.64, 2),
	new med_stddev1(1.51, 98, 2.67, 2),
	new med_stddev1(1.60, 98, 2.80, 2),
	new med_stddev1(1.68, 98, 2.74, 2),
	new med_stddev1(1.68, 98, 2.67, 2),
	new med_stddev1(1.89, 98, 2.91, 2),
	new med_stddev1(2.05, 98, 3.25, 2),
	new med_stddev1(2.00, 98, 3.04, 2),
	new med_stddev1(1.65, 98, 2.52, 2)
];

var r_amp_V7_m = [
	new med_stddev1(0.45, 98, 0.93, 2),
	new med_stddev1(0.90, 98, 1.41, 2),
	new med_stddev1(1.01, 98, 1.76, 2),
	new med_stddev1(1.04, 98, 1.84, 2),
	new med_stddev1(1.14, 98, 1.99, 2),
	new med_stddev1(1.34, 98, 2.12, 2),
	new med_stddev1(1.26, 98, 2.01, 2),
	new med_stddev1(1.38, 98, 2.24, 2),
	new med_stddev1(1.41, 98, 2.31, 2)
];

var r_amp_V7_f = [
	new med_stddev1(0.52, 98, 0.96, 2),
	new med_stddev1(0.95, 98, 1.68, 2),
	new med_stddev1(0.96, 98, 1.80, 2),
	new med_stddev1(1.13, 98, 1.85, 2),
	new med_stddev1(1.15, 98, 1.86, 2),
	new med_stddev1(1.35, 98, 2.12, 2),
	new med_stddev1(1.36, 98, 2.31, 2),
	new med_stddev1(1.35, 98, 2.10, 2),
	new med_stddev1(1.34, 98, 1.98, 2)
];

var s_amp_I_m = [
	new med_stddev1(0.42, 98, 0.71, 2),
	new med_stddev1(0.46, 98, 0.94, 2),
	new med_stddev1(0.41, 98, 0.77, 2),
	new med_stddev1(0.40, 98, 0.81, 2),
	new med_stddev1(0.27, 98, 0.82, 2),
	new med_stddev1(0.21, 98, 0.69, 2),
	new med_stddev1(0.22, 98, 0.56, 2),
	new med_stddev1(0.22, 98, 0.50, 2),
	new med_stddev1(0.19, 98, 0.48, 2)
];

var s_amp_I_f = [
	new med_stddev1(0.51, 98, 1.01, 2),
	new med_stddev1(0.35, 98, 0.71, 2),
	new med_stddev1(0.32, 98, 0.73, 2),
	new med_stddev1(0.33, 98, 0.73, 2),
	new med_stddev1(0.35, 98, 0.70, 2),
	new med_stddev1(0.20, 98, 0.52, 2),
	new med_stddev1(0.22, 98, 0.54, 2),
	new med_stddev1(0.16, 98, 0.47, 2),
	new med_stddev1(0.13, 98, 0.40, 2)
];

var s_amp_II_m = [
	new med_stddev1(0.24, 98, 0.46, 2),
	new med_stddev1(0.29, 98, 0.55, 2),
	new med_stddev1(0.29, 98, 0.61, 2),
	new med_stddev1(0.30, 98, 0.62, 2),
	new med_stddev1(0.25, 98, 0.55, 2),
	new med_stddev1(0.28, 98, 0.58, 2),
	new med_stddev1(0.27, 98, 0.64, 2),
	new med_stddev1(0.30, 98, 0.63, 2),
	new med_stddev1(0.27, 98, 0.63, 2)
];

var s_amp_II_f = [
	new med_stddev1(0.26, 98, 0.53, 2),
	new med_stddev1(0.22, 98, 0.53, 2),
	new med_stddev1(0.24, 98, 0.46, 2),
	new med_stddev1(0.23, 98, 0.54, 2),
	new med_stddev1(0.26, 98, 0.56, 2),
	new med_stddev1(0.20, 98, 0.46, 2),
	new med_stddev1(0.19, 98, 0.46, 2),
	new med_stddev1(0.20, 98, 0.52, 2),
	new med_stddev1(0.22, 98, 0.54, 2)
];

var s_amp_III_m = [
	new med_stddev1(0.16, 98, 0.28, 2),
	new med_stddev1(0.27, 98, 0.54, 2),
	new med_stddev1(0.30, 98, 0.87, 2),
	new med_stddev1(0.34, 98, 0.86, 2),
	new med_stddev1(0.30, 98, 0.72, 2),
	new med_stddev1(0.22, 98, 0.51, 2),
	new med_stddev1(0.21, 98, 0.65, 2),
	new med_stddev1(0.19, 98, 0.56, 2),
	new med_stddev1(0.20, 98, 0.57, 2)
];

var s_amp_III_f = [
	new med_stddev1(0.19, 98, 0.34, 2),
	new med_stddev1(0.24, 98, 0.50, 2),
	new med_stddev1(0.28, 98, 0.63, 2),
	new med_stddev1(0.33, 98, 0.77, 2),
	new med_stddev1(0.32, 98, 0.86, 2),
	new med_stddev1(0.19, 98, 0.54, 2),
	new med_stddev1(0.18, 98, 0.41, 2),
	new med_stddev1(0.16, 98, 0.48, 2),
	new med_stddev1(0.17, 98, 0.61, 2)
];

var s_amp_aVR_m = [
	new med_stddev1(0.41, 98, 0.68, 2),
	new med_stddev1(0.76, 98, 1.30, 2),
	new med_stddev1(0.98, 98, 1.47, 2),
	new med_stddev1(0.98, 98, 1.47, 2),
	new med_stddev1(0.95, 98, 1.63, 2),
	new med_stddev1(0.93, 98, 1.40, 2),
	new med_stddev1(0.90, 98, 1.51, 2),
	new med_stddev1(0.96, 98, 1.45, 2),
	new med_stddev1(0.91, 98, 1.39, 2)
];

var s_amp_aVR_f = [
	new med_stddev1(0.44, 98, 0.64, 2),
	new med_stddev1(0.81, 98, 1.31, 2),
	new med_stddev1(0.96, 98, 1.49, 2),
	new med_stddev1(0.97, 98, 1.48, 2),
	new med_stddev1(0.92, 98, 1.61, 2),
	new med_stddev1(0.95, 98, 1.49, 2),
	new med_stddev1(0.90, 98, 1.40, 2),
	new med_stddev1(0.91, 98, 1.51, 2),
	new med_stddev1(0.89, 98, 1.35, 2)
];

var s_amp_aVL_m = [
	new med_stddev1(0.47, 98, 0.77, 2),
	new med_stddev1(0.51, 98, 1.02, 2),
	new med_stddev1(0.44, 98, 0.83, 2),
	new med_stddev1(0.47, 98, 0.98, 2),
	new med_stddev1(0.40, 98, 1.00, 2),
	new med_stddev1(0.34, 98, 0.87, 2),
	new med_stddev1(0.33, 98, 0.84, 2),
	new med_stddev1(0.28, 98, 0.88, 2),
	new med_stddev1(0.28, 98, 0.94, 2)
];

var s_amp_aVL_f = [
	new med_stddev1(0.63, 98, 1.17, 2),
	new med_stddev1(0.53, 98, 1.04, 2),
	new med_stddev1(0.46, 98, 0.98, 2),
	new med_stddev1(0.52, 98, 1.03, 2),
	new med_stddev1(0.44, 98, 1.06, 2),
	new med_stddev1(0.33, 98, 1.12, 2),
	new med_stddev1(0.43, 98, 1.02, 2),
	new med_stddev1(0.30, 98, 0.88, 2),
	new med_stddev1(0.28, 98, 0.84, 2)
];

var s_amp_aVF_m = [
	new med_stddev1(0.18, 98, 0.27, 2),
	new med_stddev1(0.22, 98, 0.39, 2),
	new med_stddev1(0.23, 98, 0.57, 2),
	new med_stddev1(0.23, 98, 0.59, 2),
	new med_stddev1(0.23, 98, 0.53, 2),
	new med_stddev1(0.22, 98, 0.52, 2),
	new med_stddev1(0.21, 98, 0.57, 2),
	new med_stddev1(0.21, 98, 0.56, 2),
	new med_stddev1(0.22, 98, 0.54, 2)
];

var s_amp_aVF_f = [
	new med_stddev1(0.18, 98, 0.38, 2),
	new med_stddev1(0.20, 98, 0.35, 2),
	new med_stddev1(0.20, 98, 0.44, 2),
	new med_stddev1(0.24, 98, 0.51, 2),
	new med_stddev1(0.24, 98, 0.60, 2),
	new med_stddev1(0.16, 98, 0.40, 2),
	new med_stddev1(0.16, 98, 0.37, 2),
	new med_stddev1(0.17, 98, 0.45, 2),
	new med_stddev1(0.18, 98, 0.55, 2)
];

var s_amp_V3R_m = [
	new med_stddev1(0.12, 98, 0.22, 2),
	new med_stddev1(0.24, 98, 0.86, 2),
	new med_stddev1(0.31, 98, 0.90, 2),
	new med_stddev1(0.34, 98, 1.04, 2),
	new med_stddev1(0.45, 98, 1.21, 2),
	new med_stddev1(0.53, 98, 0.99, 2),
	new med_stddev1(0.53, 98, 1.06, 2),
	new med_stddev1(0.60, 98, 1.17, 2),
	new med_stddev1(0.57, 98, 1.14, 2)
];

var s_amp_V3R_f = [
	new med_stddev1(0.25, 98, 0.62, 2),
	new med_stddev1(0.35, 98, 0.76, 2),
	new med_stddev1(0.31, 98, 0.98, 2),
	new med_stddev1(0.34, 98, 0.95, 2),
	new med_stddev1(0.42, 98, 1.08, 2),
	new med_stddev1(0.50, 98, 1.16, 2),
	new med_stddev1(0.52, 98, 1.07, 2),
	new med_stddev1(0.55, 98, 1.20, 2),
	new med_stddev1(0.50, 98, 1.04, 2)
];

var s_amp_V1_m = [
	new med_stddev1(0.74, 98, 1.41, 2),
	new med_stddev1(0.63, 98, 1.57, 2),
	new med_stddev1(0.69, 98, 2.02, 2),
	new med_stddev1(0.69, 98, 1.88, 2),
	new med_stddev1(0.95, 98, 2.27, 2),
	new med_stddev1(1.09, 98, 2.11, 2),
	new med_stddev1(1.15, 98, 2.29, 2),
	new med_stddev1(1.30, 98, 2.46, 2),
	new med_stddev1(1.30, 98, 2.44, 2)
];

var s_amp_V1_f = [
	new med_stddev1(0.72, 98, 1.48, 2),
	new med_stddev1(0.82, 98, 1.59, 2),
	new med_stddev1(0.74, 98, 1.64, 2),
	new med_stddev1(0.76, 98, 1.86, 2),
	new med_stddev1(0.86, 98, 2.13, 2),
	new med_stddev1(1.03, 98, 2.11, 2),
	new med_stddev1(1.23, 98, 2.49, 2),
	new med_stddev1(1.32, 98, 2.58, 2),
	new med_stddev1(1.15, 98, 2.05, 2)
];

var s_amp_V2_m = [
	new med_stddev1(1.53, 98, 2.40, 2),
	new med_stddev1(1.26, 98, 2.54, 2),
	new med_stddev1(1.49, 98, 2.48, 2),
	new med_stddev1(1.50, 98, 2.78, 2),
	new med_stddev1(1.77, 98, 2.95, 2),
	new med_stddev1(2.01, 98, 3.08, 2),
	new med_stddev1(2.17, 98, 3.25, 2),
	new med_stddev1(2.28, 98, 3.44, 2),
	new med_stddev1(2.39, 98, 3.58, 2)
];

var s_amp_V2_f = [
	new med_stddev1(1.47, 98, 2.47, 2),
	new med_stddev1(1.55, 98, 2.61, 2),
	new med_stddev1(1.47, 98, 2.48, 2),
	new med_stddev1(1.56, 98, 2.52, 2),
	new med_stddev1(1.70, 98, 2.91, 2),
	new med_stddev1(1.96, 98, 2.93, 2),
	new med_stddev1(2.17, 98, 3.49, 2),
	new med_stddev1(2.29, 98, 3.46, 2),
	new med_stddev1(1.87, 98, 3.14, 2)
];

var s_amp_V4_m = [
	new med_stddev1(1.17, 98, 1.71, 2),
	new med_stddev1(1.11, 98, 2.25, 2),
	new med_stddev1(1.22, 98, 2.42, 2),
	new med_stddev1(1.25, 98, 2.35, 2),
	new med_stddev1(1.16, 98, 2.16, 2),
	new med_stddev1(1.25, 98, 2.51, 2),
	new med_stddev1(1.28, 98, 2.68, 2),
	new med_stddev1(1.31, 98, 2.44, 2),
	new med_stddev1(1.16, 98, 2.23, 2)
];

var s_amp_V4_f = [
	new med_stddev1(1.04, 98, 1.87, 2),
	new med_stddev1(1.18, 98, 1.87, 2),
	new med_stddev1(1.19, 98, 2.18, 2),
	new med_stddev1(0.98, 98, 2.04, 2),
	new med_stddev1(0.91, 98, 2.00, 2),
	new med_stddev1(0.97, 98, 1.75, 2),
	new med_stddev1(1.05, 98, 2.33, 2),
	new med_stddev1(1.00, 98, 2.28, 2),
	new med_stddev1(0.73, 98, 1.60, 2)
];

var s_amp_V6_m = [
	new med_stddev1(0.49, 98, 0.77, 2),
	new med_stddev1(0.51, 98, 1.12, 2),
	new med_stddev1(0.46, 98, 1.25, 2),
	new med_stddev1(0.46, 98, 1.21, 2),
	new med_stddev1(0.37, 98, 0.91, 2),
	new med_stddev1(0.34, 98, 0.86, 2),
	new med_stddev1(0.34, 98, 0.89, 2),
	new med_stddev1(0.34, 98, 0.79, 2),
	new med_stddev1(0.37, 98, 0.85, 2)
];

var s_amp_V6_f = [
	new med_stddev1(0.44, 98, 1.07, 2),
	new med_stddev1(0.39, 98, 0.77, 2),
	new med_stddev1(0.41, 98, 0.97, 2),
	new med_stddev1(0.31, 98, 0.70, 2),
	new med_stddev1(0.33, 98, 0.88, 2),
	new med_stddev1(0.30, 98, 0.61, 2),
	new med_stddev1(0.29, 98, 0.77, 2),
	new med_stddev1(0.27, 98, 0.75, 2),
	new med_stddev1(0.30, 98, 0.67, 2)
];

var s_amp_V7_m = [
	new med_stddev1(0.18, 98, 0.31, 2),
	new med_stddev1(0.24, 98, 0.46, 2),
	new med_stddev1(0.22, 98, 0.50, 2),
	new med_stddev1(0.26, 98, 0.58, 2),
	new med_stddev1(0.22, 98, 0.53, 2),
	new med_stddev1(0.21, 98, 0.41, 2),
	new med_stddev1(0.17, 98, 0.39, 2),
	new med_stddev1(0.16, 98, 0.39, 2),
	new med_stddev1(0.20, 98, 0.38, 2)
];

var s_amp_V7_f = [
	new med_stddev1(0.16, 98, 0.37, 2),
	new med_stddev1(0.18, 98, 0.39, 2),
	new med_stddev1(0.19, 98, 0.43, 2),
	new med_stddev1(0.20, 98, 0.37, 2),
	new med_stddev1(0.21, 98, 0.48, 2),
	new med_stddev1(0.17, 98, 0.36, 2),
	new med_stddev1(0.13, 98, 0.40, 2),
	new med_stddev1(0.12, 98, 0.33, 2),
	new med_stddev1(0.16, 98, 0.34, 2)
];

var rs_ratio_V3R_m = [
	new med_stddev2(2.4, 2, 1.2, 98, NaN, 1),
	new med_stddev2(2.4, 2, 0.5, 98, NaN, 1),
	new med_stddev2(1.8, 2, 0.4, 98, NaN, 1),
	new med_stddev2(1.5, 2, 0.4, 98, NaN, 1),
	new med_stddev2(1.2, 2, 0.4, 98, NaN, 1),
	new med_stddev2(0.7, 2, 0.1, 98, NaN, 1),
	new med_stddev2(0.4, 2, 0.0, 98, 1.6, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.2, 1),
	new med_stddev2(0.3, 2, 0.1, 98, 1.1, 1)
];

var rs_ratio_V3R_f = [
	new med_stddev2(3.5, 2, 0.0, 98, NaN, 1),
	new med_stddev2(1.7, 2, 0.5, 98, NaN, 1),
	new med_stddev2(1.7, 2, 0.2, 98, NaN, 1),
	new med_stddev2(1.2, 2, 0.2, 98, NaN, 1),
	new med_stddev2(1.2, 2, 0.2, 98, NaN, 1),
	new med_stddev2(0.6, 2, 0.1, 98, NaN, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.7, 1),
	new med_stddev2(0.3, 2, 0.0, 98, 1.2, 1),
	new med_stddev2(0.3, 2, 0.0, 98, 1.5, 1)
];

var rs_ratio_V1_m = [
	new med_stddev2(1.6, 2, 0.8, 98, 3.7, 1),
	new med_stddev2(1.9, 2, 0.5, 98, 5.0, 1),
	new med_stddev2(1.8, 2, 0.4, 98, 4.9, 1),
	new med_stddev2(1.6, 2, 0.7, 98, 4.2, 1),
	new med_stddev2(1.2, 2, 0.5, 98, 2.9, 1),
	new med_stddev2(0.8, 2, 0.3, 98, 1.9, 1),
	new med_stddev2(0.6, 2, 0.1, 98, 1.7, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.2, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.1, 1)
];

var rs_ratio_V1_f = [
	new med_stddev2(1.8, 2, 1.0, 98, 4.9, 1),
	new med_stddev2(1.5, 2, 0.6, 98, 4.4, 1),
	new med_stddev2(1.6, 2, 0.4, 98, 4.1, 1),
	new med_stddev2(1.4, 2, 0.4, 98, 3.4, 1),
	new med_stddev2(1.2, 2, 0.5, 98, 2.8, 1),
	new med_stddev2(0.7, 2, 0.2, 98, 1.8, 1),
	new med_stddev2(0.5, 2, 0.1, 98, 1.4, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.1, 1),
	new med_stddev2(0.3, 2, 0.1, 98, 1.0, 1)
];

var rs_ratio_V2_m = [
	new med_stddev2(1.1, 2, 0.7, 98, 2.3, 1),
	new med_stddev2(1.4, 2, 0.6, 98, 2.8, 1),
	new med_stddev2(1.3, 2, 0.8, 98, 2.2, 1),
	new med_stddev2(1.3, 2, 0.7, 98, 2.5, 1),
	new med_stddev2(1.0, 2, 0.5, 98, 2.4, 1),
	new med_stddev2(0.8, 2, 0.3, 98, 1.5, 1),
	new med_stddev2(0.5, 2, 0.1, 98, 1.3, 1),
	new med_stddev2(0.5, 2, 0.1, 98, 1.1, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.1, 1)
];

var rs_ratio_V2_f = [
	new med_stddev2(1.3, 2, 0.7, 98, 2.5, 1),
	new med_stddev2(1.1, 2, 0.7, 98, 2.8, 1),
	new med_stddev2(1.3, 2, 0.6, 98, 2.9, 1),
	new med_stddev2(1.2, 2, 0.5, 98, 2.2, 1),
	new med_stddev2(1.1, 2, 0.4, 98, 1.7, 1),
	new med_stddev2(0.7, 2, 0.3, 98, 1.5, 1),
	new med_stddev2(0.5, 2, 0.1, 98, 1.2, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.2, 1),
	new med_stddev2(0.4, 2, 0.1, 98, 1.0, 1)
];

var rs_ratio_V6_m = [
	new med_stddev2(1.9, 2, 1.0, 98, 3.7, 1),
	new med_stddev2(3.0, 2, 0.8, 98, 8.3, 1),
	new med_stddev2(3.6, 2, 0.4, 98, NaN, 1),
	new med_stddev2(3.7, 2, 1.1, 98, NaN, 1),
	new med_stddev2(5.0, 2, 0.8, 98, NaN, 1),
	new med_stddev2(6.1, 2, 1.9, 98, NaN, 1),
	new med_stddev2(5.9, 2, 1.8, 98, NaN, 1),
	new med_stddev2(6.2, 2, 1.7, 98, NaN, 1),
	new med_stddev2(5.5, 2, 2.0, 98, NaN, 1)
];

var rs_ratio_V6_f = [
	new med_stddev2(2.0, 2, 1.0, 98, 3.7, 1),
	new med_stddev2(3.6, 2, 1.7, 98, 8.7, 1),
	new med_stddev2(4.0, 2, 1.1, 98, NaN, 1),
	new med_stddev2(4.9, 2, 1.8, 98, NaN, 1),
	new med_stddev2(5.6, 2, 0.5, 98, NaN, 1),
	new med_stddev2(7.2, 2, 2.7, 98, NaN, 1),
	new med_stddev2(6.8, 2, 1.7, 98, NaN, 1),
	new med_stddev2(7.2, 2, 2.0, 98, NaN, 1),
	new med_stddev2(5.4, 2, 1.3, 98, NaN, 1)
];

var rs_ratio_V7_m = [
	new med_stddev2(2.9, 2, 1.2, 98, NaN, 1),
	new med_stddev2(3.6, 2, 1.4, 98, NaN, 1),
	new med_stddev2(4.4, 2, 1.1, 98, NaN, 1),
	new med_stddev2(4.8, 2, 1.4, 98, NaN, 1),
	new med_stddev2(6.8, 2, 2.0, 98, NaN, 1),
	new med_stddev2(8.1, 2, 2.0, 98, NaN, 1),
	new med_stddev2(8.2, 2, 2.2, 98, NaN, 1),
	new med_stddev2(8.4, 2, 1.6, 98, NaN, 1),
	new med_stddev2(7.4, 2, 3.1, 98, NaN, 1)
];

var rs_ratio_V7_f = [
	new med_stddev2(2.8, 2, 0.7, 98, NaN, 1),
	new med_stddev2(4.9, 2, 1.6, 98, NaN, 1),
	new med_stddev2(5.3, 2, 2.2, 98, NaN, 1),
	new med_stddev2(6.3, 2, 2.1, 98, NaN, 1),
	new med_stddev2(6.3, 2, 0.6, 98, NaN, 1),
	new med_stddev2(8.1, 2, 1.8, 98, NaN, 1),
	new med_stddev2(8.3, 2, 2.3, 98, NaN, 1),
	new med_stddev2(10.0, 2, 3.0, 98, NaN, 1),
	new med_stddev2(7.6, 2, 2.7, 98, NaN, 1)
];

var qtc_m = [
	new med_stddev2(413, 2, 378, 98, 448),
	new med_stddev2(419, 2, 396, 98, 458),
	new med_stddev2(422, 2, 391, 98, 453),
	new med_stddev2(411, 2, 379, 98, 449),
	new med_stddev2(412, 2, 383, 98, 455),
	new med_stddev2(412, 2, 377, 98, 448),
	new med_stddev2(411, 2, 371, 98, 443),
	new med_stddev2(411, 2, 373, 98, 440),
	new med_stddev2(407, 2, 362, 98, 449)
];

var qtc_f = [
	new med_stddev2(420, 2, 379, 98, 462),
	new med_stddev2(424, 2, 381, 98, 454),
	new med_stddev2(418, 2, 386, 98, 448),
	new med_stddev2(414, 2, 381, 98, 446),
	new med_stddev2(417, 2, 381, 98, 447),
	new med_stddev2(415, 2, 388, 98, 442),
	new med_stddev2(409, 2, 375, 98, 449),
	new med_stddev2(410, 2, 365, 98, 447),
	new med_stddev2(414, 2, 370, 98, 457)
];

// Rijnbeek, P.R., Witsenburg, M., Schrama, E., Hess, J., Kors, J.A. New normal limits for the paediatric electrocardiogram. Eur Heart J. 2001, 22(8): 702-711.
// NOTE: AGE IS IN YEARS!!
function ekg_norm(sex_id, age_id, lead_id, hr_id, p_axis_id, p_dur_id, pr_int_id, qrs_axis_id, qrs_dur_id, qtc_id, p_amp_id, q_amp_id, r_amp_id, s_amp_id, rs_ratio_id) {
	var sex = document.getElementById(sex_id).value;
	var agei = document.getElementById(age_id).selectedIndex;
	var lead = document.getElementById(lead_id).value;
	var hr = document.getElementById(hr_id);
	var p_axis = document.getElementById(p_axis_id);
	var p_dur = document.getElementById(p_dur_id);
	var pr_int = document.getElementById(pr_int_id);
	var qrs_axis = document.getElementById(qrs_axis_id);
	var qrs_dur = document.getElementById(qrs_dur_id);
	var qtc = document.getElementById(qtc_id);
	var p_amp = document.getElementById(p_amp_id);
	var q_amp = document.getElementById(q_amp_id);
	var r_amp = document.getElementById(r_amp_id);
	var s_amp = document.getElementById(s_amp_id);
	var rs_ratio = document.getElementById(rs_ratio_id);

	// Clear all fields
	hr.value = "";
	p_axis.value = "";
	p_dur.value = "";
	pr_int.value = "";
	qrs_axis.value = "";
	qrs_dur.value = "";
	qtc.value = "";
	p_amp.value = "";
	q_amp.value = "";
	r_amp.value = "";
	s_amp.value = "";
	rs_ratio.value = "";

	if(sex != "" && agei > 0) {
		agei -= 1;
		switch(sex) {
			case 'm':
				hr.value = hr_m[agei];
				p_axis.value = p_axis_m[agei];
				p_dur.value = p_dur_m[agei];
				pr_int.value = pr_int_m[agei];
				qrs_axis.value = qrs_axis_m[agei];
				qrs_dur.value = qrs_dur_m[agei];
				qtc.value = qtc_m[agei];
				if(lead != "") {
					switch(lead) {
						case 'I':
							r_amp.value = r_amp_I_m[agei];
							s_amp.value = s_amp_I_m[agei];
							break;
						case 'II':
							p_amp.value = p_amp_II_m[agei];
							q_amp.value = q_amp_II_m[agei];
							r_amp.value = r_amp_II_m[agei];
							s_amp.value = s_amp_II_m[agei];
							break;
						case 'III':
							q_amp.value = q_amp_III_m[agei];
							r_amp.value = r_amp_III_m[agei];
							s_amp.value = s_amp_III_m[agei];
							break;
						case 'aVR':
							r_amp.value = r_amp_aVR_m[agei];
							s_amp.value = s_amp_aVR_m[agei];
							break;
						case 'aVL':
							r_amp.value = r_amp_aVL_m[agei];
							s_amp.value = s_amp_aVL_m[agei];
							break;
						case 'aVF':
							q_amp.value = q_amp_aVF_m[agei];
							r_amp.value = r_amp_aVF_m[agei];
							s_amp.value = s_amp_aVF_m[agei];
							break;
						case 'V3R':
							r_amp.value = r_amp_V3R_m[agei];
							s_amp.value = s_amp_V3R_m[agei];
							rs_ratio.value = rs_ratio_V3R_m[agei];
							break;
						case 'V1':
							p_amp.value = p_amp_V1_m[agei];
							r_amp.value = r_amp_V1_m[agei];
							s_amp.value = s_amp_V1_m[agei];
							rs_ratio.value = rs_ratio_V1_m[agei];
							break;
						case 'V2':
							p_amp.value = p_amp_V2_m[agei];
							r_amp.value = r_amp_V2_m[agei];
							s_amp.value = s_amp_V2_m[agei];
							rs_ratio.value = rs_ratio_V2_m[agei];
							break;
						case 'V4':
							r_amp.value = r_amp_V4_m[agei];
							s_amp.value = s_amp_V4_m[agei];
							break;
						case 'V6':
							q_amp.value = q_amp_V6_m[agei];
							r_amp.value = r_amp_V6_m[agei];
							s_amp.value = s_amp_V6_m[agei];
							rs_ratio.value = rs_ratio_V6_m[agei];
							break;
						case 'V7':
							q_amp.value = q_amp_V7_m[agei];
							r_amp.value = r_amp_V7_m[agei];
							s_amp.value = s_amp_V7_m[agei];
							rs_ratio.value = rs_ratio_V7_m[agei];
							break;
					}
				}
				break;
			case 'f':
				hr.value = hr_f[agei];
				p_axis.value = p_axis_f[agei];
				p_dur.value = p_dur_f[agei];
				pr_int.value = pr_int_f[agei];
				qrs_axis.value = qrs_axis_f[agei];
				qrs_dur.value = qrs_dur_f[agei];
				qtc.value = qtc_f[agei];
				if(lead != "") {
					switch(lead) {
						case 'I':
							r_amp.value = r_amp_I_f[agei];
							s_amp.value = s_amp_I_f[agei];
							break;
						case 'II':
							p_amp.value = p_amp_II_f[agei];
							q_amp.value = q_amp_II_f[agei];
							r_amp.value = r_amp_II_f[agei];
							s_amp.value = s_amp_II_f[agei];
							break;
						case 'III':
							q_amp.value = q_amp_III_f[agei];
							r_amp.value = r_amp_III_f[agei];
							s_amp.value = s_amp_III_f[agei];
							break;
						case 'aVR':
							r_amp.value = r_amp_aVR_f[agei];
							s_amp.value = s_amp_aVR_f[agei];
							break;
						case 'aVL':
							r_amp.value = r_amp_aVL_f[agei];
							s_amp.value = s_amp_aVL_f[agei];
							break;
						case 'aVF':
							q_amp.value = q_amp_aVF_f[agei];
							r_amp.value = r_amp_aVF_f[agei];
							s_amp.value = s_amp_aVF_f[agei];
							break;
						case 'V3R':
							r_amp.value = r_amp_V3R_f[agei];
							s_amp.value = s_amp_V3R_f[agei];
							rs_ratio.value = rs_ratio_V3R_f[agei];
							break;
						case 'V1':
							p_amp.value = p_amp_V1_f[agei];
							r_amp.value = r_amp_V1_f[agei];
							s_amp.value = s_amp_V1_f[agei];
							rs_ratio.value = rs_ratio_V1_f[agei];
							break;
						case 'V2':
							p_amp.value = p_amp_V2_f[agei];
							r_amp.value = r_amp_V2_f[agei];
							s_amp.value = s_amp_V2_f[agei];
							rs_ratio.value = rs_ratio_V2_f[agei];
							break;
						case 'V4':
							r_amp.value = r_amp_V4_f[agei];
							s_amp.value = s_amp_V4_f[agei];
							break;
						case 'V6':
							q_amp.value = q_amp_V6_f[agei];
							r_amp.value = r_amp_V6_f[agei];
							s_amp.value = s_amp_V6_f[agei];
							rs_ratio.value = rs_ratio_V6_f[agei];
							break;
						case 'V7':
							q_amp.value = q_amp_V7_f[agei];
							r_amp.value = r_amp_V7_f[agei];
							s_amp.value = s_amp_V7_f[agei];
							rs_ratio.value = rs_ratio_V7_f[agei];
							break;
					}
				}
				break;
		}
	}
}