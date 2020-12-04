// описываем  reducer который по экшенам будет производить те или иные действия с store
//отвечает за состояние store
import ACTION from './actions/action_a';
import ADD from './actions/add_a';

export default function reduser(state, action) {
    switch (action.type) {

        case ACTION:
            return { value: action.value + ' <- это Ваше имя' };

        case ADD:
            return { value: action.value * 2 };

        default: return state;
    }
}