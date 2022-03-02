import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType, TaskType } from "./App";
import { MapTasks } from "./MapTasks";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

export const Todolist = (props: PropsType) => {
    
    let [title, setTitle] = useState<string>("")
    
    let mappedTasks = props.tasks.map(t => {

        const onClickHandler = () => {props.removeTask(t.id)}

     return <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={onClickHandler}>x</button>
    </li>
    })

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title);
            setTitle("");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {props.changeFilter("all")}
    const onCompletedClickHandler = () => {props.changeFilter("completed")}
    const onActiveClickHandler = () => {props.changeFilter("active")}

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} 
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            {mappedTasks}
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}

