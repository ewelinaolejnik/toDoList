export interface ToDoProps extends ToDoState {
    onUpdateToDo: (toDoToBeUpdate: ToDoState) => UpdateToDoAction
}

export interface ToDoState {
    id: number,
    title: string,
    completed: boolean
}

export interface ToDoListProps extends ToDoListState {
}

export interface ToDoListState {
    toDoList: Array<ToDoState>,
    readonly maxToDoListCount: number,
    loading: boolean,
    error: boolean
}

export interface AppState {
    toDoListProps: ToDoListState
}

export interface ChangeableToDoListProps {
    toDoListProps: ToDoListState,
    onGetToDoList: () => ActionType
}

export interface ActionType {
    type: string
}

export interface GetToDoListSuccessAction extends ActionType {
    toDoList: Array<ToDoState>
}

export interface UpdateToDoSuccessAction extends ActionType {
    updatedToDo: ToDoState
}

export interface UpdateToDoAction extends ActionType {
    toDoToBeUpdate: ToDoState

}