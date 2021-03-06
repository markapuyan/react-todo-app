import * as actionTypes from '../actions/actionTypes'

const initialState = {
    todoList: null,
    selectedTodo: '',
    addItemTitle: '',
    addable: false,
    isModalActive: false,
    fetchLoading: false,
    fetchError: false
}


const fetchTodoList = (state, action) => {
    return {
        ...state,
        fetchLoading: true
    }
}
const setTodoList = (state, action) => {
    return {
        ...state,
        todoList: action.todoList,
        fetchLoading: false
    }
}

const fetchTodoListFailed = (state, action) => {
    return {
        ...state,
        fetchLoading: false,
        fethError: true
    }
}
const selectedTodoList = (state, action) => {
    const selectedItemList = state.todoList.filter(item => item.id === action.id)
    return {
        ...state,
        selectedTodo: selectedItemList
    }
}

const setAdd = (state, action) => {
    const title = action.title;
    let isAddable = title.trim() != '';
    return {
        ...state,
        addItemTitle: title,
        addable: isAddable
    }
}

const resetTodoList = (state, action) => {
    return {
        ...state,
        addItemTitle: null,
        isModalActive: false,
    }
}

const setModal = (state, action) => {
    return {
        ...state,
        isModalActive: !state.isModalActive,
        addItemTitle: state.isModalActive ? state.addItemTitle : '',
        addable: state.addItemTitle.trim() != ''
    }
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.FETCH_TODOLIST_START: return fetchTodoList(state, action);
        case actionTypes.SET_TODOLIST: return setTodoList(state, action);
        case actionTypes.FETCH_TODOLIST_FAIL: return fetchTodoListFailed(state, action);
        case actionTypes.SELECT_TODOLIST: return selectedTodoList(state, action);
        case actionTypes.INIT_ADD: return setAdd(state, action);
        case actionTypes.RESET_TODOLIST: return resetTodoList(state, action);
        case actionTypes.SET_MODAL: return setModal(state, action);
        default: return state;
    }
}

export default reducer;