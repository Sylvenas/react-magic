import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import * as animations from '../lib';

const root = {
    placeholder: {
        backgroundColor: '#eee',
        width: '100px',
        height: '100px',
        left: '12%',
        top: '200px',
        position: 'fixed',
        borderRadius: '3px',
        fontFamily: '"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif',
    },
    magicAni: {
        backgroundColor: '#FF7374',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: '3px',
        textAlign: 'center'
    },
    cssOptions: {
        width: '50%',
        left: '35%',
        position: 'absolute',
        fontFamily: '"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif',
        color: '#52616A',
        userSelect: 'none'
    },
    title: {
        position: 'relative',
        left: '10%'
    },
    chunk: {
        marginTop: '50px',
        left: '10%',
        clear: 'both'
    },
    h2: {
        marginTop: '110px',
        marginBottom: '5px',
        fontWeight: 400
    }
}
const styles = StyleSheet.create({
    btnDefault: {
        fontSize: 16,
        display: 'block',
        float: 'left',
        margin: '10px 10px 10px 0',
        padding: '12px 18px',
        background: '#fff',
        border: '2px solid #C9D6DE',
        color: '#52616A',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    btnHover: {
        ':hover': {
            background: '#52616A',
            color: '#fff',
        }
    }
});

const PVaule = [
    [
        'magic', 'twisterInDown', 'twisterInUp', 'swap'
    ],
    [
        'puffIn', 'puffOut', 'vanishIn', 'vanishOut'
    ]
]
class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isPlaying: false,
            magicClass: null
        }
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(e) {
        if (this.state.isPlaying) {
            return;
        }
        var cssName = e.target.innerText;
        var ani = StyleSheet.create({
            magic: {
                animationName: animations[cssName],
                animationDuration: '1s'
            }
        });
        this.setState({
            isPlaying: true,
            magicClass: ani.magic
        })
        setTimeout(() => {
            this.setState({
                isPlaying: false,
                magicClass: null
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <div style={root.placeholder}>
                    <div style={root.magicAni} className={css(this.state.magicClass)}>
                        <h2>React<br />Magic</h2>
                    </div>
                </div>
                <div style={root.cssOptions}>
                    <h1 style={root.title}>React-Magic</h1>
                    <div style={root.chunk}>
                        <h2 style={root.h2}>React-Magic Effects</h2>
                        {PVaule[0].map((name) => {
                            return <p key={name} className={css(styles.btnDefault, styles.btnHover)} onClick={this.handleBtnClick}>{name}</p>
                        })}
                    </div>
                    <div style={root.chunk}>
                        <h2 style={root.h2}>React-Magic Bling</h2>
                        {PVaule[1].map((name) => {
                            return <p key={name} className={css(styles.btnDefault, styles.btnHover)} onClick={this.handleBtnClick}>{name}</p>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;