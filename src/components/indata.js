import React from 'react';
import action_1 from './actionCreator';
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
        setTimeout(() => {
            store.dispatch(action_1(this.state.name));
        }, 500)

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