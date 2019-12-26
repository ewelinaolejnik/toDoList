import React from 'react';
import { shallow } from 'enzyme';

import { ToDo, RemoveButton } from './ToDo';
import { ToDoProps, ToDoState } from '../../../types';

describe('<ToDo/>', () => {
    let toDo: any,
        props: ToDoProps;

    beforeEach(() => {
        props = {
            id: 1,
            title: "Test",
            completed: false,
            onRemoveToDo: (id: number) => { return { type: "", id: 1 } },
            onUpdateToDo: (toDoToBeUpdate: ToDoState) => {
                return {
                    type: "", toDoToBeUpdate: { id: 1, title: "Test", completed: false }
                }
            }
        };
        toDo = shallow(<ToDo {...props} />);
    });

    it('renders Remove button when completed is true', () => {
        toDo.setProps({ completed: true });
        expect(toDo.containsMatchingElement(<RemoveButton>Remove</RemoveButton>)).toEqual(true);
    });
});