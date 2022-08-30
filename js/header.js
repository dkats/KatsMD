function header(level = 0) {
	if(level == 0) {
		dir = '';
	} else if(level == -1) {
		dir = '../';
	}

	document.write('<header>');
	document.write('<ul class="menu">');
	document.write('	<li class="homeclick" onclick="window.open(\'' + dir + 'index.html\',\'_self\')" id="header_home">KatsMD</li>');
		// document.write('	<li onclick="window.open(\'' + dir + 'sexed.html\',\'_self\')" id="header_sexed">Sex Ed</li>');
		document.write('	<li onclick="window.open(\'' + dir + 'info.html\',\'_self\')" id="header_info">Patient Information</li>');
		document.write('	<li onclick="window.open(\'' + dir + 'clinicians.html\',\'_self\')" id="header_clinicians">For Clinicians</li>');
	document.write('</ul>');
	document.write('</header>');
}