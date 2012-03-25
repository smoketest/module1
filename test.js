/**
 * @author Mahlon Gumbs
 */
function go(){
	alert('this is a test call from module1.');
};

function stope(){
	alert('stopping');
};

module.exports = {
	go: go
};