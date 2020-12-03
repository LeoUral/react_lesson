import React from 'react';
import Indata from './indata';
import Outdata from './outdata';

export default class Main extends React.Component {

    render() {
        return (
            <>
                <h1>Разбираемся с REDUX</h1>
                <Indata />
                <Outdata />
            </>
        );
    }
}