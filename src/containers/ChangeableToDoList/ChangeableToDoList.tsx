import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ToDoList from '../../components/ToDoList/ToDoList';
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