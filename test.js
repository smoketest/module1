/**
 * @author Mahlon Gumbs
 */
function startTest(){
	alert('this is the start of the test');
};

function stop(){
	alert('stopping the test now.');
};

module.exports = {
	start: start,
	stop: stop
};