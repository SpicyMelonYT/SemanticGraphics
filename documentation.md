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

Template

#### [Widget Class Name] Class

- **Parent Class**: [Parent Class Name].
- **Description**: [Brief description of the widget's purpose and functionality].
- **Constructor Inputs**: [List of parameters accepted by the constructor].
- **Properties**: [List of key properties specific to this widget].
- **Functions**:
  - [List and brief description of the widget's functions/methods].

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

#### SGRadioButton Class

- **Parent Class**: SGWidget.
- **Description**: A radio button widget, part of a group of options where only one can be selected at a time.
- **Constructor Inputs**:
  - `name`: The name attribute for the radio button, determining its group.
  - `label` (optional): The text label for the radio button.
  - `checked` (optional): A boolean indicating if the radio button is initially checked.
- **Properties**:
  - `color`: The color of the label text.
  - `checked`: Boolean value indicating if the radio button is checked.
  - `text`: The text label of the radio button.
- **Functions**:
  - `onChange(callback)`: Registers a callback function to be called when the radio button state changes.

#### SGCheckBox Class

- **Parent Class**: SGWidget.
- **Description**: A checkbox widget that allows users to select or deselect an option.
- **Constructor Inputs**:
  - `label` (optional): The text label for the checkbox.
  - `checked` (optional): A boolean indicating if the checkbox is initially checked.
- **Properties**:
  - `color`: The color of the label text.
  - `checked`: Boolean value indicating if the checkbox is checked.
  - `text`: The text label of the checkbox.
- **Functions**:
  - `onChange(callback)`: Registers a callback function to be called when the checkbox state changes.

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

#### SGGroupBox Class

- **Parent Class**: SGVerticalLayout.
- **Description**: A layout like panel that groups things into it and has a title.
- **Constructor Inputs**: `title`.
- **Properties**: `title`.
  - `addChild(widget)`: Manage child widgets.

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

#### SGP5Canvas Class

- **Parent Class**: SGPanel.
- **Description**: A P5 canvas widget.
- **Constructor Inputs**: `width`, `height`, `sketch`.
- **Properties**: `setup`, `draw`.

#### SGNotebook Class

- **Parent Class**: SGColumn.
- **Description**: A notebook-style widget with tabs for organizing content into different sections.
- **Constructor Inputs**: No additional inputs for the constructor.
- **Properties**:
  - `tabsRowSpacer`: A spacer for the row of tabs.
  - `tabsRow`: The row containing the tabs.
  - `contentRow`: The row displaying the content of the selected tab.
  - `buttons`: Map of tab names to their button elements.
  - `content`: Map of tab names to their content layouts.
  - `openedTab`: Name of the currently opened tab.
- **Functions**:
  - `addTab(tab)`: Adds a new tab.
  - `hasTab(tab)`: Checks if a tab exists.
  - `removeTab(tab)`: Removes a tab.
  - `addChild(child, tab)`: Adds a child widget to a specified tab.
  - `openTab(tab)`: Opens a specified tab.
  - `getTabs()`: Returns an array of all tab names.
  - `fixTabSpacer()`: Adjusts the spacer width to match the tab row.

#### Utility Functions and Prototyping

- **Array.prototype.random(count)**: Select random elements from an array.
- **Array.prototype.extend(array)**: Extend an array with another array.
- **print(...args)**: Wrapper for console.log.
- **random(...args)**: Generate random numbers with optional range.

### Conclusion

This detailed documentation provides an in-depth view of the Semantic Graphics framework, showcasing the modular, object-oriented approach to UI component creation and manipulation. Each widget is designed for specific functionalities with customizable properties and methods, adhering to the principles of reusability and maintainability.
