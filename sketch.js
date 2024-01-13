function start() {
  w = new SGWindow();
  w.x = (SG.width - w.width) * 0.5;
  w.y = (SG.height - w.height) * 0.5;

  column = w.addChild(new SGColumn());
  column.staticLayout();

  slider = column.addChild(new SGSlider(0, 0, 10));
  slider.id = "python_slider";
  slider.onChange(() => {
    label.text = "Slider Value: " + slider.value;
  });

  label = column.addChild(new SGLabel("Slider Value: " + 0));
  label.id = "python_label";
  label.transparent();
  label.color = "white";
  label.fontSize = 16;
  label.align = "left";

  button = column.addChild(new SGButton("Send Value"));
  button.id = "python_button";
  button.onClick(() =>
    toPython({ value: slider.value }, (response) => {
      slider.value = response.newValue;
    })
  );
}
