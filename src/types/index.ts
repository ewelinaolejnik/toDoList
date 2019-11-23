export interface IToDo {
    id: number,
    title: string,
    completed: boolean
}

export interface IToDoList {
    toDoList: Array<IToDo>
}