function click_to_show(canvas_id, img_id, description = "", scale = 1) {
	var canvas = document.getElementById(canvas_id);
	var ctx = canvas.getContext('2d');
	var img = document.getElementById(img_id);

	canvas.width = img.width * scale;
	canvas.height = img.height * scale;

	var lineh = 80*scale;
	ctx.fillStyle = "#f6fbff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "30px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Click to reveal", canvas.width/2, canvas.height/2-lineh/2);
	ctx.fillText(description, canvas.width/2, canvas.height/2+lineh/2);

	canvas.addEventListener("click", function(event) {
		ctx.fillStyle = "#e2f3ff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 0, 0, img.width*scale, img.height*scale);
	}, {once: true});
}