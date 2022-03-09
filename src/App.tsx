import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import AddItemForm from './components/AddItemForm';
import { Todolist } from './Todolist';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string] : Array<TaskType>
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolits] = useState<Array<TodolistType>>([
        { id: todolistID1, title: "What to learn", filter: "all" },
        { id: todolistID2, title: "What to buy", filter: "all" },
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "Angular", isDone: false },
            { id: v1(), title: "React", isDone: true },
            { id: v1(), title: "JS", isDone: true }
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "Angular", isDone: false },
            { id: v1(), title: "React", isDone: true },
            { id: v1(), title: "JS", isDone: true }
        ]
    })

    function removeTask(taskID: string, todolistID: string) {
        let todolistTasks = tasks[todolistID];
        tasks[todolistID] = todolistTasks.filter(t => t.id !== taskID);
        setTasks({...tasks});
    }

    function changeFilter(filter: FilterValuesType, todolistID: string) {
        let todolist = todolists.find(t => t.id === todolistID)
        if (todolist) {
            todolist.filter = filter;
            setTodolits([...todolists])
        }
    }

    function addTask(title: string, todolistID: string) {
        let task = { id: v1(), title: title, isDone: false };
        let todolistTasks = tasks[todolistID];
        tasks[todolistID] = [task, ...todolistTasks]
        setTasks({...tasks})
    }

    function changeTaskStatus(isDone: boolean, taskID: string, todolistID: string) {
        let todolistTasks = tasks[todolistID];
        let task = todolistTasks.find(t => t.id === taskID);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks})
        }
    }

    function changeTaskTitle(title: string, taskID: string, todolistID: string) {
        let todolistTasks = tasks[todolistID];
        let task = todolistTasks.find(t => t.id === taskID);
        if(task) {
            task.title = title;
            setTasks({...tasks})
        }
    }

    function deleteTodolist(todolistID: string) {
        setTodolits(todolists.filter(t => t.id !== todolistID));
        delete tasks[todolistID];
        setTasks({...tasks})
    }

    function addTodolist(title: string) {
        let newTodolistID = v1();
        setTodolits([{ id: newTodolistID, title: title, filter: "all" }, ...todolists]);
        setTasks({...tasks, [newTodolistID]: []})
    }

    function changeTodolistTitle(title: string, todolistID: string) {
        let todolist = todolists.find(t => t.id === todolistID);
        if(todolist) {
            todolist.title = title;
            setTodolits([...todolists])
        }
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {
                todolists.map(tl => {
                    let allTasksForTodolist = tasks[tl.id]
                    let tasksForTodolist = allTasksForTodolist;

                    switch (tl.filter) {
                        case "active": {
                            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                            break
                        }
                        case "completed": {
                            tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
                            break
                        }
                        default: tasksForTodolist = allTasksForTodolist;
                    }
                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={tl.filter}
                        deleteTodolist={deleteTodolist}
                        changeTodolistTitle={changeTodolistTitle}
                        changeTaskTitle={changeTaskTitle} />
                })
            }


        </div>
    );
}

export default App;
