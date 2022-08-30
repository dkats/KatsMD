// Rainbow generator: http://www.nikolay.rocks/2015-10-29-rainbows-generator-in-javascript
// Wheel: http://jsbin.com/qefada/11/edit?html,css,js,output

function rand(min, max) {
	return Math.random() * (max - min) + min;
}

function shuffle(arr) {
	var ctr = arr.length, temp, index;

	// While there are elements in the array
	while (ctr > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * ctr);
		// Decrease ctr by 1
		ctr--;
		// And swap the last element with it
		temp = arr[ctr];
		arr[ctr] = arr[index];
		arr[index] = temp;
	}
	return arr;
}

// Diseases
var labels = ['PID', 'Gonorrhea', 'Chlamydia', 'Syphilis', 'Bacterial vaginosis', 'Yeast infection', 'Trichomoniasis', 'Pubic lice (crabs)', 'Scabies', 'Herpes', 'Hepatitis B', 'Hepatitis C', 'Genital warts', 'HIV'];
labels = shuffle(labels);
var slices = labels.length;

// Evenly spaced rainbow for each label
var colors = new Array(slices);
function sin_to_hex(i, phase) {
	var sin = Math.sin(Math.PI / slices * 2 * i + phase);
	var int = Math.floor(sin * 127) + 128;
	var hex = int.toString(16);

	return hex.length === 1 ? "0"+hex : hex;
}
for (var i=0; i<slices; i++) {
	var red   = sin_to_hex(i, 0 * Math.PI * 2/3);	//   0 deg
	var blue  = sin_to_hex(i, 1 * Math.PI * 2/3);	// 120 deg
	var green = sin_to_hex(i, 2 * Math.PI * 2/3);	// 240 deg

	colors[i] = "#"+ red + green + blue;
}

// Questions
var qs = ["What's the agent?", "Is it treatable or curable?", "What is the most common symptom?", "What is a <i>specific</i> symptom?", "What are the long-term health risks?", "What's the treatment?"];

