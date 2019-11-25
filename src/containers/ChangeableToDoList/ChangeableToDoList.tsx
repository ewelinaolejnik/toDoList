import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ToDoList from '../../components/ToDoList/ToDoList';
import { getToDoList, updateToDo } from '../../redux/actions/toDoList';
import { ChangeableToDoListProps, AppState, ActionType, ToDoState } from '../../types';

import ErrorBoundary from '../../ErrorBoundary';


class ChangeableToDoList extends Component<ChangeableToDoListProps> {

    componentDidMount() {
        this.props.onGetToDoList();
    }

    render() {
        return (
            <ErrorBoundary>
                <ToDoList {...this.props.toDoListProps} onUpdateToDo={this.props.onUpdateToDo} />
            </ErrorBoundary>
        );
    }
}

export const mapStateToProps = (state: AppState) => ({
    toDoListProps: state.toDoListProps
});

export const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    onGetToDoList: () => dispatch(getToDoList()),
    onUpdateToDo: (toDoToBeUpdate: ToDoState) => dispatch(updateToDo(toDoToBeUpdate))
});


export default connect(mapStateToProps, mapDispatchToProps)(ChangeableToDoList);