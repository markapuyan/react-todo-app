import * as actionTypes from '../actions/actionTypes'

const initialState = {
    todo: null,
    itemTitle: '',
    isItemAddable: false
}

const setTodoListItem = (state, action) => {
    return {
        ...state,
        todo: action.todo,
        itemTitle: '',
        isItemAddable: false
    }
}

const setItemAdd = (state, action) => {
    const title = action.label;
    let isAddable = title.trim() != '';

    return {
        ...state,
        itemTitle: title,
        isItemAddable: isAddable
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TODOLIST_ITEM: return setTodoListItem(state, action);
        case actionTypes.INIT_ADD_ITEM: return setItemAdd(state, action);
        default: return state;
    }
}

export default reducer;