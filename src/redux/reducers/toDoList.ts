import { ToDoListAction } from '../actions/actionTypes';
import { ToDoListProps, ActionType, GetToDoListSuccessAction } from '../../types';


const initialState: ToDoListProps = {
    toDoList: [],
    maxToDoListCount: 10,
    loading: true,
    error: false
};

const toDoListProps = (state: ToDoListProps = initialState, action: ActionType) => {
    switch (action.type) {
        case ToDoListAction.GetToDoList:
            return {
                ...state
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
        default:
            return state;
    }
}

export default toDoListProps;