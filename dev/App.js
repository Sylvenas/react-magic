import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import holeIn from '../src/math/holeIn';

const root = {
    placeholder: {
        backgroundColor: '#f9f9f9',
        width: '100px',
        height: '100px',
        left: '30%',
        top: '30%',
        position: 'absolute',
        borderRadius: '3px',
    },
    div: {
        backgroundColor: '#FF6347',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: '3px',
        textAlign: 'center'
    }
}
const styles = StyleSheet.create({
    magic: {
        animationName: holeIn,
        animationDuration: '1s'
    }
});

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            class: null
        }
    }

    render() {
        return (
            <div style={root.placeholder}>
                <div style={root.div} className={css(styles.magic)}>
                    <h2>React<br />Magic</h2>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;