import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React, { useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddItemForm from './components/AddItemForm';
import { AppRootStateType } from './state/store';
import { AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC} from './state/tasks-reducer';
import { AddTodolistAC, ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC} from './state/todolist-reducer';

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

    const removeTask = useCallback((taskID: string, todolistID: string) => { 
        let action = RemoveTaskAC(taskID, todolistID);
        dispatch(action);
    },[dispatch]);

    const changeFilter = useCallback((filter: FilterValuesType, todolistID: string) => {
        let action = ChangeTodolistFilterAC(todolistID, filter);
        dispatch(action);
    },[dispatch]);

    const addTask = useCallback((title: string, todolistID: string) => {
        let action = AddTaskAC(title, todolistID);
        dispatch(action);
    },[dispatch]);

    const changeTaskStatus = useCallback((isDone: boolean, taskID: string, todolistID: string) => {
        let action = ChangeTaskStatusAC(taskID, isDone, todolistID);
        dispatch(action);
    },[dispatch]);

    const changeTaskTitle = useCallback((title: string, taskID: string, todolistID: string) => {
        let action = ChangeTaskTitleAC(taskID, title, todolistID);
        dispatch(action);
    },[dispatch]);

    const deleteTodolist = useCallback((todolistID: string) => {
        let action = RemoveTodolistAC(todolistID);
        dispatch(action);
    },[dispatch]);

    const addTodolist = useCallback((title: string) => {
        let action = AddTodolistAC(title);
        dispatch(action);
    },[dispatch]);

    const changeTodolistTitle = useCallback((title: string, todolistID: string) => {
        let action = ChangeTodolistTitleAC(todolistID, title);
        dispatch(action);
    },[dispatch]);

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
