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
  f1 = gb.addChild(new SGFoldout("FOLDOUT"));
  gb2 = f1.addChild(new SGGroupBox("Testing W546456456615561oah"));
  gb2.addChild(new SGButton("FOLDOUT"));
}

function update() {}

function onScreenResize() {
  w.width = SG.width;
  w.height = SG.height;
}

class SGGroupBox extends SGVerticalLayout {
  constructor(title = "Group Box") {
    super();
    this.padding = 0;
    this.spacing = 0;
    this.backgroundColor = "#353535";
    this.titleLabel = this.addChild(new SGLabel(title));
    this.titleLabel.margin = 15;
    this.titleLabel.transparent();
    this.titleLabel.color = "#ffffff";
    this.titleLabel.fontSize = 16;
    this.title = title;

    this.body = this.addChild(new SGHorizontalLayout(title));
    this.body.transparent();

    this.constructed = true;
  }

  addChild(child) {
    if (this.constructed === true) {
      this.body.addChild(child);
    } else {
      super.addChild(child);
    }
    return child;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
    this.titleLabel.text = value;
  }
}