// Answers
var ans = [
	// Pelvic inflammatory disease
	["Bacteria (Usually <i>Neisseria gonorrhoeae</i>, but can also be <i>Chlamydia trachomatis</i>, <i>Mycoplasma genitalium</i>, or other bacteria)",
	"Curable, but risk of it happening again is increased",
	"Lower abdominal pain (usually on both sides of the body)",
	"<ul><li><strong>Lower abdominal pain</strong> (usually on both sides of the body)</li><li>Pain during sex</li><li>Pain during or right after menses</li><li>Abnormal uterine bleeding (bleeding after sex, bleeding between menstrual periods, severe bleeding during menses)</li></ul>",
	"<ul><li>Damaged fallopian tubes</li><li>Long-term pain</li><li>Infertility</li><li>Ectopic pregnancy (growth of the fetus outside of the uterus)</li><li>Ovarian cancer</li></ul>",
	"Antibiotics (usually 2 weeks)"],
	// Gonorrhea
	["Bacteria (<i>Neisseria gonorrhoeae</i>)",
	"Curable",
	"No symptoms in about 3/4 of people!",
	"<ul><li>Vaginal inching</li><li>Vaginal/penile discharge</li><li>Bleeding between periods</li><li>Heavy bleeding during periods</li><li>Pain with urination</li></ul>",
	"<ul><li>Pelvic inflammatory disease (infertility, long-term pain)</li><li>Joint infection</li><li>Skin infection</li><li>Inflammation of joints and tendons</li><li>Eye infection in newborns if mom is infected</li></ul>",
	"Antibiotics (usually just one dose of two medicines)"],
	// Chlamydia
	["Bacteria (<i>Chlamydia trachomatis</i>)",
	"Curable",
	"No symptoms in about 3/4 of people!",
	"<ul><li>Vaginal/penile discharge</li><li>Bleeding between periods</li><li>Heavy bleeding during periods</li><li>Pain with urination</li></ul>",
	"<ul><li>Pelvic inflammatory disease (infertility, long-term pain)</li><li>Eye infection in newborns if mom is infected</li></ul>",
	"Antibiotics (usually just one dose of two medicines)"],
	// Syphilis
	["Bacteria (<i>Treponema pallidum</i>)",
	"Curable",
	"Painless raised red bump or sore",
	"Wide range in symptoms, depending on what stage of infection it is:<ul><li>Painless raised red bump or sore</li><li>Widespread rash</li><li>Large, raised, gray or white patches on warm, moist areas of the body (such as the mouth and genitals)</li><li>Swollen lymph nodes in the neck, armpit, and groin area</li></ul>",
	"<ul><li>Brain damage causing confusion, vision loss, memory loss, personality change</li><li>Heart damage</li></ul>",
	"Antibiotics (penicillin)"],
	// Bacterial vaginosis
	["Bacteria (<i>Gardnerella vaginalis</i> and many more)",
	"Curable",
	"No symptoms in about 3/4 of people!",
	"<ul><li>Vaginal discharge: off-white, thin, and homogeneous</li><li>Odor (fishy), especially after sex or during menses</li></ul>",
	"Long-term consequences are rare",
	"Antibiotics"],
	// Yeast infection
	["Fungus (<i>Candida albicans</i>)",
	"Curable",
	"Vulvar itching",
	"<ul><li>Vulvar itching</li><li>Vulvar burning</li><li>Vulvar soreness</li><li>Vulvar irritation</li><li>Pain during urination</li><li>Pain during sex</li></ul>",
	"Pelvic inflammatory disease",
	"Antibiotics"],
	// Trichomoniasis
	["Parasite (<i>Trichomonas vaginalis</i>)",
	"Curable",
	"No symptoms in about 3/4 of people!",
	"<ul><li>Vaginal/penile discharge: green-yellow, thin/runny</li><li>Vaginal odor</li><li>Vaginal/penile burning</li><li>Vaginal/penile pruritus</li><li>Pain during urination</li><li>Lower abdominal pain</li><li>Pain during sex</li></ul>",
	"<ul><li>Urinary tract infection (urethra or bladder)</li><li>Pelvic inflammatory disease</li><li>Infertility</li></ul>",
	"Antibiotics (usually one dose)"],
	// Pubic lice
	["Parasite (<i>Phthirus pubis</i>)",
	"Curable",
	"Itching",
	"<ul><li>Itching</li><li>Eye irritation (if it infects the eyelashes)</li><li>Pale bluish spots on the lower belly, upper thighs, or buttocks</li></ul>",
	"No long-term effects",
	"Antibiotics (usually one or two doses)"],
	// Scabies
	["Parasite (<i>Sarcoptes scabiei</i>)",
	"Curable",
	"Severe itching (worse at night) in skin creases",
	"<ul><li>Severe itching (worse at night) in skin creases</li><li>Multiple small, red bumps</li><li>Thin, gray, red, or brown, winding lines (less than half an inch long)</li></ul>",
	"No long-term effects",
	"Antibiotics (usually one or two doses)"],
	// Herpes
	["Virus (herpes simplex virus type 1 (oral) and type 2 (genital))",
	"Treatable",
	"There is no most common symptom",
	"<ul><li>Multiple blisters that become painful ulcers</li><li>Pain with urination</li><li>Fever</li><li>Painful lymph nodes</li><li>Headache</li></ul>",
	"Outbreaks when the virus reactivates",
	"Antiviral medications (makes you feel better, but doesn't prevent the outbreaks)"],
	// Hepatitis B
	["Virus (hepatitis B virus)",
	"Somewhat treatable",
	"No symptoms in more than half of people!",
	"<ul><li>Yellowing of the skin or eyes</li><li>Fatigue</li><li>Loss of appetite</li><li>Nausea/vomiting</li><li>Abdominal pain</li><li>Joint pain</li><li>Dark urine</li><li>Clay-colored stool</li><li>Fever</li></ul>",
	"Chronic liver disease (cirrhosis, liver failure, or liver cancer)",
	"Vaccine is available and given during childhood! No great treatment, antiviral medications can help<ul><li>If infected as an adult, the body cures itself in 95% of people</li><li>If infected at birth, the infections <i>stays</i> in 90% of people</ul>"],
	// Hepatitis C
	["Virus (hepatitis C virus)",
	"Treatable and becoming curable",
	"No symptoms in about 3/4 of people!",
	"<ul><li>Yellowing of the skin or eyes</li><li>Fatigue</li><li>Loss of appetite</li><li>Nausea/vomiting</li><li>Abdominal pain</li><li>Joint pain</li><li>Dark urine</li><li>Clay-colored stool</li><li>Fever</li></ul>",
	"Chronic liver disease (cirrhosis, liver failure, or liver cancer)",
	"Antiviral medications can potentially cure (2&ndash;3 months of daily pills)"],
	// Genital warts
	["Virus (human papillomavirus (HPV))",
	"Treatable (the warts, not the virus)",
	"Very frequently there are <strong>no symptoms</strong>",
	"Genital warts",
	"<ul><li>Cervical cancer</li><li>Vaginal cancer</li><li>Penile cancer</li><li>Anal cancer</li><li>Cancer of the mouth and throat</li></ul>",
	"Vaccine is available and given to teenagers! The warts can be removed with medicines or surgery."],
	// HIV
	["Virus (human immunodeficiency virus (HIV))",
	"Treatable",
	"No symptoms in the majority of people (at first)",
	"<ul><li>Fever</li><li>Sore throat</li><li>Headache</li><li>Muscle pain</li><li>Joint pain</li><li>Swollen lymph nodes</li></ul>",
	"<ul><li>AIDS</li><li>Lung infections (e.g., pneumonia)</li><li>Brain infections</li><li>Eye infections</li><li>Yeast infections (mouth)</li></ul>",
	"Antiviral medications for the rest of your life"]
];

