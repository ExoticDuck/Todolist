import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';
import './App.css';
import AddItemForm from './components/AddItemForm';
import { AppRootStateType } from './state/store';
import { AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC, tasksReducer } from './state/tasks-reducer';
import { AddTodolistAC, ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC, todolistsReducer } from './state/todolist-reducer';

import { Todolist } from './Todolist';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type FilterValuesType = "all" | "active" | "completed";

function AppWithRedux() {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists);
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks);
    const dispatch = useDispatch();

    function removeTask(taskID: string, todolistID: string) { 
        let action = RemoveTaskAC(taskID, todolistID);
        dispatch(action);
    }

    function changeFilter(filter: FilterValuesType, todolistID: string) {
        let action = ChangeTodolistFilterAC(todolistID, filter);
        dispatch(action);
    }

    function addTask(title: string, todolistID: string) {
        let action = AddTaskAC(title, todolistID);
        dispatch(action);
    }

    function changeTaskStatus(isDone: boolean, taskID: string, todolistID: string) {
        let action = ChangeTaskStatusAC(taskID, isDone, todolistID);
        dispatch(action);
    }

    function changeTaskTitle(title: string, taskID: string, todolistID: string) {
        let action = ChangeTaskTitleAC(taskID, title, todolistID);
        dispatch(action);
    }

    function deleteTodolist(todolistID: string) {
        let action = RemoveTodolistAC(todolistID);
        dispatch(action);
    }

    function addTodolist(title: string) {
        let action = AddTodolistAC(title);
        dispatch(action);
    }

    function changeTodolistTitle(title: string, todolistID: string) {
        let action = ChangeTodolistTitleAC(todolistID, title);
        dispatch(action);
    }
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color='inherit' aria-label='menu'>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6'>
                        News
                    </Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist} />
                </Grid>
                <Grid container spacing={2}>
                    {
                        todolists.map(tl => {
                            let allTasksForTodolist = tasks[tl.id]
                            let tasksForTodolist = allTasksForTodolist;

                            switch (tl.filter) {
                                case "active": {
                                    tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                                    break
                                }
                                case "completed": {
                                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
                                    break
                                }
                                default: tasksForTodolist = allTasksForTodolist;
                            }
                            return <Grid item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeTaskStatus}
                                        filter={tl.filter}
                                        deleteTodolist={deleteTodolist}
                                        changeTodolistTitle={changeTodolistTitle}
                                        changeTaskTitle={changeTaskTitle} />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>


        </div>
    );
}

export default AppWithRedux;
