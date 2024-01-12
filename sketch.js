function start() {
  SGDocument.backgroundColor = "#353535";
  w = new SGWindow();
  w.draggable = false;
  w.width = SG.width;
  w.height = SG.height;
  w.bClose.element.hide();
  w.file.clear();
  canvas = new SGP5Canvas(w.bodyWidth, w.bodyHeight);
  w.addChild(canvas);
}

function update() {}

function onScreenResize() {
  w.width = SG.width;
  w.height = SG.height;
}

class SGP5Canvas extends SGPanel {
  constructor(width = 100, height = 100) {
    super();
    this.padding = 0;
    this.transparent();
    this.sketch = function (p) {
      p.setup = function () {
        p.createCanvas(width, height);
      };

      p.draw = function () {
        // p.background(51);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
      };
    };
    this.p5 = new p5(this.sketch, this.element[0]);
    this.canvas = this.p5.canvas;
    this.width = width;
    this.height = height;
  }
}
