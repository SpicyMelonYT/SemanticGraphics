$(document).ready(main);

const SG = {
  frameRate: 60,
  frameCount: -1,
  mouseX: 0,
  mouseY: 0,
  width: window.innerWidth,
  height: window.innerHeight,
};

function main() {
  initializeSG();
  start();
  startAnimationLoop();
  setupEventListeners();
}

function setupEventListeners() {
  // Update mouse position
  $(document).mousemove(function (event) {
    SG.mouseX = event.clientX;
    SG.mouseY = event.clientY;
  });

  // Update screen size on resize and call onScreenResize
  $(window).resize(function () {
    SG.width = window.innerWidth;
    SG.height = window.innerHeight;
    onScreenResize();
  });
}

function startAnimationLoop() {
  function animationLoop() {
    SG.frameCount++;
    update(); // Call the update function

    // Schedule the next frame
    setTimeout(function () {
      requestAnimationFrame(animationLoop);
    }, 1000 / SG.frameRate);
  }

  requestAnimationFrame(animationLoop);
}

function start() {}
function update() {}
function onScreenResize() {}

// PROTOTYPING
Array.prototype.random = function (count = 1) {
  if (count < 1) return null;
  var picks = [];
  for (let i = 0; i < count; i++) {
    picks.push(this[Math.floor(Math.random() * this.length)]);
  }
  return picks;
};

Array.prototype.extend = function (array) {
  for (let item of array) {
    this.push(item);
  }
  return this;
};

// HELPER FUNCTIONS AND OVERRIDING
function print(...args) {
  return console.log(...args);
}

function random(...args) {
  if (args.length == 1) {
    return Math.random() * args[0];
  } else if (args.length == 2) {
    return args[0] + Math.random() * (args[1] - args[0]);
  }
}

function toPython(
  data,
  callback = (response) => {},
  errorCallback = (error) => {},
  port = 5005
) {
  sliderValue = slider.value;
  $.ajax({
    url: "http://localhost:" + port + "/connection",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (response) {
      callback(response);
    },
    error: function (error) {
      errorCallback(error);
    },
  });
}

// WIDGETS
function initializeSG() {
  SGDocument.backgroundColor = "#d0d0d0";
}

class SGDocument {
  // Background color
  static get backgroundColor() {
    return document.body.style.backgroundColor;
  }

  static set backgroundColor(value) {
    document.body.style.backgroundColor = value;
  }

  // Background Image
  static get backgroundImage() {
    return document.body.style.backgroundImage;
  }

  static set backgroundImage(value) {
    document.body.style.backgroundImage = value;
  }

  // Font size
  static get fontSize() {
    return document.body.style.fontSize;
  }

  static set fontSize(value) {
    document.body.style.fontSize = value;
  }

  // Font color
  static get color() {
    return document.body.style.color;
  }

  static set color(value) {
    document.body.style.color = value;
  }

  // Margin
  static get margin() {
    return document.body.style.margin;
  }

  static set margin(value) {
    document.body.style.margin = value;
  }

  // Padding
  static get padding() {
    return document.body.style.padding;
  }

  static set padding(value) {
    document.body.style.padding = value;
  }

  // Border
  static get border() {
    return document.body.style.border;
  }

  static set border(value) {
    document.body.style.border = value;
  }

  // Width
  static get width() {
    return document.body.style.width;
  }

  static set width(value) {
    document.body.style.width = value;
  }

  // Height
  static get height() {
    return document.body.style.height;
  }

  static set height(value) {
    document.body.style.height = value;
  }

  // Display
  static get display() {
    return document.body.style.display;
  }

  static set display(value) {
    document.body.style.display = value;
  }

  // Position
  static get position() {
    return document.body.style.position;
  }

  static set position(value) {
    document.body.style.position = value;
  }

  // Text Align
  static get textAlign() {
    return document.body.style.textAlign;
  }

  static set textAlign(value) {
    document.body.style.textAlign = value;
  }

  // Overflow
  static get overflow() {
    return document.body.style.overflow;
  }

  static set overflow(value) {
    document.body.style.overflow = value;
  }
}

class SGWidget {
  constructor(x = 0, y = 0, width = 100, height = 100) {
    this.initDefaultProperties();
    this.element = $("<div>");
  }

  initDefaultProperties() {
    this._position = "absolute";
    this._margin = 0;
    this.visibility = true;
  }

  onElement() {
    this.position = this._position;
    this.margin = this._margin;
    this.dropShadow();
    this.dragSelectable = "none";
  }

  getCSS(name) {
    return this.element.css(name);
  }

  setCSS(name, value) {
    this.element.css(name, value);
  }

  removeCSS(name) {
    this.element.css(name, null);
  }

