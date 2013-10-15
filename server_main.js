var http = require('http');
settings = require('../../src/node/utils/Settings');
exports.padUpdate = function(hook, context){
	var options = {
		host: settings.ep_latexpad.host,
		port: settings.ep_latexpad.port,
		path: '/ocs/v1.php/apps2/latexpad/update/'+context.pad.id+'?format=json',
		auth: settings.ep_latexpad.auth,
		method: 'GET'
	};
	var req = http.request(options, function(res) {
// 	  res.setEncoding('utf8');
// 	  res.on('data', function (chunk) {
// 	    console.log('BODY: ' + chunk);
// 	  });
	}).on('error', function(e) {
		console.log(e.message);
	});
	// write data to request body
// 	req.write('data\n');
// 	req.write('data\n');
	req.end();
}
