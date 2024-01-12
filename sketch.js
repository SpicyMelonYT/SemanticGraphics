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
