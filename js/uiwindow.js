function UIWindow(elem){
	this.element = elem;
	this.name = "no name window";

	this.updateBounds();
};

UIWindow.prototype.isDrag = function(x, y) {
	return this.bounds.inBounds(x, y);
};

UIWindow.prototype.move = function(x, y) {
	this.element.style.left = x + "px";
	this.element.style.top = y + "px";

	this.updateBounds();
};

UIWindow.prototype.updateBounds = function() {
	this.bounds = new Bounds(
		this.element.offsetTop,
		this.element.offsetLeft,
		this.element.offsetWidth,
		this.element.offsetHeight
	);
};

// Utils
function Bounds(top, left, width, height){
	this.top = (top) ? top : 0;
	this.left = (left) ? left : 0;
	this.width = (width) ? width : 0;
	this.height = (height) ? height : 0;
}

Bounds.prototype.inBounds = function(x, y) {
	return (x > this.left &&
		x < this.left + this.width &&
		y > this.top &&
		y < this.top + this.height) ? true : false;
};

Bounds.prototype.relativePoint = function(x, y) {
	return {
		x: x - this.left,
		y: y - this.top
	}
};