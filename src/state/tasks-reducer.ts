import { TasksStateType } from "../App";
import { v1 } from 'uuid';
import { AddTodolistActionType, RemoveTodolistActionType } from "./todolist-reducer";

const initialState: TasksStateType = {};

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TASK":
            let newState = {...state};
            let tasks = newState[action.todolistID].filter(t => t.id !== action.id);
            return {...newState, [action.todolistID]: tasks};
        case "ADD-TASK" : {
            let newState = {...state};
            let task = {id: '4', title: action.title, isDone: false};
            newState[action.todolistID].unshift(task);
            return newState;
        }
        case "CHANGE-TASK-STATUS": {
            let newState = {...state};
            let task = newState[action.todolistID].find(t => t.id === action.taskID);
            if(task) {
                task.isDone = action.isDone;
            }
            return newState;
        }
        case "CHANGE-TASK-TITLE": {
            let newState = {...state};
            let task = newState[action.todolistID].find(t => t.id === action.taskID);
            if(task) {
                task.title = action.title;
            }
            return newState;
        }
        case "ADD-TODOLIST" : {
            let newState = {...state};
            let newTodolistID = action.todolistId;
            newState = {...newState, [newTodolistID]: []};
            return newState;
        }
        case "REMOVE-TODOLIST": {
            let newState = {...state};
            delete newState[action.id];
            return newState;
        }
        default:
            return state;
    }
}

export type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType | AddTodolistActionType | RemoveTodolistActionType;

export function RemoveTaskAC(taskID: string, todolistID: string):RemoveTaskActionType {
    return {
        type: "REMOVE-TASK",
        id: taskID,
        todolistID 
    }
}
export type RemoveTaskActionType = {
    type: "REMOVE-TASK"
    id: string
    todolistID: string
}

export function AddTaskAC(title: string, todolistID: string): AddTaskActionType {
    return {
        type: "ADD-TASK",
        title: title,
        todolistID: todolistID
    }
}

export type AddTaskActionType = {
    type: "ADD-TASK"
    title: string
    todolistID: string
} 


export function ChangeTaskStatusAC(taskID: string, isDone: boolean, todolistID: string): ChangeTaskStatusActionType {
    return {
        type: "CHANGE-TASK-STATUS",
        todolistID: todolistID,
        taskID: taskID,
        isDone: isDone
    }
}

export type ChangeTaskStatusActionType = {
    type: "CHANGE-TASK-STATUS"
    todolistID: string
    taskID: string
    isDone: boolean
}

export function ChangeTaskTitleAC(taskID: string, title: string, todolistID: string): ChangeTaskTitleActionType {
    return {
        type: "CHANGE-TASK-TITLE",
        todolistID: todolistID,
        taskID: taskID,
        title: title
    }
}

export type ChangeTaskTitleActionType = {
    type: "CHANGE-TASK-TITLE"
    todolistID: string
    taskID: string
    title: string
}

