import {Checkbox, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { ChangeEvent, useCallback } from "react";
import { TaskType } from "../App";
import EditableSpan from "./EditableSpan";

type TaskPropsType = {
    removeTask: (taskID: string, todolistID: string) => void
    changeTaskTitle: (title: string, taskID: string, todolistID: string) => void
    changeTaskStatus: (isDone: boolean, taskID: string, todolistID: string) => void
    task: TaskType
    id: string
}

const Task = React.memo((props: TaskPropsType) => {
    const onClickHandler = () => { props.removeTask(props.task.id, props.id) }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(newIsDoneValue, props.task.id, props.id)
    }
    const onChangeForSpan = useCallback((title: string) => {
        props.changeTaskTitle(title, props.task.id, props.id);
    },[props.changeTaskTitle, props.task.id, props.id])

    return <li key={props.task.id} className={props.task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={props.task.isDone}
            color="primary"
            onChange={onChangeHandler} />
        <EditableSpan value={props.task.title} onChange={onChangeForSpan} />
        <IconButton onClick={onClickHandler}>
            <Delete />
        </IconButton>
    </li>
});

export default Task;