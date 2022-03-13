import { Button, Checkbox, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType, TaskType } from "./App";
import AddItemForm from "./components/AddItemForm";
import EditableSpan from "./components/EditableSpan";
import { MapTasks } from "./MapTasks";

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

export const Todolist = (props: PropsType) => {
    
    let [title, setTitle] = useState<string>("")
    let [error, setError] = useState<string | null>(null);
    let mappedTasks = props.tasks.map(t => {

        const onClickHandler = () => {props.removeTask(t.id, props.id)}
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(newIsDoneValue, t.id, props.id)
        }
        const onChangeForSpan = (title: string) => {
            props.changeTaskTitle(title, t.id, props.id);
        } 

     return <li key={t.id} className={t.isDone ? "is-done" : ""}>
        <Checkbox
        checked={t.isDone}
        color="primary"
        onChange={onChangeHandler}/>
        <EditableSpan value={t.title} onChange={onChangeForSpan}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </li>
    })

    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const onChangeHandlerTodolist = (title: string) => {
        props.changeTodolistTitle(title, props.id);
    }

    const removeTodolist = () => {
        props.deleteTodolist(props.id);
    }

    const onAllClickHandler = () => {props.changeFilter("all", props.id)}
    const onCompletedClickHandler = () => {props.changeFilter("completed", props.id)}
    const onActiveClickHandler = () => {props.changeFilter("active", props.id)}

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
}

