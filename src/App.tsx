import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    let [tasks1, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "Angular", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "JS", isDone: true}
    ])

    return (
        <div className="App">
           <Todolist title={"deff"} tasks={tasks1}/>
        </div>
    );
}

export default App;
