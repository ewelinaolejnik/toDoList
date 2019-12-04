import { ToDoListAction } from '../actions/actionTypes';
import { ToDoListState, ActionType, GetToDoListSuccessAction, UpdateToDoSuccessAction } from '../../types';


const initialState: ToDoListState = {
    toDoList: [],
    maxToDoListCount: 10,
    loading: true,
    error: false
};

const toDoListProps = (state: ToDoListState = initialState, action: ActionType) => {
    switch (action.type) {
        case ToDoListAction.GetToDoList:
            return {
                ...state,
                loading: true
            };
        case ToDoListAction.GetToDoListSuccess:
            const getToDoListSuccessAction = action as GetToDoListSuccessAction;
            return {
                ...state,
                toDoList: getToDoListSuccessAction.toDoList,
                loading: false
            };
        case ToDoListAction.GetToDoListFailure:
            return {
                ...state,
                error: true,
                loading: false
            };
        case ToDoListAction.UpdateToDo:
            return {
                ...state,
                loading: true
            };
        case ToDoListAction.UpdateToDoSuccess:
            const updatedToDo = (action as UpdateToDoSuccessAction).updatedToDo;
            const toDoList = [...state.toDoList];
            const updatedToDoIndex = toDoList.findIndex(toDo => toDo.id === updatedToDo.id);
            toDoList[updatedToDoIndex] = updatedToDo;
            return {
                ...state,
                toDoList,
                loading: false
            };
        case ToDoListAction.DeleteToDo:
            return {
                ...state,
                loading: true
            };
        case ToDoListAction.DeleteToDoSuccess:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}

export default toDoListProps;