function male_front(canvas_id, photo_id) {
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
	ctx.fillText("of male anatomy", canvas.width/2, canvas.height/2+lineh/2);

	canvas.addEventListener("click", function(event) {
		start_male_front(canvas, ctx, img, scale);
	}, {once: true});
}

function start_male_front(canvas, ctx, img, scale) {
	ctx.fillStyle = "#e2f3ff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0, img.width*scale, img.height*scale);

	var lineh = 60*scale;

	// Rectangles
	ctx.fillStyle = "white";
	// Instructions
	ctx.fillRect(585*scale, 0, 120, 28);
	// Seminal vesicle
	ctx.fillRect(595*scale, 70*scale+lineh*0, 110, lineh-15*scale);
	// Prostate
	ctx.fillRect(595*scale, 70*scale+lineh*1, 56, lineh-15*scale);
	// Vas deferens
	ctx.fillRect(595*scale, 70*scale+lineh*2, 90, lineh-15*scale);
	// Urethra
	ctx.fillRect(595*scale, 70*scale+lineh*3, 53, lineh-15*scale);
	// Penis
	ctx.fillRect(595*scale, 70*scale+lineh*4, 40, lineh-15*scale);
	// Epididymis
	ctx.fillRect(595*scale, 70*scale+lineh*5, 73, lineh-15*scale);
	// Testicle/testis
	ctx.fillRect(595*scale, 70*scale+lineh*6, 90, lineh-15*scale);
	// Scrotum
	ctx.fillRect(595*scale, 70*scale+lineh*7, 60, lineh-15*scale);

	// Instructions
	ctx.font = "12px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "left";
	ctx.fillText("Click on the blanks", 590*scale, 12);
	ctx.fillText("to reveal the answers", 590*scale, 24);
		
	// Label settings
	var font_size = 14;

	// Arrows
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.beginPath();
	// Seminal vesicle
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*0, 450*scale, 180*scale);
	// Prostate
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*1, 400*scale, 270*scale);
	// Vas deferens
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*2, 465*scale, 270*scale);
	// Urethra
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*3, 385*scale, 370*scale);
	// Penis
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*4, 416*scale, 390*scale);
	// Epididymis
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*5, 460*scale, 405*scale);
	// Testicle/testis
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*6, 458*scale, 460*scale);
	// Scrotum
	canvas_arrow(ctx, 595*scale, (100-font_size+4)*scale+lineh*7, 490*scale, 480*scale);
	ctx.stroke();

	var hidden_male_front = new Array(8).fill(true);
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

		if(hidden_male_front[0] && (x >= 595*scale && x <= 595*scale+110) && (y >= 70*scale+lineh*0 && y <= 70*scale+lineh*0+(lineh-15*scale))) {
			// ctx.strokeText("Seminal vesicle", 600*scale, 100*scale+lineh*0);
			ctx.fillText("Seminal vesicle", 600*scale, 100*scale+lineh*0);
			hidden_male_front[0] = false;
		} else if(hidden_male_front[1] && (x >= 595*scale && x <= 595*scale+56) && (y >= 70*scale+lineh*1 && y <= 70*scale+lineh*1+(lineh-15*scale))) {
			// ctx.strokeText("Prostate", 600*scale, 100*scale+lineh*1);
			ctx.fillText("Prostate", 600*scale, 100*scale+lineh*1);
			hidden_male_front[1] = false;
		} else if(hidden_male_front[2] && (x >= 595*scale && x <= 595*scale+90) && (y >= 70*scale+lineh*2 && y <= 70*scale+lineh*2+(lineh-15*scale))) {
			// ctx.strokeText("Vas deferens", 600*scale, 100*scale+lineh*2);
			ctx.fillText("Vas deferens", 600*scale, 100*scale+lineh*2);
			hidden_male_front[2] = false;
		} else if(hidden_male_front[3] && (x >= 595*scale && x <= 595*scale+53) && (y >= 70*scale+lineh*3 && y <= 70*scale+lineh*3+(lineh-15*scale))) {
			// ctx.strokeText("Urethra", 600*scale, 100*scale+lineh*3);
			ctx.fillText("Urethra", 600*scale, 100*scale+lineh*3);
			hidden_male_front[3] = false;
		} else if(hidden_male_front[4] && (x >= 595*scale && x <= 595*scale+40) && (y >= 70*scale+lineh*4 && y <= 70*scale+lineh*4+(lineh-15*scale))) {
			// ctx.strokeText("Penis", 600*scale, 100*scale+lineh*4);
			ctx.fillText("Penis", 600*scale, 100*scale+lineh*4);
			hidden_male_front[4] = false;
		} else if(hidden_male_front[5] && (x >= 595*scale && x <= 595*scale+73) && (y >= 70*scale+lineh*5 && y <= 70*scale+lineh*5+(lineh-15*scale))) {
			// ctx.strokeText("Epididymis", 600*scale, 100*scale+lineh*5);
			ctx.fillText("Epididymis", 600*scale, 100*scale+lineh*5);
			hidden_male_front[5] = false;
		} else if(hidden_male_front[6] && (x >= 595*scale && x <= 595*scale+90) && (y >= 70*scale+lineh*6 && y <= 70*scale+lineh*6+(lineh-15*scale))) {
			// ctx.strokeText("Testicle/testis", 600*scale, 100*scale+lineh*6);
			ctx.fillText("Testicle/testis", 600*scale, 100*scale+lineh*6);
			hidden_male_front[6] = false;
		} else if(hidden_male_front[7] && (x >= 595*scale && x <= 595*scale+60) && (y >= 70*scale+lineh*7 && y <= 70*scale+lineh*7+(lineh-15*scale))) {
			// ctx.strokeText("Scrotum", 600*scale, 100*scale+lineh*7);
			ctx.fillText("Scrotum", 600*scale, 100*scale+lineh*7);
			hidden_male_front[7] = false;
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