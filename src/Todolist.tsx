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
        <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
        <EditableSpan value={t.title} onChange={onChangeForSpan}/>
        {/* <span>{t.title}</span> */}
        <button onClick={onClickHandler}>x</button>
    </li>
    })

    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const onChangeHandlerTodolist = (title: string) => {
        props.changeTodolistTitle(title, props.id);
    }

    const onAllClickHandler = () => {props.changeFilter("all", props.id)}
    const onCompletedClickHandler = () => {props.changeFilter("completed", props.id)}
    const onActiveClickHandler = () => {props.changeFilter("active", props.id)}

    return (
        <div>
            <h3><EditableSpan value={props.title} onChange={onChangeHandlerTodolist}/><button onClick={() => props.deleteTodolist(props.id)}>x</button></h3>
            <div>
                <AddItemForm addItem={addTask} />
            </div>
            {mappedTasks}
            <div>
                <button onClick={onAllClickHandler} className={props.filter === "all" ? "active-filter" : ""}>All</button>
                <button onClick={onActiveClickHandler} className={props.filter === "active" ? "active-filter" : ""}>Active</button>
                <button onClick={onCompletedClickHandler} className={props.filter === "completed" ? "active-filter" : ""}>Completed</button>
            </div>
        </div>
    );
}

