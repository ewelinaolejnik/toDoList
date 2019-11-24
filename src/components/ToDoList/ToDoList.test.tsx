import React from 'react';
import { shallow } from 'enzyme';

import ToDoList, { Spinner } from './ToDoList';
import ToDo from './ToDo/ToDo';
import { ToDoListProps } from '../../types';
import spinner from '../../assets/spinner.gif';

describe('<ToDoList/>', () => {
    let toDoList: any,
        props: ToDoListProps;

    beforeEach(() => {
        props = {
            toDoList: [],
            maxToDoListCount: 4,
            loading: false
        };
        toDoList = shallow(<ToDoList {...props} />);
    });

    it('shows message when there is an empty to do list', () => {
        expect(toDoList.contains(<p>There's nothing to do :)</p>)).toEqual(true);
    });

    it('should render <ToDo/> items in amount of passed to do items', () => {
        const toDos = [
            {
                id: 1,
                title: "Task 1",
                completed: false
            },
            {
                id: 2,
                title: "Task 2",
                completed: false
            },
            {
                id: 3,
                title: "Task 3",
                completed: false
            },
        ];
        toDoList.setProps({ toDoList: toDos });
        expect(toDoList.find(ToDo)).toHaveLength(3);
    });

    it('should render <ToDo/> items in amount of maximum maxToDoListCount value even if props has more items', () => {
        const toDos = [
            {
                id: 1,
                title: "Task 1",
                completed: false
            },
            {
                id: 2,
                title: "Task 2",
                completed: false
            },
            {
                id: 3,
                title: "Task 3",
                completed: false
            },
            {
                id: 4,
                title: "Task 4",
                completed: false
            },
            {
                id: 5,
                title: "Task 5",
                completed: false
            },
        ];
        toDoList.setProps({ toDoList: toDos });
        expect(toDoList.find(ToDo)).toHaveLength(props.maxToDoListCount);
    });

    it('shows spinner when loading prop is true', () => {
        props = {
            toDoList: [],
            maxToDoListCount: 4,
            loading: true
        };
        toDoList = shallow(<ToDoList {...props} />);
        expect(toDoList.contains(<Spinner src={spinner} alt="loading..." />)).toEqual(true);
    });
});