export interface ToDoProps {
    id: number,
    title: string,
    completed: boolean
}

export interface ToDo extends ToDoProps {
    userId: number
}

export interface ToDoListProps {
    toDoList: Array<ToDoProps>,
    readonly maxToDoListCount: number
}

export interface AppState {
    toDoListProps: ToDoListProps
}

export interface ChangeableToDoListProps {
    toDoListProps: ToDoListProps,
    onGetToDoList: () => ActionType
}

export interface ActionType {
    type: string
}

export interface GetToDoListSuccessAction extends ActionType {
    toDoList: Array<ToDoProps>
}