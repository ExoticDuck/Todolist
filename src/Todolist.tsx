import React from "react";
import { TaskType } from "./App";
import { MapTasks } from "./MapTasks";

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export const Todolist = (props: PropsType) => {
    let mappedTasks = props.tasks.map(t => <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span></li>)

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            {mappedTasks}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}

