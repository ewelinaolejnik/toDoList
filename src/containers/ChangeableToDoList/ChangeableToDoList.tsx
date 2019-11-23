import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import ToDoList from '../../components/ToDoList/ToDoList';
import * as actionTypes from '../../redux/actions/actionTypes';
import { ChangeableToDoListProps, AppState, ActionType } from '../../types';


class ChangeableToDoList extends Component<ChangeableToDoListProps> {

    componentDidMount() {
        this.props.onGetToDoList();
    }

    render() {
        return (
            <ToDoList {...this.props.toDoListProps} />
        );
    }
}

export const mapStateToProps = (state: AppState) => ({
    toDoListProps: state.toDoListProps
});

export const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    onGetToDoList: () => dispatch({ type: actionTypes.GET_TO_DO_LIST })
});


export default connect(mapStateToProps, mapDispatchToProps)(ChangeableToDoList);