import { Button, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, {useCallback, useState } from "react";
import { FilterValuesType, TaskType } from "./App";
import AddItemForm from "./components/AddItemForm";
import EditableSpan from "./components/EditableSpan";
import Task from "./components/Task";


type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todolistID: string) => void
    changeFilter: (filter: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (isDone: boolean, taskID: string, todolistID: string) => void
    deleteTodolist: (todolistID: string) => void
    changeTaskTitle: (title: string, taskID: string, todolistID: string) => void
    changeTodolistTitle: (title: string, todolistID: string) => void
    filter: FilterValuesType
    id: string
}

export const Todolist = React.memo((props: PropsType) => {
    console.log("todo");
    let tasksForTodolist = props.tasks;
        if(props.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
        }
        if(props.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
        }
    let mappedTasks = tasksForTodolist.map(t => <Task key={t.id} task={t} removeTask={props.removeTask}  changeTaskStatus={props.changeTaskStatus} changeTaskTitle={props.changeTaskTitle} id={props.id}/>)

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    },[props.addTask, props.id]);

    const onChangeHandlerTodolist = useCallback((title: string) => {
        props.changeTodolistTitle(title, props.id);
    }, [props.changeTodolistTitle, props.id]);

    const removeTodolist = () => {
        props.deleteTodolist(props.id);
    }

    const onAllClickHandler = useCallback(() => {props.changeFilter("all", props.id)},[props.changeFilter, props.id]);
    const onCompletedClickHandler = useCallback(() => {props.changeFilter("completed", props.id)},[props.changeFilter, props.id]);
    const onActiveClickHandler = useCallback(() => {props.changeFilter("active", props.id)},[props.changeFilter, props.id]);


    return (
        <div>
            <h3><EditableSpan value={props.title} onChange={onChangeHandlerTodolist}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
            </h3>
            <div>
                <AddItemForm addItem={addTask} />
            </div>
            {mappedTasks}
            <div>
                <Button onClick={onAllClickHandler} className={props.filter === "all" ? "active-filter" : ""} color="primary" variant={props.filter === "all" ? "contained" : "outlined"} style={{margin: "10px 5px 10px 0"}}>All</Button>
                <Button onClick={onActiveClickHandler} className={props.filter === "active" ? "active-filter" : ""} color="primary" variant={props.filter === "active" ? "contained" : "outlined"} style={{margin: "10px 5px 10px 0"}}>Active</Button>
                <Button onClick={onCompletedClickHandler} className={props.filter === "completed" ? "active-filter" : ""} color="primary" variant={props.filter === "completed" ? "contained" : "outlined"} style={{margin: "10px 0px 10px 0"}}>Completed</Button>
            </div>
        </div>
    );
});

