import React from 'react';
import store from './store';
import action_1 from './actionCreator/action';
import add_1 from './actionCreator/add';

export default class Indata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' '
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });

        //обнавляем store с помощю dispatch, согласно прописанному  action_1
        //state - асинхронная, по этому делаем с задержкой
        //зададим dispatch через actionCreator

        setTimeout(() => {
            if (isNaN(this.state.name)) {
                store.dispatch(action_1(this.state.name));
                console.log('not number');
            } else {
                store.dispatch(add_1(this.state.name));
                console.log('number');
            }
        }, 50)

    }



    render() {
        return (
            <>
                <div>
                    <form>
                        <input type="text" placeholder="Ваше имя" onChange={this.handleChange} />
                        <div>{this.state.name}</div>
                    </form>
                </div>
            </>
        );
    }
}