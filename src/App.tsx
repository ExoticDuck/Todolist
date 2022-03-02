import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "Angular", isDone: false},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "JS", isDone: true}
    ])

    function removeTask(taskID: number) {
        let result = tasks.filter(t => t.id !== taskID)
        setTasks(result);
    }

    function changeFilter(filter: FilterValuesType) {
        setFilter(filter);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    switch(filter) {
        case "active": {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone) 
            break
        }
        case "completed": {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone) 
            break
        }
        default: tasksForTodolist = tasks;
    }

    return (
        <div className="App">
           <Todolist title={"deff"} tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