  get element() {
    return this._element;
  }

  set element(value) {
    this.destroy();
    this._element = value;
    if (this._element != null) {
      $("body").append(this._element);
      this.onElement();
    }
  }

  // ID Getter and Setter
  set id(id) {
    this.element.attr("id", id);
  }

  get id() {
    return this.element.attr("id");
  }

  // Name Getter and Setter
  set name(name) {
    this.element.attr("name", name);
  }

  get name() {
    return this.element.attr("name");
  }

  get dragSelectable() {
    return this.getCSS("user-select");
  }

  set dragSelectable(value) {
    this.setCSS("user-select", value);
  }

  // Getter and Setter for X (left) position
  get x() {
    return parseInt(this.getCSS("left"));
  }

  set x(value) {
    this.setCSS("left", value + "px");
  }

  // Getter and Setter for Y (top) position
  get y() {
    return parseInt(this.getCSS("top"));
  }

  set y(value) {
    this.setCSS("top", value + "px");
  }

  // Getter and Setter for width
  get width() {
    return parseInt(this.getCSS("width"));
  }

  set width(value) {
    this.setCSS("width", value + "px");
  }

  // Getter and Setter for height
  get height() {
    return parseInt(this.getCSS("height"));
  }

  set height(value) {
    this.setCSS("height", value + "px");
  }

  get position() {
    return this.getCSS("position");
  }

  set position(value) {
    this.setCSS("position", value);
    this._position = value;
  }

  get depth() {
    return this.setCSS("z-index");
  }
  set depth(value) {
    this.setCSS("z-index", value);
  }

  get parent() {
    return this.element.parent();
  }

  set parent(widget) {
    if (widget instanceof SGWidget) {
      widget.element.append(this.element);
    } else {
      widget.append(this.element);
    }
  }

  addChild(widget) {
    widget.parent = this;
    return widget;
  }

  clearChildren() {
    return this.element.empty();
  }

  walkChildren(func = (child, depth, index) => {}, element, depth = 0) {
    element.children().each((index, child) => {
      func(child, depth, index);

      this.walkChildren(func, $(child), depth + 1);
    });
  }

  walkAllChildren(
    func = (child, depth, index) => {
      console.log("Depth:", depth, "Element:", child);
    }
  ) {
    this.walkChildren(func, this.element);
  }

  absoluteLayout() {
    this.position = "absolute";
  }

  staticLayout() {
    this.position = "static";
  }

  toggleLayout() {
    if (this.position == "absolute") {
      this.staticLayout();
    } else {
      this.absoluteLayout();
    }
  }

  widthExpand() {
    this.setCSS("width", "100%");
  }

  heightExpand() {
    this.setCSS("height", "100%");
  }

  expand() {
    this.widthExpand();
    this.heightExpand();
  }

  transparent() {
    this.backgroundColor = "transparent";
  }

  dropShadow(offsetX = 0, offsetY = 2, blur = 3, color = "#00000088") {
    offsetX = parseInt(offsetX);
    offsetY = parseInt(offsetY);
    blur = parseInt(blur);
    this.setCSS(
      "filter",
      `drop-shadow(${offsetX}px ${offsetY}px ${blur}px ${color})`
    );
  }

  hide() {
    this.visibility = false;
    this.element.hide();
  }

  show() {
    this.visibility = true;
    this.element.show();
  }

  toggleVisibility() {
    this.visibility = !this.visibility;

    if (this.visibility) {
      this.show();
    } else {
      this.hide();
    }
  }

  destroy() {
    if (this._element != null) {
      this._element.remove();
    }
  }

  // Default CSS Style Properties
  get backgroundColor() {
    return this.getCSS("background-color");
  }

  set backgroundColor(color) {
    this.setCSS("background-color", color);
  }

  get foregroundColor() {
    return this.getCSS("foreground-color");
  }

  set foregroundColor(color) {
    this.setCSS("foreground-color", color);
  }

  get color() {
    return this.getCSS("color");
  }

  set color(color) {
    this.setCSS("color", color);
  }

  get border() {
    return this.getCSS("color");
  }

  set border(value) {
    this.setCSS("border", value);
  }

  get borderRadius() {
    return parseInt(this.getCSS("border-radius"));
  }

  set borderRadius(value) {
    this.setCSS("border-radius", value);
  }

  get padding() {
    return parseInt(this.getCSS("padding"));
  }

  set padding(value) {
    this.setCSS("padding", value);
  }

  get paddingLeft() {
    return parseInt(this.getCSS("padding-left"));
  }

  set paddingLeft(value) {
    this.setCSS("padding-left", value);
  }

  get paddingRight() {
    return parseInt(this.getCSS("padding-right"));
  }

