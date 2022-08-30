function header(level = 0) {
	if(level == 0) {
		dir = 'sexed/';
		dirhome = ''
	} else if(level == 1) {
		dir = '';
		dirhome = '../';
	}

	document.write('<header>');
	document.write('<ul class="menu">');
	document.write('	<li class="homeclick" onclick="window.open(\'' + dirhome + 'index.html\',\'_self\')">KatsMD</li>');
	document.write('	<li class="homeclick" onclick="window.open(\'' + dirhome + 'sexed.html\',\'_self\')" id="head_sexed">Sex Ed</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'consent.html\',\'_self\')" id="head_consent">Consent</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'anatomy.html\',\'_self\')" id="head_anatomy">Anatomy</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'stis.html\',\'_self\')" id="head_stis">STIs/STDs</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'contraception.html\',\'_self\')" id="head_contra">Contraception</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'sexuality.html\',\'_self\')" id="head_sexuality">Gender & Sexuality</li>');
	document.write('	<li style="float:right;" onclick="window.open(\'' + dir + 'resources.html\',\'_self\')" id="head_resources">Resources</li>');
	document.write('</ul>');
	document.write('</header>');
}