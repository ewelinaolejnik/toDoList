export interface ToDoProps extends ToDoState {
    onUpdateToDo: (toDoToBeUpdate: ToDoState) => UpdateToDoAction,
    onRemoveToDo: (id: number) => DeleteToDoAction
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
    error: boolean,
    newToDo: ToDoState,
    addToDoErrors: AddToDoErrors
}

export interface AppState {
    toDoListProps: ToDoListState
}

export interface ChangeableToDoListProps {
    toDoListProps: ToDoListState,
    onGetToDoList: () => ActionType
}

export interface AddToDoProps {
    newToDo: ToDoState,
    addToDoErrors: AddToDoErrors,
    onAddToDo: (toDoToBeAdd: ToDoState) => AddToDoAction,
    onUpdateNewToDo: (newToDo: ToDoState) => UpdateNewToDoAction
}

export interface AddToDoErrors {
    maxToDosExceeded: boolean,
    newToDoTitleEmpty: boolean
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

export interface DeleteToDoAction extends ActionType {
    id: number
}

export interface DeleteToDoSuccessAction extends ActionType {
    id: number
}

export interface AddToDoAction extends ActionType {
    toDoToBeAdd: ToDoState
}

export interface AddToDoSuccessAction extends ActionType {
    newToDo: ToDoState
}

export interface UpdateNewToDoAction extends ActionType {
    newToDo: ToDoState,
}

export interface AddToDoErrorsAction extends ActionType {
    addToDoErrors: AddToDoErrors,
}