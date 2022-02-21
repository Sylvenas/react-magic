# react-magic

[![npm version](https://badge.fury.io/js/react-magic.svg)](https://www.npmjs.com/package/react-magic)
<a href="https://github.com/facebook/react"><img src="https://img.shields.io/badge/react-v15.4.2-blue.svg" alt="react"></a>
<a href="https://github.com/miniMAC/magic"><img src="https://img.shields.io/badge/magic-v1.2.0-blue.svg" alt="react"></a>
<a href="https://github.com/Khan/aphrodite"><img src="https://img.shields.io/badge/aphrodite-v1.1.0-blue.svg" alt="react"></a>

A collection of magic animations for react components. Although React provides a way to implement arbitrary animations,
it is not an easy task to do it, even for simple animations. That's where react-magic package comes in. It supports inline styles work with [aphrodite](https://github.com/Khan/aphrodite).
Most animations was implemented base on [magic](https://github.com/miniMAC/magic).

> How to work with [tailwindcss](https://tailwindcss.com/)? Try [tailwindcss-magic](https://github.com/Sylvenas/tailwindcss-magic).

<div style="text-align:center" align="center">
  <img src="https://p1.music.126.net/T4JA1NmZlSTZZZK4EgBncA==/109951164699178486.gif" />
</div>    
   
## Demo online

A demo is available on the Github Pages webpage for react-magic [Check out demo](https://lit-forest.github.io/react-magic/react-magic.html)!

## Installation

React-magic is distributed via [npm](https://www.npmjs.com/package/react-magic):

```
npm install --save react-magic
```

## Usage

You can import each animation directly from the main package

```js
import { swap } from "react-magic";
```

or you can import a specific animation directly

```js
import swap from "react-magic/lib/magic/swap";
```

usage with [Aphrodite](https://github.com/Khan/aphrodite)

```js
import React, { Component, PropTypes } from "react";
import { StyleSheet, css } from "aphrodite";

import { swap } from "react-magic";

const styles = StyleSheet.create({
  magic: {
    animationName: swap,
    animationDuration: "1s",
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <div className={css(styles.magic)}>
          <h2>react-magic</h2>
        </div>
      </div>
    );
  }
}

export default App;
```

## Animations

```
.
├── magic
│   |── magic
│   |── twisterInDown
│   |── twisterInUp
│   └── swap
├── bling
│   |── puffIn
│   |── puffOut
│   |── vanishIn
│   └── vanishOut
├── staticEffects
│   |── openDownLeft
│   |── openDownLeftReturn
│   |── openDownRight
│   |── openDownRightReturn
│   |── openUpLeft
│   |── openUpLeftReturn
│   |── openUpRight
│   └── openUpRightReturn
├── staticEffectsOut
│   |── openDownLeftOut
│   |── openDownRightOut
│   |── openUpLeftOut
│   └── openUpRightOut
├── perspective
│   |── perspectiveDown
│   |── perspectiveDownReturn
│   |── perspectiveLeft
│   |── perspectiveLeftReturn
│   |── perspectiveRight
│   |── perspectiveRightReturn
│   |── perspectiveUp
│   └── perspectiveUpReturn
├── rotate
│   |── rotateDownIn
│   |── rotateDownOut
│   |── rotateLeftIn
│   |── rotateLeftOut
│   |── rotateRightIn
│   |── rotateRightOut
│   |── rotateUpIn
│   └── rotateUpOut
├── slide
│   |── slideDown
│   |── slideDownReturn
│   |── slideLeft
│   |── slideLeftReturn
│   |── slideRight
│   |── slideRightReturn
│   |── slideUp
│   └── slideUpReturn
├── math
│   |── foolishIn
│   |── foolishOut
│   |── holeIn
│   |── holeOut
│   |── swashIn
│   └── swashOut
├── tin
│   |── tinDownIn
│   |── tinDownOut
│   |── tinLeftIn
│   |── tinLeftOut
│   |── tinRightIn
│   |── tinRightOut
│   |── tinUpIn
│   └── tinUpOut
├── bomb
│   |── bombLeftOut
│   └── bombRightOut
├── boing
│   |── boingInUp
│   └── boingOutDown
├── space
│   |── spaceInDown
│   |── spaceInLeft
│   |── spaceInRight
│   |── spaceInUp
│   |── spaceOutDown
│   |── spaceOutLeft
│   |── spaceOutRight
│   └── spaceOutUp
```

## License

MIT
