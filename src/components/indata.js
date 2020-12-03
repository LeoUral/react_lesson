import React from 'react';
import store from './store';

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
        //зададим dispatch на прямую
        setTimeout(() => {
            if (isNaN(this.state.name)) {
                store.dispatch({ type: 'ACTION', value: this.state.name });
                console.log('not number');
            } else {
                store.dispatch({ type: 'ADD', value: this.state.name });
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