import React from 'react';
import store from './store';

export default class Outdata extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { val: '' };
    }

    componentDidMount() {

        store.subscribe(() => {
            console.log(store.getState().value);
            this.handleClick();
        });
    }

    handleClick() {
        this.setState({ val: store.getState().value });
    }

    componentWillUnmount() {
        store.unsubscribe();
    }

    render() {


        return (
            <>
                <div>
                    {/* <button onClick={this.handleClick} >НАЖМИ</button> */}
                </div>
                <div>
                    {this.state.val}
                </div>
            </>
        );
    }
}