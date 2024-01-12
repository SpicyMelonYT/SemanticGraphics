function start() {
  SGDocument.backgroundColor = "#353535";
  w = new SGWindow();
  w.draggable = false;
  w.width = SG.width;
  w.height = SG.height;
  w.bClose.element.hide();
  w.file.clear();
  canvas = new SGP5Canvas(800, 800);
  w.addChild(canvas);

  gb = w.addChild(new SGGroupBox("Testing W546456456615561oah"));
  gb.x = 825;
  gb.y = 25;

  gb.addChild(new SGButton("WORKING"));
  column = gb.addChild(new SGColumn("FOLDOUT"));
  f1 = gb.addChild(new SGFoldout("FOLDOUT"));
  f2 = gb.addChild(new SGFoldout("FOLDOUT"));
  gb2 = f1.addChild(new SGGroupBox("Testing W546456456615561oah"));
  b1 = gb2.addChild(new SGButton("FOLDOUT"));
}

function update() {}

function onScreenResize() {
  w.width = SG.width;
  w.height = SG.height;
}