// Points for each question (in increments of 100)
var qpoints = new Array(qs.length);;
for(i=0; i<qs.length; i++) {
	qpoints[i] = (100*(i+1));
}

// Make a button for each point value and disable the buttons
qpoints.forEach(function(item) {
	document.getElementById("question_buttons").innerHTML += "<button id=" + item + " class='qpoints'>" + item + "</button>";
	document.getElementById(item).disabled = true;
});

// Add event listeners
qpoints.forEach(function(item) {
	document.getElementById(item).addEventListener("click", function(event) {
		document.getElementById("question").innerHTML = qs[event.target.id/100-1];
		document.getElementById("ans_button").disabled = false;
		document.getElementById("ans").innerHTML = "";
		curr_qi = event.target.id/100-1
	}, false);
});

var sliceDeg = 360/slices;
var deg = rand(0, 360);
var speed = 0;
var slowDownRand = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var width = canvas.width;	// size
var center = width/2;		// center
var isStopped = false;
var lock = false;

function deg2rad(deg) {
	return deg * Math.PI/180;
}

function drawSlice(deg, color) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.moveTo(center, center);
	ctx.arc(center, center, width/2, deg2rad(deg), deg2rad(deg+sliceDeg));
	ctx.lineTo(center, center);
	ctx.fill();
}

function drawText(deg, text) {
	ctx.save();
	ctx.translate(center, center);
	ctx.rotate(deg2rad(deg));
	ctx.textAlign = "left";
	ctx.fillStyle = "#fff";
	ctx.font = 'bold 16pt sans-serif';
	ctx.fillText(text, 50, 8);
	ctx.restore();
}

function drawImg() {
	ctx.clearRect(0, 0, width, width);
	for(var i=0; i<slices; i++){
		drawSlice(deg, colors[i]);
		drawText(deg+sliceDeg/2, labels[i]);
		deg += sliceDeg;
	}
}

document.getElementById("stop").addEventListener("click", function(){
	isStopped = true;
	qpoints.forEach(function(item) {
		document.getElementById(item).disabled = false;
	});
	document.getElementById("stop").disabled = true;
	document.getElementById("reset").disabled = false;
}, false);

document.getElementById("reset").addEventListener("click", function(){
	isStopped = false;
	document.getElementById("reset").disabled = true;
	document.getElementById("stop").disabled = false;
	document.getElementById("disease").innerHTML = "";
	qpoints.forEach(function(item) {
		document.getElementById(item).disabled = true;
	});
	document.getElementById("question").innerHTML = "";
	document.getElementById("ans_button").disabled = true;
	document.getElementById("ans").innerHTML = "";
	(anim());
}, false);

document.getElementById("ans_button").addEventListener("click", function(){
	document.getElementById("ans_button").disabled = true;
	document.getElementById("ans").innerHTML = ans[curr_labeli][curr_qi];
}, false);

function anim() {
	deg += speed;
	deg %= 360;

	// Increment speed
	if(!isStopped && speed<3){
		speed = speed+1 * 0.1;
	}
	// Decrement Speed
	if(isStopped){
		if(!lock){
			lock = true;
			slowDownRand = rand(0.988, 0.992);
		} 
		speed = speed>0.2 ? speed*=slowDownRand : 0;
	}
	// Stopped!
	if(lock && !speed){
		var ai = Math.floor(((360 - deg - 90) % 360) / sliceDeg); // deg 2 Array Index
		ai = (slices+ai)%slices; // Fix negative index
		curr_labeli = ai;
		var out = labels[ai];
		if(out === "PID") {
			out = "Pelvic inflammatory disease";
		}
		return document.getElementById("disease").innerHTML = out;
	}

	drawImg();
	window.requestAnimationFrame(anim);
}

anim();
var curr_label = null;
var curr_qi = null;
var curr_labeli = null;