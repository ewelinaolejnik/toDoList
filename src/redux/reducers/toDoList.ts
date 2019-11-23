import * as actionTypes from '../actions/actionTypes';
import { ToDoListProps, ActionType } from '../../types';


const initialState: ToDoListProps = {
    toDoList: []
};

const toDoListProps = (state: ToDoListProps = initialState, action: ActionType) => {
    switch (action.type) {
        case actionTypes.GET_TO_DO_LIST:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default toDoListProps;