  set paddingRight(value) {
    this.setCSS("padding-right", value);
  }

  get paddingTop() {
    return parseInt(this.getCSS("padding-top"));
  }

  set paddingTop(value) {
    this.setCSS("padding-top", value);
  }

  get paddingBottom() {
    return parseInt(this.getCSS("padding-bottom"));
  }

  set paddingBottom(value) {
    this.setCSS("padding-bottom", value);
  }

  get margin() {
    return parseInt(this.getCSS("margin"));
  }

  set margin(value) {
    this.setCSS("margin", value);
  }

  get marginLeft() {
    return parseInt(this.getCSS("margin-left"));
  }

  set marginLeft(value) {
    this.setCSS("margin-left", value);
  }

  get marginRight() {
    return parseInt(this.getCSS("margin-right"));
  }

  set marginRight(value) {
    this.setCSS("margin-right", value);
  }

  get marginTop() {
    return parseInt(this.getCSS("margin-top"));
  }

  set marginTop(value) {
    this.setCSS("margin-top", value);
  }

  get marginBottom() {
    return parseInt(this.getCSS("margin-bottom"));
  }

  set marginBottom(value) {
    this.setCSS("margin-bottom", value);
  }

  get overflow() {
    return parseInt(this.getCSS("overflow"));
  }

  set overflow(value) {
    this.setCSS("overflow", value);
  }
}

class SGButton extends SGWidget {
  constructor(text = "Button", x, y) {
    super();
    this.element = $("<button>").addClass("ui button");
    this.text = text;
    this.x = x;
    this.y = y;
    this.setCSS("white-space", "nowrap");
  }

  get text() {
    return this.element.text();
  }

  set text(value) {
    this.element.text(value);
  }

  onClick(callback) {
    this.element.click(callback);
  }

  removeClicks() {
    this.element.off("click");
  }

  // Getter and setter for font size
  get fontSize() {
    return this.getCSS("font-size");
  }

  set fontSize(size) {
    this.setCSS("font-size", size);
  }

  // Getter and setter for font family
  get fontFamily() {
    return this.getCSS("font-family");
  }

  set fontFamily(family) {
    this.setCSS("font-family", family);
  }

  // Getter and setter for font weight
  get fontWeight() {
    return this.getCSS("font-weight");
  }

  set fontWeight(weight) {
    this.setCSS("font-weight", weight);
  }
}

class SGSlider extends SGWidget {
  constructor(value = 0.5, min = 0, max = 1, step = 0.01) {
    super();
    this.element = $("<input>")
      .attr({
        type: "range",
        min: min,
        max: max,
        step: step,
        value: value,
      })
      .addClass("slider");

    // Initialize internal properties
    this._value = value;
    this._min = min;
    this._max = max;
    this._step = step;
    this._callbacks = [];

    // Set up event listener for change events
    this.element.on("input change", () => {
      this.callChange();
    });
  }

  // Call all callbacks for callChange
  callChange() {
    this._value = this.element.val();
    this._callbacks.forEach((callback) => callback(this._value));
  }

  // Register a new callback function
  onChange(callback) {
    if (typeof callback === "function") {
      this._callbacks.push(callback);
    }
  }

  // Getter and setter for value
  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    this.element.val(newValue);
    this.callChange();
  }

  setValueDiscrete(newValue) {
    this._value = newValue;
    this.element.val(newValue);
  }
}

class SGLabel extends SGWidget {
  constructor(text = "") {
    super();
    this.element = $("<div>").addClass("ui label");
    this.text = text;
    this._align = "center";
    this.align = "center";
    // this.dragSelectable = "text";
  }

  // Getter and setter for the text property
  get text() {
    return this.element.text();
  }

  set text(value) {
    this.element.text(value);
  }

  // Getter and setter for the text property
  get text() {
    return this.element.text();
  }

  set text(value) {
    this.element.text(value);
  }

  // Getter and setter for font size
  get fontSize() {
    return this.getCSS("font-size");
  }

  set fontSize(size) {
    this.setCSS("font-size", size);
  }

  // Getter and setter for font family
  get fontFamily() {
    return this.getCSS("font-family");
  }

  set fontFamily(family) {
    this.setCSS("font-family", family);
  }

  // Getter and setter for font weight
  get fontWeight() {
    return this.getCSS("font-weight");
  }

  set fontWeight(weight) {
    this.setCSS("font-weight", weight);
  }

  // Horizontal Alignment (alignX)
  get align() {
    return this._align;
  }

