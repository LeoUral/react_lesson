//что бы напрямую dispatch не отправлять на reducer, т.к. это плохой тон.
// прописываем actionCreator как аргумент для dispatch

import ACTION from './actions';
import ADD from './actions';

function action_1(value) {
    return {
        type: ACTION,
        value: value
    };
}

function add_1(value) {
    return {
        type: ADD,
        value: value
    };
}

export default (add_1, action_1);