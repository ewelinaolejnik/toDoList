import { ToDoListAction } from '../actions/actionTypes';
import { ToDoListState, ActionType, GetToDoListSuccessAction, UpdateToDoSuccessAction, DeleteToDoSuccessAction, ToDoState } from '../../types';


const initialState: ToDoListState = {
    toDoList: [],
    maxToDoListCount: 10,
    loading: true,
    error: false
};

const updateState = (oldState: ToDoListState, updatedState: any) => {
    return {
        ...oldState,
        ...updatedState
    }
};

const updateToDo = (updatedToDo: ToDoState, oldToDoList: ToDoState[]): ToDoState[] => {
    const toDoList = [...oldToDoList];
    const updatedToDoIndex = toDoList.findIndex(toDo => toDo.id === updatedToDo.id);
    toDoList[updatedToDoIndex] = updatedToDo;
    return toDoList;
}

const deleteToDo = (deletedToDoId: number, oldToDoList: ToDoState[]): ToDoState[] => {
    return oldToDoList.filter(toDo => toDo.id !== deletedToDoId);
}

const toDoListProps = (state: ToDoListState = initialState, action: ActionType) => {
    switch (action.type) {
        case ToDoListAction.GetToDoList:
            return updateState(state, { loading: true });

        case ToDoListAction.GetToDoListSuccess:
            const getToDoListSuccessAction = action as GetToDoListSuccessAction;
            return updateState(state, {
                toDoList: getToDoListSuccessAction.toDoList,
                loading: false
            });

        case ToDoListAction.ToDoListFailure:
            return updateState(state, {
                error: true,
                loading: false
            });

        case ToDoListAction.UpdateToDo:
            return updateState(state, { loading: true });

        case ToDoListAction.UpdateToDoSuccess:
            const updatedToDo = (action as UpdateToDoSuccessAction).updatedToDo;
            return updateState(state, {
                toDoList: updateToDo(updatedToDo, state.toDoList),
                loading: false
            });

        case ToDoListAction.DeleteToDo:
            return updateState(state, { loading: true });

        case ToDoListAction.DeleteToDoSuccess:
            const deletedToDoId = (action as DeleteToDoSuccessAction).id;
            return updateState(state, {
                toDoList: deleteToDo(deletedToDoId, state.toDoList),
                loading: false
            });

        default:
            return state;
    }
}

export default toDoListProps;