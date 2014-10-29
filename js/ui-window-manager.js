function UIWindowManager(elem) {
	this.overlay = elem;
	this.mouse = new LibraryMouse(elem);

	this.initMouse();

	this.windows = [];

	this.currentWindow = null;
	this.draggingWindow = false;
}

UIWindowManager.prototype.initMouse = function() {
	this.mouse.addEventListener("mousemove", this.onmousemove.bind(this));
	this.mouse.addEventListener("leftmousedown", this.onmousedown.bind(this));
	this.mouse.addEventListener("leftmouseup", this.onmouseup.bind(this));
};

UIWindowManager.prototype.addWindow = function(newWindow) {
	this.windows.push(newWindow);
};

UIWindowManager.prototype.onmousemove = function(e) {
	// this.debugMode();

	if(this.draggingWindow){
		this.currentWindow.move(
			this.mouse.x - this.draggingWindow.x,
			this.mouse.y - this.draggingWindow.y
		);
	}
};

UIWindowManager.prototype.onmousedown = function(e) {
	this.currentWindow = this.selectWindow();
	this.draggingWindow = (this.currentWindow && this.currentWindow.isDrag(this.mouse.x, this.mouse.y)) ?
		this.currentWindow.bounds.relativePoint(this.mouse.x, this.mouse.y) : null;
};

UIWindowManager.prototype.onmouseup = function(e) {
	this.draggingWindow = null;
};

UIWindowManager.prototype.selectWindow = function() {
	var mouseX = this.mouse.x;
	var mouseY = this.mouse.y;

	for (var i = 0; i < this.windows.length; i++) {
		if(this.windows[i].bounds.inBounds(mouseX, mouseY)){
			return this.windows[i];
			// break;
		}
	};
	return null;
};

UIWindowManager.prototype.debugMode = function() {
	var str = "Mouse Pos: " + this.mouse.x + " " + this.mouse.y;
	str += "<br/>";
	str += "Mouse " + ((this.mouse.LClicked) ? "down" : "up");
	this.overlay.innerHTML = str;
};