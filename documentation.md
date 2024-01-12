Certainly! Let's delve into a detailed documentation of Semantic Graphics (SG), focusing on each widget, utility functions, and the SGDocument class, including their descriptions, constructors, properties, functions, and parent classes.

### Semantic Graphics (SG) Documentation

#### SGDocument Class

- **Description**: Manages global document properties.
- **Properties**:
  - `backgroundColor`: Background color of the document.
  - `backgroundImage`: Background image of the document.
  - `fontSize`: Font size used in the document.
  - `color`: Font color used in the document.
  - `margin`, `padding`, `border`: Document's margin, padding, and border.
  - `width`, `height`: Width and height of the document.
  - `display`, `position`, `textAlign`, `overflow`: CSS display, position, text alignment, and overflow properties.
- **Methods**: Getter and setter for each property.

#### SGWidget Class

- **Parent Class**: None.
- **Description**: Base class for all SG widgets.
- **Constructor Inputs**: `x`, `y`, `width`, `height`.
- **Properties**: `position`, `margin`, `backgroundColor`, `foregroundColor`, `color`, `border`, `borderRadius`, `padding`, `overflow`, etc.
- **Functions**:
  - `initDefaultProperties()`: Initializes default properties.
  - `onElement()`: Setup when the element is attached.
  - `getCSS(name)`, `setCSS(name, value)`, `removeCSS(name)`: Get, set, or remove CSS properties.
  - `addChild(widget)`, `clearChildren()`, `walkChildren(func)`: Manage child widgets.
  - `absoluteLayout()`, `staticLayout()`, `toggleLayout()`: Control layout.
  - `expand()`, `transparent()`, `dropShadow()`: Additional styling functions.
  - `destroy()`: Removes the widget from the DOM.

#### SGButton Class

- **Parent Class**: SGWidget.
- **Description**: A button widget.
- **Constructor Inputs**: `text`, `x`, `y`.
- **Properties**: Inherits from SGWidget.
- **Functions**:
  - `onClick(callback)`, `removeClicks()`: Event handling for click events.
  - `fontSize`, `fontFamily`, `fontWeight`: Font customization.

#### SGSlider Class

- **Parent Class**: SGWidget.
- **Description**: A slider input widget.
- **Constructor Inputs**: `value`, `min`, `max`, `step`.
- **Properties**: `value`.
- **Functions**:
  - `onChange(callback)`: Register callback for value change.
  - `callChange()`: Invokes change callbacks.
  - `setValueDiscrete(newValue)`: Sets the slider value without triggering callbacks.

#### SGLabel Class

- **Parent Class**: SGWidget.
- **Description**: A label for displaying text.
- **Constructor Inputs**: `text`.
- **Properties**: `fontSize`, `fontFamily`, `fontWeight`, `alignX`, `alignY`.
- **Functions**:
  - `setMultiLine(active)`: Enables or disables multi-line text.

#### SGTextEdit Class

- **Parent Class**: SGWidget.
- **Description**: A multi-line text edit widget.
- **Constructor Inputs**: None.
- **Properties**: `text`.
- **Functions**:
  - `onChange(callback)`: Register callback for text changes.
  - `disableResizing()`: Disables resizing of the text area.

#### SGLineEdit Class

- **Parent Class**: SGWidget.
- **Description**: A single-line text input widget.
- **Constructor Inputs**: None.
- **Properties**: `text`.
- **Functions**:
  - `onChange(callback)`, `onSubmit(callback)`: Register callbacks for text change and submit events.

#### SGLayout Class

- **Parent Class**: SGWidget.
- **Description**: Base class for layout management.
- **Constructor Inputs**: None.
- **Properties**: `spacing`.
- **Functions**:
  - `addChild(widget)`, `getChildAtIndex(index)`, `removeChildAtIndex(index)`, `getAllChildren()`, `foreachChild(func)`: Manage child widgets.
  - `setVertical()`, `setHorizontal()`: Set layout orientation.

#### SGComboBox Class

- **Parent Class**: SGWidget.
- **Description**: A combo box widget.
- **Constructor Inputs**: `items`.
- **Properties**: `items`, `value`.
- **Functions**:
  - `onChange(callback)`: Register callback for selection changes.
  - `getItemAtIndex(index)`, `findItem(item)`, `removeItemAtIndex(index)`, `setItemAtIndex(index, item)`, `addItem(item)`, `updateDropdown()`: Manage items.

#### SGDropdown Class

- **Parent Class**: SGWidget.
- **Description**: A dropdown menu widget.
- **Constructor Inputs**: `items`.
- **Properties**: `items`.
- **Functions**:

- `onChange(callback)`: Register callback for selection changes.
- `addItem(item)`, `addItems(items)`: Add items to the dropdown.

#### SGPanel Class

- **Parent Class**: SGWidget.
- **Description**: A basic panel widget.
- **Constructor Inputs**: None.
- **Properties**: Inherits from SGWidget.

#### SGWindow Class

- **Parent Class**: SGPanel.
- **Description**: A window-like panel with draggable features.
- **Constructor Inputs**: None.
- **Properties**: `snappingSize`, `bodyWidth`, `bodyHeight`.
- **Functions**:
  - `attachDragListeners()`, `snapToGrid(value, gridSize)`: Manage draggable behavior.
  - `close()`, `removeMenus()`, `adjustLayout()`: Additional functionalities.

#### SGFoldout Class

- **Parent Class**: SGWidget.
- **Description**: An accordion-style foldout widget.
- **Constructor Inputs**: `title`, `solidTitleColor`.
- **Properties**: `offset`.
- **Functions**:
  - `onToggle(callback)`, `toggle()`: Toggle the foldout and register toggle callbacks.
  - `addChild(widget)`: Add child widgets to the content area.

#### Utility Functions and Prototyping

- **Array.prototype.random(count)**: Select random elements from an array.
- **Array.prototype.extend(array)**: Extend an array with another array.
- **print(...args)**: Wrapper for console.log.
- **random(...args)**: Generate random numbers with optional range.

### Conclusion

This detailed documentation provides an in-depth view of the Semantic Graphics framework, showcasing the modular, object-oriented approach to UI component creation and manipulation. Each widget is designed for specific functionalities with customizable properties and methods, adhering to the principles of reusability and maintainability.
