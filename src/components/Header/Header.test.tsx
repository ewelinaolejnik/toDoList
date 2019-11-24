import React from 'react';
import { shallow } from 'enzyme';

import Header, { ToDoListTitle } from './Header';

describe('<Header/>', () => {
    let header: any;

    beforeEach(() => {
        header = shallow(<Header />);
    });

    it('contains To Do List title', () => {
        expect(header.contains(<ToDoListTitle>To Do List</ToDoListTitle>)).toEqual(true);
    });
});