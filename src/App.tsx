import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "Angular", isDone: false},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ])

    function removeTask(taskID: string) {
        let result = tasks.filter(t => t.id !== taskID)
        setTasks(result);
    }

    function changeFilter(filter: FilterValuesType) {
        setFilter(filter);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks([task, ...tasks])
    }

    function changeTaskStatus(isDone: boolean, taskID: string) {
        let task = tasks.find(t => t.id === taskID)
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
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
           <Todolist title={"deff"} 
           tasks={tasksForTodolist} 
           removeTask={removeTask} 
           changeFilter={changeFilter}
           addTask={addTask}
           changeTaskStatus={changeTaskStatus}
           filter={filter}/>
        </div>
    );
}

export default App;
