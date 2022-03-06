import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType, TaskType } from "./App";
import { MapTasks } from "./MapTasks";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todolistID: string) => void
    changeFilter: (filter: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (isDone: boolean, taskID: string, todolistID: string) => void
    deleteTodolist: (todolistID: string) => void
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

     return <li key={t.id} className={t.isDone ? "is-done" : ""}>
        <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
        <span>{t.title}</span>
        <button onClick={onClickHandler}>x</button>
    </li>
    })

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title, props.id);
            setTitle("");
        } else {
            setError("Title is required!")
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {props.changeFilter("all", props.id)}
    const onCompletedClickHandler = () => {props.changeFilter("completed", props.id)}
    const onActiveClickHandler = () => {props.changeFilter("active", props.id)}

    return (
        <div>
            <h3>{props.title}<button onClick={() => props.deleteTodolist(props.id)}>x</button></h3>
            <div>
                <input value={title} 
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? "error" : ""}/>
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
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

