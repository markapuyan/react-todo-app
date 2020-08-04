import * as actionTypes from '../actions/actionTypes'

const initialState = {
    todo: null,
    itemTitle: '',
    isItemAddable: false,
    fetchLoading: false,
    fetchError: false
}

const fetchTodoListItem = (state, action) => {
    return {
        ...state,
        fetchLoading: true
    }
}
const setTodoListItem = (state, action) => {
    return {
        ...state,
        todo: action.todo,
        itemTitle: '',
        isItemAddable: false,
        fetchLoading: false
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

const fetchTodoListItemFail = (state, action) => {
    return {
        ...state,
        fetchLoading: false,
        fetchError: true
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TODOLIST_ITEM_START: return fetchTodoListItem(state, action);
        case actionTypes.SET_TODOLIST_ITEM: return setTodoListItem(state, action);
        case actionTypes.FETCH_TODOLIST_ITEM_FAIL: return fetchTodoListItemFail(state, action);
        case actionTypes.INIT_ADD_ITEM: return setItemAdd(state, action);
        default: return state;
    }
}

export default reducer;