  set align(value) {
    switch (value) {
      case "left":
        this.setCSS("text-align", "left");
        break;
      case "center":
        this.setCSS("text-align", "center");
        break;
      case "right":
        this.setCSS("text-align", "right");
        break;
      default:
        console.error(
          "Invalid alignX value. Use 'left', 'center', or 'right'."
        );
        return;
    }
    this._align = value;
  }

  setMultiLine(active = true) {
    if (active) {
      this.setCSS("white-space", "pre-line");
      this.setCSS("overflow", "auto");
    } else {
      this.removeCSS("white-space");
      this.removeCSS("overflow");
    }
  }

  getTextWidth() {
    // Create a temporary element with the same text and styling
    var tempElement = $("<span>")
      .text(this.text)
      .css({
        "font-family": this.fontFamily,
        "font-size": this.fontSize,
        "font-weight": this.fontWeight,
        "white-space": "nowrap", // Ensure text is in one line
        visibility: "hidden", // Hide the element from view
        position: "absolute", // Avoid affecting layout
      })
      .appendTo("body");

    // Measure the width of the temporary element
    var width = tempElement.width();

    // Remove the temporary element from the DOM
    tempElement.remove();

    // Return the measured width
    return width;
  }
}

class SGTextEdit extends SGWidget {
  constructor() {
    super();
    this.element = $("<textarea>").addClass("ui input");
    this.name = "TextEdit";
    this._callbacks = [];

    // Set up event listener for change events
    this.element.on("input change", () => {
      this.callChange();
    });
  }

  // Getter and setter for text
  get text() {
    return this.element.val();
  }

  set text(value) {
    this.element.val(value);
  }

  // Call all callbacks for callChange
  callChange() {
    this._callbacks.forEach((callback) => callback());
  }

  // Register a new callback function
  onChange(callback) {
    if (typeof callback === "function") {
      this._callbacks.push(callback);
    }
  }

  disableResizing() {
    this.setCSS("resize", "none");
  }
}

class SGLineEdit extends SGWidget {
  constructor() {
    super();
    this.element = $("<input>").attr("type", "text").addClass("ui input");
    this.name = "LineEdit";
    this._changeCallbacks = [];
    this._submitCallbacks = [];

    // Set up event listener for change and keypress events
    this.element.on("input change", () => {
      this.callChange();
    });

    this.element.on("keypress", (e) => {
      if (e.which === 13) {
        e.preventDefault();
        this.callSubmit();
      }
    });
  }

  // Getter and setter for text
  get text() {
    return this.element.val();
  }

  set text(value) {
    this.element.val(value);
  }

  // Call all callbacks for callChange
  callChange() {
    this._changeCallbacks.forEach((callback) => callback());
  }

  // Call all callbacks for callSubmit
  callSubmit() {
    this._submitCallbacks.forEach((callback) => callback());
  }

  // Register a new callback function for change
  onChange(callback) {
    if (typeof callback === "function") {
      this._changeCallbacks.push(callback);
    }
  }

  // Register a new callback function for submit
  onSubmit(callback) {
    if (typeof callback === "function") {
      this._submitCallbacks.push(callback);
    }
  }
}

class SGLayout extends SGWidget {
  constructor() {
    super();
    this.element = $("<div>").css({
      display: "grid",
      gridAutoFlow: "column",
      gap: "10px",
    });

    this.children = [];
    this._spacing = 10;
    this.backgroundColor = "#888888";
    this.padding = 15;
    this.borderRadius = 5;
  }

  addChild(widget) {
    let index = this.children.indexOf(widget);
    this.element.append(widget.element);
    widget.staticLayout();
    this.children.push(widget);
    return widget;
  }

  getChildAtIndex(index) {
    return this.children[index];
  }

  removeChildAtIndex(index) {
    if (index >= 0 && index < this.children.length) {
      this.children[index].element.parent().remove(); // Remove from DOM
      this.children.splice(index, 1); // Remove from array
    }
  }

  getAllChildren() {
    return this.children.slice(); // Return a copy of the array
  }

  foreachChild(func) {
    this.children.forEach(func);
  }

  get spacing() {
    return this._spacing;
  }

  set spacing(px) {
    this._spacing = px;
    this.setCSS("gap", px);
  }

  setVertical() {
    this.setCSS("gridAutoFlow", "row");
  }

  setHorizontal() {
    this.setCSS("gridAutoFlow", "column");
  }
}

class SGRow extends SGLayout {
  constructor() {
    super();
    this.setHorizontal();
  }
}

class SGColumn extends SGLayout {
  constructor() {
    super();
    this.setVertical();
  }
}

class SGComboBox extends SGWidget {
  constructor(items = []) {
    super();
    this._dropdown = $("<select>").addClass("ui dropdown");
    this._dropdown.dropdown({
      onChange: (value, text, $selectedItem) => {
        this.callOnChange(value, text, $selectedItem);
      },
    });
    this.element = this._dropdown.parent();
    this._items = items;
    this.items = items; // Initialize with an array of items
    this.callbacks = [];

    this.width = 200;
    this.height = 35;
  }

