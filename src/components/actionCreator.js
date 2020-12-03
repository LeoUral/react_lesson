//что бы напрямую dispatch не отправлять на reducer, т.к. это плохой тон.
// прописываем actionCreator как аргумент для dispatch

const { default: ACTION } = require("./actions");

function action_1(value) {
    return {
        type: ACTION,
        value: value
    };
}

export default action_1;