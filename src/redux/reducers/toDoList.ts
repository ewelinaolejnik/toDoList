import { ToDoListAction } from '../actions/actionTypes';
import * as types from '../../types';


const initialState: types.ToDoListState = {
    toDoList: [],
    maxToDoListCount: 10,
    loading: true,
    error: false,
    newToDo: {
        id: 0,
        title: '',
        completed: false
    }
};

const updateState = (oldState: types.ToDoListState, updatedState: any) => {
    return {
        ...oldState,
        ...updatedState
    }
};

const updateToDo = (updatedToDo: types.ToDoState, oldToDoList: types.ToDoState[]): types.ToDoState[] => {
    const toDoList = [...oldToDoList];
    const updatedToDoIndex = toDoList.findIndex(toDo => toDo.id === updatedToDo.id);
    toDoList[updatedToDoIndex] = updatedToDo;
    return toDoList;
}

const deleteToDo = (deletedToDoId: number, oldToDoList: types.ToDoState[]): types.ToDoState[] => {
    return oldToDoList.filter(toDo => toDo.id !== deletedToDoId);
}

const addToDo = (newToDo: types.ToDoState, oldToDoList: types.ToDoState[]) => {
    const toDoList = [...oldToDoList];
    toDoList.push(newToDo);
    return toDoList;
}

const toDoListProps = (state: types.ToDoListState = initialState, action: types.ActionType) => {
    switch (action.type) {
        case ToDoListAction.GetToDoList:
            return updateState(state, { loading: true });

        case ToDoListAction.GetToDoListSuccess:
            const getToDoListSuccessAction = action as types.GetToDoListSuccessAction;
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
            const updatedToDo: types.ToDoState = (action as types.UpdateToDoSuccessAction).updatedToDo;
            return updateState(state, {
                toDoList: updateToDo(updatedToDo, state.toDoList),
                loading: false
            });

        case ToDoListAction.DeleteToDo:
            return updateState(state, { loading: true });

        case ToDoListAction.DeleteToDoSuccess:
            const deletedToDoId: number = (action as types.DeleteToDoSuccessAction).id;
            return updateState(state, {
                toDoList: deleteToDo(deletedToDoId, state.toDoList),
                loading: false
            });

        case ToDoListAction.AddToDo:
            return updateState(state, { loading: true });

        case ToDoListAction.AddToDoSuccess:
            const newToDo: types.ToDoState = (action as types.AddToDoSuccessAction).newToDo;
            return updateState(state, {
                toDoList: addToDo(newToDo, state.toDoList),
                loading: false
            });

        default:
            return state;
    }
}

export default toDoListProps;