  get items() {
    return this._items;
  }

  set items(list) {
    this._item = list;
    this.updateDropdown();
  }

  // Get the currently selected item
  get value() {
    return this._dropdown.val();
  }

  // Set the current value
  set value(item) {
    this._dropdown.val(item);
  }

  // Register a callback for onChange
  onChange(callback) {
    if (typeof callback === "function") {
      this.callbacks.push(callback);
    }
  }

  // Call onChange callbacks
  callOnChange(value, text, $selectedItem) {
    this.callbacks.forEach((callback) => callback(value, text, $selectedItem));
  }

  getItemAtIndex(index) {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return null;
  }

  findItem(item) {
    return this.items.indexOf(item);
  }

  removeItemAtIndex(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.updateDropdown();
    }
  }

  setItemAtIndex(index, item) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = item;
      this.updateDropdown();
    }
  }

  addItem(item) {
    this.items.push(item);
    this.updateDropdown();
  }

  updateDropdown() {
    this._dropdown.empty();
    this.items.forEach((item) => {
      this._dropdown.append($("<option>").text(item));
    });
  }
}

class SGDropdown extends SGWidget {
  constructor(items = []) {
    super();
    if (items.length == 0) {
      this.title = "Dropdown";
    } else {
      this.title = items[0];
      items.splice(0, 1);
    }
    this._dropdown = $("<div>").addClass("ui dropdown");
    this.element = this._dropdown;
    this._items = items;
    this.initializeDropdown();

    this.callbacks = [];

    this.setRootStylePanel();

    // this.width = 75;
    this.height = 40;
  }

  setRootStylePanel() {
    // Apply additional stylings to the dropdown
    this.element.css({
      display: "inline-block",
      border: "1px solid #ccc",
      "border-radius": "4px",
      padding: "10px 30px 10px 10px", // Adjust padding as needed
      "background-color": "#fff", // Set the background color
      cursor: "pointer", // Change cursor on hover
    });

    // Style the dropdown icon
    this.element.find(".dropdown.icon").css({
      position: "absolute",
      right: "10px", // Adjust the position as needed
      top: "50%",
      transform: "translateY(-50%)",
    });

    // Style the text part of the dropdown
    this.element.find(".text").css({
      "margin-right": "20px", // Adjust the margin as needed
    });
  }

  initializeDropdown() {
    // Empty existing dropdown
    this._dropdown.empty();

    // Append the text and icon for the main dropdown
    this.textDiv = $("<div>").addClass("text").text(this.title);
    let textDiv = this.textDiv;
    const icon = $("<i>").addClass("dropdown icon");
    this._dropdown.append(textDiv, icon);

    // Create and append the menu
    this.menu = $("<div>").addClass("menu");
    this._items.forEach((item) => {
      this.createMenuItem(item, this.menu);
    });
    this._dropdown.append(this.menu);

    // Initialize Semantic UI dropdown functionality
    this._dropdown.dropdown({
      onChange: (value, text, $selectedItem) => {
        this.callOnChange(text, value, $selectedItem);
        this.textDiv.text(this.title);
      },
    });
  }

  createMenuItem(item, parentElement) {
    if (Array.isArray(item)) {
      // Create a nested dropdown
      const nestedDropdown = $("<div>").addClass("ui dropdown item");
      let arrow = $("<i>").addClass("dropdown icon");
      nestedDropdown.append(arrow);
      let span = $("<span>").text(item[0]);
      span.css("margin-right", 10);
      nestedDropdown.append(span);

      const nestedMenu = $("<div>").addClass("menu");
      nestedMenu.attr("id", "SGDropdown_Menu");
      item
        .slice(1)
        .forEach((subItem) => this.createMenuItem(subItem, nestedMenu));
      nestedDropdown.append(nestedMenu);

      parentElement.append(nestedDropdown);
    } else {
      // Create a regular item
      const menuItem = $("<div>").addClass("item").text(item);
      menuItem.attr("id", "SGDropdown_MenuItem");
      parentElement.append(menuItem);
    }
  }

  callOnChange(value, text, $selectedItem) {
    this.callbacks.forEach((callback) => callback(value, text, $selectedItem));
  }

  onChange(callback) {
    if (typeof callback === "function") {
      this.callbacks.push(callback);
    }
  }

  get items() {
    let newl = Array.from(this._items);
    newl.splice(0, 0, this.title);
    return newl;
  }

