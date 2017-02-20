# react-magic

[![npm version](https://badge.fury.io/js/react-magic.svg)](https://www.npmjs.com/package/react-magic)
<a href="https://github.com/facebook/react"><img src="https://img.shields.io/badge/react-v15.4.2-blue.svg" alt="react"></a>
<a href="https://github.com/miniMAC/magic"><img src="https://img.shields.io/badge/magic-v1.2.0-blue.svg" alt="react"></a>
<a href="https://github.com/Khan/aphrodite"><img src="https://img.shields.io/badge/aphrodite-v1.1.0-blue.svg" alt="react"></a>
<a href="https://react-map.github.io/react-magic/"><img src="https://img.shields.io/travis/rust-lang/rust.svg" alt="react"></a>       

A collection of magic animations for react components. Although React provides a way to implement arbitrary animations, 
it is not an easy task to do it, even for simple animations. That's where react-magic package comes in. It support inline styles work with [aphrodite](https://github.com/Khan/aphrodite).   
   
<div style="text-align:center" align="center">
  <img src="https://react-map.github.io/react-magic/demo.gif" />
</div>    
   
## Demo online               

A demo is available on the Github Pages webpage for react-magic [Check out demo](https://react-map.github.io/react-magic/)!          

## Installation    

React-magic is distributed via [npm](https://www.npmjs.com/):     

```
npm install --save react-magic    
```     

## Usage

You can import each animation directly from the main package

```js
import { swap } from 'react-magic'
```

or you can import a specific animation directly

```js
import swap from 'react-magic/lib/magic/swap'
```    

usage with Aphrodite[more about aphrodite](https://github.com/Khan/aphrodite)     

```js
import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { swap } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: swap,
        animationDuration: '1s'
    }
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

## License   

MIT  



