var webshot = require('webshot');

var fsOptions = {
	siteType: 'url',
	screenSize: { width: 1024, height: 768},
	shotSize: { width: 1024, height: 'all' },
}

var mobOptions = {
	siteType: 'url',
	screenSize: { width: 320, height: 480},
	shotSize: { width: 320, height: 'all' },
	userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'	
}

webshot('localhost/designs/compound-muzik-design/public/index.html', 'homepage.png', fsOptions, function(err) {});
webshot('localhost/designs/compound-muzik-design/public/index.html', 'mobile.png', mobOptions, function(err) {});
