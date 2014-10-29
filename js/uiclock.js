function UIClock(elem){
	this.element = elem;

	this.elem = {
		hour: elem.getElementsByClassName(this.selectors.hour)[0],
		colon: elem.getElementsByClassName(this.selectors.colon)[0],
		minutes: elem.getElementsByClassName(this.selectors.minutes)[0],
		ampm: elem.getElementsByClassName(this.selectors.ampm)[0]
	};

	this.run();
};

UIClock.prototype.selectors = {
	hour: "clock hour",
	colon: "clock colon",
	minutes: "clock minutes",
	ampm: "clock ampm"
};

UIClock.prototype.run = function() {
	var date = new Date();

	this.elem.hour.innerHTML = (date.getHours() % 12) + (date.getHours() == 0) ? 12 : 0;
	this.elem.minutes.innerHTML = ('0' + date.getMinutes()).slice(-2);
	this.elem.ampm.innerHTML = (date.getHours() >= 12) ? "PM" : "AM";

	setTimeout(this.run.bind(this), 1000);
};