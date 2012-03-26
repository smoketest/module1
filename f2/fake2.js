function fake2(){
	alert('fake 2');
    require('f3/fake3').fake3();

};

module.exports = {
	fake2: fake2
};