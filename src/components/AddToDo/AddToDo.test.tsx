import React from 'react';
import { shallow } from 'enzyme';

import { AddToDo, AddToDoError } from './AddToDo';
import { AddToDoProps, ToDoState } from '../../types';

describe('<ToDo/>', () => {
    let addToDo: any,
        props: AddToDoProps;

    beforeEach(() => {
        props = {
            newToDo: { id: 0, title: '', completed: false },
            addToDoErrors: { newToDoTitleEmpty: false, maxToDosExceeded: false },
            onAddToDo: (toDoToBeAdd: ToDoState) => ({ type: '', toDoToBeAdd }),
            onUpdateNewToDo: (newToDo: ToDoState) => ({ type: '', newToDo })
        };
        addToDo = shallow(<AddToDo {...props} />);
    });

    it('renders maximum count exceeded message if the property is true', () => {
        addToDo.setProps({ addToDoErrors: { maxToDosExceeded: true } });
        expect(addToDo.contains(<AddToDoError>You can have maximum 10 To Do-s</AddToDoError>)).toEqual(true);
    });

    it('renders new to do title is empty message if the property is true', () => {
        addToDo.setProps({ addToDoErrors: { newToDoTitleEmpty: true } });
        expect(addToDo.contains(<AddToDoError>To Do Title cannot be empty</AddToDoError>)).toEqual(true);
    });
});