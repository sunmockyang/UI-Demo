function UIBackground (elem) {
	var demobg = ["1.jpg", "2.jpg", "1.png", "2.png"];
	this.src = "img/bg/" + demobg[Math.floor(Math.random()*demobg.length)];
	this.background = elem;

	this.image = new Image();
	this.image.onload = this.onload.bind(this);
	this.image.src = this.src;
}

UIBackground.prototype.onload = function() {
	this.background.style.backgroundImage = "url(" + this.src + ")";
};