  set items(value) {
    if (value.length == 0) {
      this.title = "Dropdown";
    } else {
      this.title = value[0];
      value.splice(0, 1);
    }
    this._items = value;
    this.initializeDropdown();
    this.setRootStylePanel();
  }

  addItem(item) {
    this.addItems([item]);
  }

  addItems(items) {
    let currentItems = this.items;
    currentItems.extend(items);
    this.items = currentItems;
  }

  clear() {
    this.items = [this.title];
  }
}

class SGPanel extends SGWidget {
  constructor() {
    super();
    this.backgroundColor = "#353535";
    this.padding = 15;
    this.borderRadius = 5;
    this.width = 200;
    this.height = 200;
  }
}

class SGWindow extends SGPanel {
  constructor() {
    super();
    this.snappingSize = 25;
    this.width = 400;
    this.height = 400;
    this.padding = 5;
    this.draggable = true;

    this.body = this.addChild(new SGPanel());
    this.body.padding = 0;
    this.body.backgroundColor = "#d0d0d0";
    this.body.overflow = "hidden";

    this.topbar = this.addChild(new SGRow());
    this.topbar.backgroundColor = "transparent";
    this.topbar.padding = 0;
    this.topbar.spacing = 5;

    this.file = this.topbar.addChild(
      new SGDropdown(["File", "Save", "Open", "Close"])
    );
    this.file.onChange((value) => {
      if (value == "Close") {
        this.close();
      }
    });
    this.edit = this.topbar.addChild(new SGDropdown(["Edit"]));
    this.tools = this.topbar.addChild(new SGDropdown(["Tools"]));

    this.bClose = this.addChild(new SGButton("X"));
    this.bClose.element.addClass("ui red button");
    this.bClose.fontSize = 18;

    this.bClose.onClick(() => {
      this.close();
    });

    this.adjustLayout();

    this.isDragging = false;
    this.initialMouseX = 0;
    this.initialMouseY = 0;

    this.attachDragListeners();

    this.constructed = true;
  }

  attachDragListeners() {
    this.element.mousedown((event) => {
      // Check if the target of the mousedown event is this.element itself
      if (this.draggable === true) {
        if (event.target === this.element[0]) {
          this.isDragging = true;
          this.initialMouseX = event.clientX - this.x;
          this.initialMouseY = event.clientY - this.y;
        }
      }
    });

    $(document).mousemove((event) => {
      if (this.draggable === true) {
        if (this.isDragging) {
          this.x = event.clientX - this.initialMouseX;
          this.y = event.clientY - this.initialMouseY;

          if (event.ctrlKey) {
            this.x = this.snapToGrid(this.x, this.snappingSize);
            this.y = this.snapToGrid(this.y, this.snappingSize);
          }
        }
      }
    });

    $(document).mouseup(() => {
      this.isDragging = false;
    });
  }

  snapToGrid(value, gridSize) {
    return Math.round(value / gridSize) * gridSize;
  }

  close() {
    this.destroy();
  }

  removeMenus() {
    if (this.file != null) {
      this.file.destroy();
      this.file = null;
    }

    if (this.edit != null) {
      this.edit.destroy();
      this.edit = null;
    }

    if (this.tools != null) {
      this.tools.destroy();
      this.tools = null;
    }
  }

  get bodyWidth() {
    return this.body.width;
  }

  set bodyWidth(value) {
    this.width = value + this.padding * 2;
  }

  get bodyHeight() {
    return this.body.height;
  }

  set bodyHeight(value) {
    this.height = value + this.topbar.height + this.padding * 3;
  }

  adjustLayout() {
    this.constructed = false;
    this.constructed = true;
    let innerWidth = this.width - parseInt(this.padding) * 2;
    let innerWidth2 = this.width - parseInt(this.padding);
    let topbarWidth = innerWidth - this.topbar.height - this.topbar.spacing;
    if (this.topbar.element.children().length == 0) {
      this.topbar.height = 40;
      this.topbar.width = 0;
    } else {
      if (topbarWidth > 200) topbarWidth = 200;
      this.topbar.width = topbarWidth;
    }

    this.bClose.width = this.topbar.height;
    this.bClose.height = this.topbar.height;
    this.bClose.alignX = "center";
    this.bClose.alignY = "center";
    this.bClose.padding = 0;
    this.bClose.margin = 0;
    this.bClose.x = innerWidth2 - this.bClose.width;

    this.body.y = this.topbar.height + parseInt(this.padding) * 2;
    this.body.width = innerWidth;
    this.body.height =
      this.height - parseInt(this.padding) * 3 - this.topbar.height;
  }

  get width() {
    return super.width;
  }

  set width(value) {
    super.width = value;
    if (this.constructed === true) this.adjustLayout();
  }

