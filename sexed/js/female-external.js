function female_external(canvas_id, photo_id) {
	var canvas = document.getElementById(canvas_id);
	var ctx = canvas.getContext('2d');
	var img = document.getElementById(photo_id);

	var scale = 0.5;
	canvas.width = (img.width+100) * scale;
	canvas.height = img.height * scale;

	var lineh = 80*scale;
	ctx.fillStyle = "#f6fbff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Click to show a diagram", canvas.width/2, canvas.height/2-lineh/2);
	ctx.fillText("of female anatomy", canvas.width/2, canvas.height/2+lineh/2);

	canvas.addEventListener("click", function(event) {
		start_female_external(canvas, ctx, img, scale);
	}, {once: true});
}

function start_female_external(canvas, ctx, img, scale) {
	ctx.fillStyle = "#e2f3ff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 50*scale, 0, img.width*scale, img.height*scale);

	var lineh = 80*scale;

	// Rectangles
	ctx.fillStyle = "white";
	// Instructions
	ctx.fillRect(0, 0, 120, 28);
	// Labia majora
	ctx.fillRect(0, 100*scale+lineh*0, 88, lineh-35*scale);
	// Clitoris
	ctx.fillRect(0, 100*scale+lineh*1, 50, lineh-35*scale);
	// Vagina
	ctx.fillRect(0, 100*scale+lineh*2, 50, lineh-35*scale);
	// Labia minora
	ctx.fillRect(canvas.width, 100*scale+lineh*0, -86, lineh-35*scale);
	// Urethra
	ctx.fillRect(canvas.width, 100*scale+lineh*1, -52, lineh-35*scale);
	// Anus
	ctx.fillRect(canvas.width, 100*scale+lineh*2, -38, lineh-35*scale);

	// Instructions
	ctx.font = "12px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "left";
	ctx.fillText("Click on the blanks", 2, 12);
	ctx.fillText("to reveal the answers", 2, 24);
		
	// Label settings
	var font_size = 14;

	// Arrows
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.beginPath();
	// Labia majora
	canvas_arrow(ctx, 88, (100-font_size+32)*scale+lineh*0, 280*scale, 170*scale);
	// Clitoris
	canvas_arrow(ctx, 50, (100-font_size+32)*scale+lineh*1, canvas.width/2-30*scale, 180*scale);
	// Vagina
	canvas_arrow(ctx, 50, (100-font_size+32)*scale+lineh*2, canvas.width/2-25*scale, 280*scale);
	// Labia minora
	canvas_arrow(ctx, 563*scale, (100-font_size+32)*scale+lineh*0, 398*scale, 250*scale);
	// Urethra
	canvas_arrow(ctx, 630*scale, (100-font_size+32)*scale+lineh*1, canvas.width/2-6*scale, 226*scale);
	// Anus
	canvas_arrow(ctx, 658*scale, (100-font_size+32)*scale+lineh*2, canvas.width/2-18*scale, 450*scale);
	ctx.stroke();


	var hidden_female_external = new Array(6).fill(true);
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

		if(hidden_female_external[0] && (x >= 0 && x <= 105) && (y >= 100*scale+lineh*0 && y <= 100*scale+lineh*0+(lineh-35*scale))) {
			// ctx.strokeText("Labia majora", 0, 100*scale+lineh*0);
			ctx.fillText("Labia majora", 2, 100*scale+lineh*0+(lineh-50*scale));
			hidden_female_external[0] = false;
		} else if(hidden_female_external[1] && (x >= 0 && x <= 56) && (y >= 100*scale+lineh*1 && y <= 100*scale+lineh*1+(lineh-35*scale))) {
			// ctx.strokeText("Clitoris", 0, 100*scale+lineh*1);
			ctx.fillText("Clitoris", 2, 100*scale+lineh*1+(lineh-50*scale));
			hidden_female_external[1] = false;
		} else if(hidden_female_external[2] && (x >= 0 && x <= 73) && (y >= 100*scale+lineh*2 && y <= 100*scale+lineh*2+(lineh-35*scale))) {
			// ctx.strokeText("Vagina", 0, 100*scale+lineh*2);
			ctx.fillText("Vagina", 2, 100*scale+lineh*2+(lineh-50*scale));
			hidden_female_external[2] = false;
		} else if(hidden_female_external[3] && (x >= canvas.width-86 && x <= canvas.width) && (y >= 100*scale+lineh*0 && y <= 100*scale+lineh*0+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Labia minora", canvas.width-2, 100*scale+lineh*0+(lineh-50*scale));
			ctx.fillText("Labia minora", canvas.width-2, 100*scale+lineh*0+(lineh-50*scale));
			hidden_female_external[3] = false;
		} else if(hidden_female_external[4] && (x >= canvas.width-51 && x <= canvas.width) && (y >= 100*scale+lineh*1 && y <= 100*scale+lineh*1+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Urethra", canvas.width-2, 100*scale+lineh*1+(lineh-50*scale));
			ctx.fillText("Urethra", canvas.width-2, 100*scale+lineh*1+(lineh-50*scale));
			hidden_female_external[4] = false;
		} else if(hidden_female_external[5] && (x >= canvas.width-40 && x <= canvas.width) && (y >= 100*scale+lineh*2 && y <= 100*scale+lineh*2+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Anus", canvas.width-2, 100*scale+lineh*2+(lineh-50*scale));
			ctx.fillText("Anus", canvas.width-2, 100*scale+lineh*2+(lineh-50*scale));
			hidden_female_external[5] = false;
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