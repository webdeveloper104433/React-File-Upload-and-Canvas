# React _File Upload_ & _Canvas_ Template

## Requirements

* `node` : `^12`
* `npm`

## Project setup
In the project directory, you can run:
```js
npm install
# or
yarn install
```
## Run Project
```js
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

ReactDOM.render(<CanvasDraw />, document.getElementById("root"));
```

### Props
These are the defaultProps of CanvasDraw. You can pass along any of these props to customize the CanvasDraw component. Examples of how to use the props are also shown in the [`/demo/`folder](https://github.com/embiem/react-canvas-draw/tree/master/demo/src)
```js
static defaultProps = {
    onChange: null
    loadTimeOffset: 5,
    lazyRadius: 30,
    brushRadius: 12,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    hideGrid: false,
    canvasWidth: 400,
    canvasHeight: 400,
    disabled: false,
    imgSrc: "",
    saveData: null,
    immediateLoading: false,
    hideInterface: false
  };
  ```
  
  ### Functions
  
  Useful functions that you can call, e.g. when having a reference to this component:
  
  * `getSaveData()`  returns the drawing's save-data as a stringified object
  * `loadSaveData(saveData: String, immediate: Boolean)` loads a previously saved drawing using the saveData string, as well as an optional boolean flag to load it immediately, instead of live-drawing it.
  * `clear()` clears the canvas completely
  * `undo()` removes the latest change to the drawing. This includes everything drawn since the last MouseDown event.
  
