function male_side(canvas_id, photo_id) {
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
	ctx.fillText("Click to show another", canvas.width/2, canvas.height/2-lineh/2);
	ctx.fillText("diagram of male anatomy", canvas.width/2, canvas.height/2+lineh/2);

	canvas.addEventListener("click", function(event) {
		start_male_side(canvas, ctx, img, scale);
	}, {once: true});
}

function start_male_side(canvas, ctx, img, scale) {
	ctx.fillStyle = "#e2f3ff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 50*scale, 0, img.width*scale, img.height*scale);

	var lineh = 80*scale;

	// Rectangles
	ctx.fillStyle = "white";
	// Instructions
	ctx.fillRect(0, 50, 120, 28);
	// Seminal vesicle
	ctx.fillRect(0, 200*scale+lineh*0, 105, lineh-35*scale);
	// Prostate
	ctx.fillRect(0, 200*scale+lineh*1, 56, lineh-35*scale);
	// Epididymis
	ctx.fillRect(0, 200*scale+lineh*2, 73, lineh-35*scale);
	// Testicle/testis
	ctx.fillRect(0, 200*scale+lineh*3, 90, lineh-35*scale);
	// Scrotum
	ctx.fillRect(0, 200*scale+lineh*4, 60, lineh-35*scale);
	// Bladder
	ctx.fillRect(canvas.width, 20*scale+lineh*0, -53, lineh-35*scale);
	// Vas deferens
	ctx.fillRect(canvas.width, 20*scale+lineh*1, -86, lineh-35*scale);
	// Urethra
	ctx.fillRect(canvas.width, 20*scale+lineh*2, -51, lineh-35*scale);
	// Penis
	ctx.fillRect(canvas.width, 20*scale+lineh*3, -40, lineh-35*scale);

	// Instructions
	ctx.font = "12px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "left";
	ctx.fillText("Click on the blanks", 2, 62);
	ctx.fillText("to reveal the answers", 2, 74);
		
	// Label settings
	var font_size = 14;

	// Arrows
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.beginPath();

	// Seminal vesicle
	canvas_arrow(ctx, 105, (232-font_size+4)*scale+lineh*0, 295*scale, 270*scale);
	// Prostate
	canvas_arrow(ctx, 56, (232-font_size+4)*scale+lineh*1, 360*scale, 340*scale);
	// Epididymis
	canvas_arrow(ctx, 73, (232-font_size+4)*scale+lineh*2, 490*scale, 495*scale);
	// Testicle/testis
	canvas_arrow(ctx, 90, (232-font_size+4)*scale+lineh*3, 520*scale, 520*scale);
	// Scrotum
	canvas_arrow(ctx, 60, (232-font_size+4)*scale+lineh*4, 460*scale, 550*scale);
	// Bladder
	canvas_arrow(ctx, 615*scale, (20-font_size+32)*scale+lineh*0, 400*scale, 230*scale);
	// Vas deferens
	canvas_arrow(ctx, 548*scale, (20-font_size+32)*scale+lineh*1, 500*scale, 180*scale);
	// Urethra
	canvas_arrow(ctx, 617*scale, (20-font_size+32)*scale+lineh*2, 560*scale, 375*scale);
	// Penis
	canvas_arrow(ctx, 640*scale, (20-font_size+32)*scale+lineh*3, 630*scale, 370*scale);
	ctx.stroke();

	var hidden_male_side = new Array(9).fill(true);
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

		if(hidden_male_side[0] && (x >= 0 && x <= 105) && (y >= 200*scale+lineh*0 && y <= 200*scale+lineh*0+(lineh-35*scale))) {
			// ctx.strokeText("Seminal vesicle", 0, 200*scale+lineh*0);
			ctx.fillText("Seminal vesicle", 2, 200*scale+lineh*0+(lineh-50*scale));
			hidden_male_side[0] = false;
		} else if(hidden_male_side[1] && (x >= 0 && x <= 56) && (y >= 200*scale+lineh*1 && y <= 200*scale+lineh*1+(lineh-35*scale))) {
			// ctx.strokeText("Prostate", 0, 200*scale+lineh*1);
			ctx.fillText("Prostate", 2, 200*scale+lineh*1+(lineh-50*scale));
			hidden_male_side[1] = false;
		} else if(hidden_male_side[2] && (x >= 0 && x <= 73) && (y >= 200*scale+lineh*2 && y <= 200*scale+lineh*2+(lineh-35*scale))) {
			// ctx.strokeText("Epididymis", 0, 200*scale+lineh*2);
			ctx.fillText("Epididymis", 2, 200*scale+lineh*2+(lineh-50*scale));
			hidden_male_side[2] = false;
		} else if(hidden_male_side[3] && (x >= 0 && x <= 90) && (y >= 200*scale+lineh*3 && y <= 200*scale+lineh*3+(lineh-35*scale))) {
			// ctx.strokeText("Testicle/testis", 0, 200*scale+lineh*3);
			ctx.fillText("Testicle/testis", 2, 200*scale+lineh*3+(lineh-50*scale));
			hidden_male_side[3] = false;
		} else if(hidden_male_side[4] && (x >= 0 && x <= 60) && (y >= 200*scale+lineh*4 && y <= 200*scale+lineh*4+(lineh-35*scale))) {
			// ctx.strokeText("Scrotum", 0, 200*scale+lineh*4);
			ctx.fillText("Scrotum", 2, 200*scale+lineh*4+(lineh-50*scale));
			hidden_male_side[4] = false;
		} else if(hidden_male_side[5] && (x >= canvas.width-53 && x <= canvas.width) && (y >= 20*scale+lineh*0 && y <= 20*scale+lineh*0+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Bladder", canvas.width-2, 20*scale+lineh*0+(lineh-50*scale));
			ctx.fillText("Bladder", canvas.width-2, 20*scale+lineh*0+(lineh-50*scale));
			hidden_male_side[5] = false;
		} else if(hidden_male_side[6] && (x >= canvas.width-86 && x <= canvas.width) && (y >= 20*scale+lineh*1 && y <= 20*scale+lineh*1+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Vas deferens", canvas.width-2, 20*scale+lineh*1+(lineh-50*scale));
			ctx.fillText("Vas deferens", canvas.width-2, 20*scale+lineh*1+(lineh-50*scale));
			hidden_male_side[6] = false;
		} else if(hidden_male_side[7] && (x >= canvas.width-51 && x <= canvas.width) && (y >= 20*scale+lineh*2 && y <= 20*scale+lineh*2+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Urethra", canvas.width-2, 20*scale+lineh*2+(lineh-50*scale));
			ctx.fillText("Urethra", canvas.width-2, 20*scale+lineh*2+(lineh-50*scale));
			hidden_male_side[7] = false;
		} else if(hidden_male_side[8] && (x >= canvas.width-40 && x <= canvas.width) && (y >= 20*scale+lineh*3 && y <= 20*scale+lineh*3+(lineh-35*scale))) {
			ctx.textAlign = "right";
			// ctx.strokeText("Penis", canvas.width-2, 20*scale+lineh*3+(lineh-50*scale));
			ctx.fillText("Penis", canvas.width-2, 20*scale+lineh*3+(lineh-50*scale));
			hidden_male_side[8] = false;
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