import React from 'react';
import { createStore } from 'redux';



class ReduxComponent extends React.Component {

    render() {

        // let number = this.props.number;
        let name = this.props.name;

        // function counter(state = number, action) {
        //     switch (action.type) {
        //         case 'INCREMENT':
        //             return state + 1;
        //         case 'DECREMENT':
        //             return state - 1;
        //         default: return state;
        //     }
        // }

        function nameUser(state = name, action) {
            switch (action.type) {
                case 'NAMEUSER':
                    return state = `Привет ${state}`;
                case 'NONAMEUSER':
                    return state = `Ты кто ${state}`;
                default: return state;
            }
        }

        // let store = createStore(counter);
        let store = createStore(nameUser);

        const update = () => {
            (store.getState());
        }
        store.subscribe(update);

        // store.dispatch({ type: 'INCREMENT' });
        store.dispatch({ type: 'NONAMEUSER' });

        return (
            <div>
                <span>Тут должно было быть выражение:</span>
                {store.getState()}
            </div>
        );
    }

}

export default ReduxComponent;