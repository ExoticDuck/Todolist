import React from "react";
import { TaskType } from "./App";

type PropsType = {
    tasks: Array<TaskType>
}

export const MapTasks = (props: PropsType) => {
    let mappedTasks = props.tasks.map(t=> <li key={t.id}><input type="checkbox" checked={t.isDone} /> <span>{t.title}</span></li>)

    return(
        <ul>
            {mappedTasks}
        </ul>
    );
}