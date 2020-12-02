// описываем  reducer который по экшенам будет производить те или иные действия с store
//отвечает за состояние store

import ACTION from './actions';

export default function reduser(state, action) {
    switch (action.type) {
        case ACTION: return { value: action.value + ' <- это Ваше имя' };

        default: return state;
    }
}