import React, { Component } from 'react';

import ToDoList from '../../components/ToDoList/ToDoList';

class ChangeableToDoList extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ToDoList toDoList={[]} />
        );
    }
}

export default ChangeableToDoList;