import { ToDoListAction } from '../actions/actionTypes';
import { ToDoListProps, ActionType, GetToDoListSuccessAction } from '../../types';


const initialState: ToDoListProps = {
    toDoList: [],
    maxToDoListCount: 10
};

const toDoListProps = (state: ToDoListProps = initialState, action: ActionType) => {
    switch (action.type) {
        case ToDoListAction.GetToDoList:
            return {
                ...state
            };
        case ToDoListAction.GetToDoListSuccess:
            const getToDoListAction = action as GetToDoListSuccessAction;
            return {
                ...state,
                toDoList: getToDoListAction.toDoList
            };
        default:
            return state;
    }
}

export default toDoListProps;