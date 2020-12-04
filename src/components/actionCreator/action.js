//что бы напрямую dispatch не отправлять на reducer, т.к. это плохой тон.
// прописываем actionCreator как аргумент для dispatch

import ACTION from '../actions/action_a';


export default function action_1(value) {
    return {
        type: ACTION,
        value: value
    };
}

