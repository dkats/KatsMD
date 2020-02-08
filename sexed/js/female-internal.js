function female_internal(canvas_id, photo_id) {
	var canvas = document.getElementById(canvas_id);
	var ctx = canvas.getContext('2d');
	var img = document.getElementById(photo_id);

	var scale = 0.6;
	canvas.width = (img.width+100) * scale;
	canvas.height = img.height * scale;

	var lineh = 80*scale;
	ctx.fillStyle = "#f6fbff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Click to show another", canvas.width/2, canvas.height/2-lineh/2);
	ctx.fillText("diagram of female anatomy", canvas.width/2, canvas.height/2+lineh/2);

	canvas.addEventListener("click", function(event) {
		start_female_internal(canvas, ctx, img, scale);
	}, {once: true});
}

function start_female_internal(canvas, ctx, img, scale) {
	ctx.fillStyle = "#e2f3ff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 50*scale, 0, img.width*scale, img.height*scale);

	var lineh = 80*scale;

	// Rectangles
	ctx.fillStyle = "white";
	// Instructions
	ctx.fillRect(canvas.width/2-190*scale, 0, 2*190*scale, lineh-55*scale);
	// Ovary
	ctx.fillRect(0, 300*scale+lineh*0, 44, lineh-35*scale);
	// Uterus
	ctx.fillRect(0, 300*scale+lineh*1, 49, lineh-35*scale);
	// Vagina
	ctx.fillRect(0, 300*scale+lineh*2, 50, lineh-35*scale);
	// Uterine tube
	ctx.fillRect(canvas.width, 300*scale+lineh*0, -82, lineh-35*scale);
	// Cervix
	ctx.fillRect(canvas.width, 300*scale+lineh*1, -45, lineh-35*scale);

	// Instructions
	ctx.font = "12px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Click on the blanks to reveal the answers", canvas.width/2, 12);
		
	// Label settings
	var font_size = 14;

	// Arrows
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.beginPath();

	// Ovary
	canvas_arrow(ctx, 44, (300-font_size+32)*scale+lineh*0, 140*scale, 210*scale);
	// Uterus
	canvas_arrow(ctx, 49, (300-font_size+32)*scale+lineh*1, 315*scale, 165*scale);
	// Vagina
	canvas_arrow(ctx, 50, (300-font_size+32)*scale+lineh*2, 330*scale, 390*scale);
	// Uterine tube
	canvas_arrow(ctx, 596*scale, (300-font_size+32)*scale+lineh*0, 540*scale, 95*scale);
	// Cervix
	canvas_arrow(ctx, 660*scale, (300-font_size+32)*scale+lineh*1, 395*scale, 275*scale);
	ctx.stroke();

	var hidden_female_internal = new Array(5).fill(true);
	// Reveal labels
	canvas.addEventListener("click", function(event) {
		// https://stackoverflow.com/questions/5014851/get-click-event-of-each-rectangle-inside-canvas
		var x = event.pageX - Math.floor(canvas.getBoundingClientRect().left);
		var y = event.pageY - Math.floor(canvas.getBoundingClientRect().top);
		
		// Label settings
		var font_size = 14;
		ctx.font = font_size + "px Arial";
		// ctx.strokeStyle = "white";
		// ctx.lineWidth = 3;
		ctx.fillStyle = "black";
		ctx.textAlign = "left";

		if(hidden_female_internal[0] && (x >= 0 && x <= 44) && (y >= 300*scale+lineh*0 && y <= 300*scale+lineh*0+(lineh-35*scale))) {
			// ctx.strokeText("Ovary", 0, 300*scale+lineh*0);
			ctx.fillText("Ovary", 2, 300*scale+lineh*0+(lineh-50*scale));
			hidden_female_internal[0] = false;
		} else if(hidden_female_internal[1] && (x >= 0 && x <= 49) && (y >= 300*scale+lineh*1 && y <= 300*scale+lineh*1+(lineh-35*scale))) {
			// ctx.strokeText("Uterus", 0, 300*scale+lineh*1);
			ctx.fillText("Uterus", 2, 300*scale+lineh*1+(lineh-50*scale));
			hidden_female_internal[1] = false;
		} else if(hidden_female_internal[2] && (x >= 0 && x <= 50) && (y >= 300*scale+lineh*2 && y <= 300*scale+lineh*2+(lineh-35*scale))) {
			// ctx.strokeText("Vagina", 0, 300*scale+lineh*2);
			ctx.fillText("Vagina", 2, 300*scale+lineh*2+(lineh-50*scale));
			hidden_female_internal[2] = false;
		} else if(hidden_female_internal[3] && (x >= canvas.width-82 && x <= canvas.width) && (y >= 300*scale+lineh*0 && y <= 300*scale+lineh*0+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Uterine tube", canvas.width-2, 300*scale+lineh*0+(lineh-50*scale));
			ctx.fillText("Uterine tube", canvas.width-2, 300*scale+lineh*0+(lineh-50*scale));
			hidden_female_internal[3] = false;
		} else if(hidden_female_internal[4] && (x >= canvas.width-45 && x <= canvas.width) && (y >= 300*scale+lineh*1 && y <= 300*scale+lineh*1+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Cervix", canvas.width-2, 300*scale+lineh*1+(lineh-50*scale));
			ctx.fillText("Cervix", canvas.width-2, 300*scale+lineh*1+(lineh-50*scale));
			hidden_female_internal[4] = false;
		}
	});
}

// https://stackoverflow.com/questions/808826/draw-arrow-on-canvas-tag
function canvas_arrow(context, fromx, fromy, tox, toy) {
	var headlen = 10; // length of head in pixels
	var dx = tox - fromx;
	var dy = toy - fromy;
	var angle = Math.atan2(dy, dx);
	context.moveTo(fromx, fromy);
	context.lineTo(tox, toy);
	context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
	context.moveTo(tox, toy);
	context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}