  get height() {
    return super.height;
  }

  set height(value) {
    super.height = value;
    if (this.constructed === true) this.adjustLayout();
  }

  addChild(child) {
    if (this.constructed === true) {
      this.body.addChild(child);
    } else {
      super.addChild(child);
    }
    return child;
  }
}

class SGFoldout extends SGWidget {
  constructor(title = "Foldout Title", solidTitleColor = true) {
    super();
    this.title = title;
    this.expanded = false;
    this.bottomPadding = 10;

    this._callbacks = [];

    // Use Semantic UI classes for the accordion
    this.element = $("<div>").addClass("ui styled accordion");

    this.titleBar = $("<div>").addClass("title").css({
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "40px", // Set a fixed height for the title bar
    });

    this.titleText = $("<div>").text(this.title).css({
      flex: "1", // Make title text take up the full width minus icon
    });
    if (solidTitleColor === true) this.titleText.css("color", "#121212");
    this.arrowIcon = $("<i>").addClass("dropdown icon");

    // Append title text and arrow icon to the title bar
    this.titleBar.append(this.titleText, this.arrowIcon);
    this.contentArea = $("<div>");
    this.contentArea.addClass("flex-container").css({
      display: "flex",
      flexDirection: "column",
      paddingLeft: 20,
    });

    // Append title bar and content area to the main element
    this.element.append(this.titleBar, this.contentArea);

    // Set up click handler for toggling
    this.titleBar.on("click", () => this.toggle());

    this.titleBar.removeClass("active");
    this.contentArea.transition({ animation: "slide up", duration: 0 });
    this.arrowIcon.removeClass("down").addClass("right");

    this.width = 200;
  }

  get offset() {
    return this.contentArea.css("padding-left");
  }

  set offset(value) {
    this.contentArea.css("padding-left", value);
  }

  // Register a new callback function
  onToggle(callback) {
    if (typeof callback === "function") {
      this._callbacks.push(callback);
    }
  }

  toggle() {
    // Check the current state and toggle the expanded flag
    this.expanded = !this.expanded;
    let mode = "";

    // Toggle the classes and animate based on the expanded state
    if (this.expanded) {
      mode = "expanded";
      this.titleBar.addClass("active");
      this.contentArea.transition("slide down");
      this.element.css("z-index", 1);
    } else {
      mode = "collapsed";
      this.titleBar.removeClass("active");
      this.contentArea.transition({
        animation: "slide up",
        duration: 500, // Duration of slide up animation
        onComplete: () => {
          if (this.expanded == false) {
            // Reset z-index after slide up animation completes
            this.element.css("z-index", "");
          }
        },
      });
    }

    this._callbacks.forEach((callback) => callback(mode));
  }

  // Method to add child widgets to the content area
  addChild(widget) {
    this.contentArea.append(widget.element);
    return widget;
  }
}

class SGP5Canvas extends SGPanel {
  constructor(
    width = 100,
    height = 100,
    sketch = function (p5) {
      p5.setup = function () {
        p5.createCanvas(width, height);
        // p5.background(51);
      };

      p5.draw = function () {
        p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
      };
    }
  ) {
    super();
    this.padding = 0;
    this.transparent();
    this.sketch = sketch;
    this.p5 = new p5(this.sketch, this.element[0]);
    this.canvas = this.p5.canvas;
    this.width = width;
    this.height = height;
  }

  get setup() {
    return this.p5.setup;
  }

  set setup(value) {
    this.p5.setup = value;
  }

  get draw() {
    return this.p5.draw;
  }

  set draw(value) {
    this.p5.draw = value;
  }
}

class SGGroupBox extends SGColumn {
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

    this.body = this.addChild(new SGRow(title));
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

class SGCheckBox extends SGWidget {
  constructor(label = "", checked = false) {
    super();
    this.element = $("<div>").addClass("ui segment"); // Using a segment class for styling
    this.box = $("<div>").addClass("ui checkbox");
    this.label = $("<label>").text(label);
    this.input = $("<input>").attr({ type: "checkbox", checked: checked });

    // Append the input (checkbox) first, then the label
    this.box.append(this.input, this.label);

    // Append the checkbox element to the panel
    this.element.append(this.box);

    // Initialize Semantic UI checkbox functionality
    this.box.checkbox();

    this.padding = 8;
    this.backgroundColor = "#353535";
    this.color = "white";
  }

  get color() {
    return this.label.css("color");
  }

  set color(value) {
    this.label.css("color", value);
  }

  // Getter and setter for the checked property
  get checked() {
    return this.input.prop("checked");
  }

  set checked(value) {
    this.input.prop("checked", value);
  }

  // Getter and setter for the label text property
  get text() {
    return this.label.text();
  }

