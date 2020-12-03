import React from 'react';
import store from './store';

export default class Outdata extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { val: '' };
    }

    handleClick() {
        this.setState({ val: store.getState().value });
    }

    render() {

        store.subscribe(() => {
            console.log(store.getState().value);
        });


        return (
            <>
                <div>
                    <button onClick={this.handleClick} >НАЖМИ</button>
                </div>
                <div>
                    {this.state.val}
                </div>
            </>
        );
    }
}