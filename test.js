/**
 * @author Mahlon Gumbs
 */

function startup(){
	require('../module1/fake1').fake1();
	return 'This is the start of the test.';
};

function shutdown(){
	return 'This is the end of the test.';
};

function start(){
	alert('Deprecated. Please use startup() insteand.');
	alert(startup());
};

function stop(){
	alert('Deprecated. Please use shutdown() insteand.');
	alert(shutdown());
};

module.exports = {
	startup: startup,
	shutdown: shutdown,
	start: start,
	stop: stop
};