  set text(value) {
    this.label.text(value);
  }

  // Register a callback for onChange
  onChange(callback) {
    if (typeof callback === "function") {
      this.input.on("change", () => callback(this.checked));
    }
  }
}

class SGRadioButton extends SGWidget {
  constructor(name, label = "", checked = false) {
    super();
    this.element = $("<div>").addClass("ui segment"); // Panel for styling and structure
    this.radio = $("<div>").addClass("ui radio checkbox");
    this.label = $("<label>").text(label);
    this.input = $("<input>").attr({
      type: "radio",
      name: name,
      checked: checked,
    });

    // Append the input (radio button) and the label to the element
    this.radio.append(this.input, this.label);

    // Append the radio button element to the panel
    this.element.append(this.radio);

    // Initialize Semantic UI radio button functionality
    this.radio.checkbox();

    this.padding = 8;
    this.backgroundColor = "#353535";
    this.color = "white";
  }

  get color() {
    return this.label.css("color");
  }

  set color(value) {
    this.label.css("color", value);
  }

  // Getter and setter for the checked property
  get checked() {
    return this.input.prop("checked");
  }

  set checked(value) {
    this.input.prop("checked", value);
  }

  // Getter and setter for the label text property
  get text() {
    return this.label.text();
  }

  set text(value) {
    this.label.text(value);
  }

  // Register a callback for onChange
  onChange(callback) {
    if (typeof callback === "function") {
      this.input.on("change", () => callback(this.checked));
    }
  }
}

class SGNotebook extends SGColumn {
  constructor() {
    super();
    this.padding = 5;
    this.spacing = 5;

    this.tabsRowSpacer = this.addChild(new SGPanel());
    this.tabsRowSpacer.transparent();
    this.tabsRowSpacer.spacing = 5;
    this.tabsRowSpacer.padding = 0;
    this.tabsRowSpacer.height = 40;

    this.tabsRow = this.addChild(new SGRow());
    this.tabsRow.transparent();
    this.tabsRow.spacing = 5;
    this.tabsRow.padding = 0;
    this.tabsRow.absoluteLayout();
    this.tabsRow.height = 40;
    this.tabsRow.x = 5;
    this.tabsRow.y = 5;

    this.contentRow = this.addChild(new SGRow());
    this.contentRow.transparent();
    this.contentRow.spacing = 0;
    this.contentRow.padding = 0;

    this.buttons = new Map();
    this.content = new Map();
    this.openedTab = "";

    this.constructed = true;
    this.addTab("Main");
    this.openTab("Main");
  }

  addTab(tab) {
    let button = this.tabsRow.addChild(new SGButton(tab));
    let content = this.contentRow.addChild(new SGLayout());
    content.padding = 0;
    content.transparent();
    content.hide();
    this.content.set(tab, content);
    this.buttons.set(tab, button);
    button.onClick(() => {
      this.openTab(tab);
      this.fixTabSpacer();
    });
    this.fixTabSpacer();
    return { button: button, content };
  }

  hasTab(tab) {
    return this.content.has(tab);
  }

  removeTab(tab) {
    if (this.hasTab(tab)) {
      let content = this.content.get(tab);
      this.content.delete(tab);
      content.destroy();
      let button = this.buttons.get(tab);
      this.buttons.delete(tab);
      button.destroy();
      this.fixTabSpacer();
      let tabs = this.getTabs();
      if (tabs.length >= 0) {
        this.openTab(tabs[0]);
      }
    }
  }

  addChild(child, tab = "Main") {
    if (this.constructed === true) {
      if (this.content.has(tab)) {
        let content = this.content.get(tab);
        content.addChild(child);
      } else {
        if (this.content.size <= 0) {
          console.error(
            "This notebook does not have any tabs to add the child too"
          );
        } else {
          let tab = this.getTabs()[0];
          let content = this.content.get(tab);
          content.addChild(child);
        }
      }
    } else {
      super.addChild(child);
    }
    return child;
  }

  openTab(tab) {
    if (this.content.has(this.openedTab)) {
      let content = this.content.get(this.openedTab);
      content.hide();
      let button = this.buttons.get(this.openedTab);
      button.element.removeClass("ui green button");
      button.element.addClass("ui button");
    }

    if (this.content.has(tab)) {
      let content = this.content.get(tab);
      content.show();
      this.openedTab = tab;
      let button = this.buttons.get(tab);
      button.element.removeClass("ui button");
      button.element.addClass("ui green button");
    }
    this.fixTabSpacer();
  }

  getTabs() {
    return Array.from(this.content.keys());
  }

  fixTabSpacer() {
    this.tabsRowSpacer.width = this.tabsRow.width;
  }
}
