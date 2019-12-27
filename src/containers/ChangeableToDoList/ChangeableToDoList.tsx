import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ToDoList from '../../components/ToDoList/ToDoList';
import AddToDo from '../../components/AddToDo/AddToDo';
import { getToDoList } from '../../redux/actions/toDoList';
import { ChangeableToDoListProps, AppState, ActionType } from '../../types';

import ErrorBoundary from '../../ErrorBoundary';


class ChangeableToDoList extends Component<ChangeableToDoListProps> {

    componentDidMount() {
        this.props.onGetToDoList();
    }

    render() {
        return (
            <ErrorBoundary>
                <AddToDo newToDo={this.props.toDoListProps.newToDo} addToDoErrors={this.props.toDoListProps.addToDoErrors} />
                <ToDoList {...this.props.toDoListProps} />
            </ErrorBoundary>
        );
    }
}

export const mapStateToProps = (state: AppState) => ({
    toDoListProps: state.toDoListProps
});

export const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    onGetToDoList: () => dispatch(getToDoList())
});


export default connect(mapStateToProps, mapDispatchToProps)(ChangeableToDoList);