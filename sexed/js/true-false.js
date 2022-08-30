function true_false(id, ans, treason="", freason="", reason="") {
	treason = (treason === "" ? (ans ? "Correct!" : "Try again") : treason);
	freason = (freason === "" ? (ans ? "Try again" : "Correct!") : freason);

	document.write("<input type='radio' ");
	// Name the button group based on the ID
	document.write("name='" + id + "' ");
	// When clicked: display the accompanying div
	document.write("onclick='document.getElementById(\"" + id + "_t\").style.display = \"initial\";");
	// Also when clicked, display the overall answer div (if present)
	document.write((reason === "" ? "" : "document.getElementById(\"" + id + "_ans\").style.display = \"block\";") + "'>True&emsp;");
	// Assign a class based on where the correct answer is
	document.write("<span class='" + (ans ? "TFcorrect" : "TFwrong") + "' ");
	// Assign an ID based on the provided ID (with '_t' appended)
	document.write("id='" + id + "_t' ");
	// Create the accompanying answer div (and hide it)
	document.write("style='display: none;'>" + treason + "</span><br />\n");
	document.write("<input type='radio' ");
	// Name the button group based on the ID
	document.write("name='" + id + "' ");
	// When clicked: display the accompanying div
	document.write("onclick='document.getElementById(\"" + id + "_f\").style.display = \"initial\";");
	// Also when clicked, display the overall answer div (if present)
	document.write((reason === "" ? "" : "document.getElementById(\"" + id + "_ans\").style.display = \"block\";") + "'>False&emsp;");
	// Assign a class based on where the correct answer is
	document.write("<span class='" + (ans ? "TFwrong" : "TFcorrect") + "' ");
	// Assign an ID based on the provided ID (with '_f' appended)
	document.write("id='" + id + "_f' ");
	// Create the accompanying answer div (and hide it)
	document.write("style='display: none;'>" + freason + "</span><br />\n");
	document.write((reason === "" ? "" : "<div class='TFans' id='" + id + "_ans' style='display: none;'>" + reason + "</div>\n"));
}