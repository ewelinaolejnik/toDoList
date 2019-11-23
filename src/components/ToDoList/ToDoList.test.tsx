import React from 'react';
import { shallow } from 'enzyme';

import ToDoList from './ToDoList';
import ToDo from './ToDo/ToDo';

describe('<ToDoList/>', () => {
    let toDoList: any;

    beforeEach(() => {
        toDoList = shallow(<ToDoList toDoList={[]} />);
    });

    it('shows message when there are no to dos', () => {
        expect(toDoList.contains(<p>There's nothing to do :)</p>)).toEqual(true);
    });
    it('should render <ToDo/> items in amount of passed to dos', () => {
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
});