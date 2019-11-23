export interface ToDoProps {
    id: number,
    title: string,
    completed: boolean
}

export interface ToDoListProps {
    toDoList: Array<ToDoProps>
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