# Semantic Graphics (SG)

### Description

Semantic Graphics (SG) is a JavaScript widget system that utilizes JQuery and SemanticUI
It features simple to use modular widgets designed to feel a bit more like working with game engine objects rather than the loosy goosy html nature of element

---

### Documentation

The [documentation.mb file](documentation.md) shows all the documentation for each widget and other features of SG

Official GPT located here [Semantic Graphics GPT](https://chat.openai.com/g/g-LjbEtXhmV-semantic-graphics-gpt)

---

### Getting Started

You can download the repo as is an run the index.html for easy development on localhost! For websites just include the correct src's listed in the index.html file.
The main.js file is what stores the code for all the SG stuff. The sketch.js file is where you can create your application
All of these things are changable and renameable as long as you rename it in the index.html

---

### Notes

Currently p5js is inside the project because I use that alot. But you can remove the src from the html and nothing bad should happen. Just dont use widgets that relate to p5js like the SGP5Canvas :D!

---

### Widgets

- SGWidget: Base class for widgets

##### Basic Widgets

- SGButton
- SGSlider
- SGLabel
- SGTextEdit
- SGLineEdit
- SGComboBox
- SGDropdown
- SGPanel
- SGFoldout

##### Compound Widgets

- SGWindow
- SGP5Canvas
- SGGroupBox

##### Layout Widgets

- SGLayout
- SGVerticalLayout
- SGHorizontalLayout
