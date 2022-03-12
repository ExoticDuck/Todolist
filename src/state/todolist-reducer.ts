import { v1 } from "uuid"
import { FilterValuesType, TodolistType } from "../App"

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            let newState = [...state];
            return newState.filter(t => t.id !== action.id);;
        case "ADD-TODOLIST": {
            let newState = [...state];
            return [...newState, {id: v1(), title: action.title, filter: "all"}]
        }
        case "CHANGE-TODOLIST-TITLE": {
            let newState = [...state];
            let todolist = newState.find(t => t.id === action.id);
            if(todolist) {
                todolist.title = action.title;
            }
            return newState;
        }
        case "CHANGE-TODOLIST-FILTER": {
            let newState = [...state];
            let todolist = newState.find(t => t.id === action.id);
            if(todolist) {
                todolist.filter = action.filter;
            }
            return newState;
        }   
        default:
            throw new Error("Wrong action type")
    }
}

export type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistFilterActionType | ChangeTodolistTitleActionType;

export function RemoveTodolistAC(todolistID: string):RemoveTodolistActionType {
    return {
        type: "REMOVE-TODOLIST",
        id: todolistID
    }
}
export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST"
    id: string
}

export function AddTodolistAC(title: string): AddTodolistActionType {
    return {
        type: "ADD-TODOLIST",
        title: title
    }
}

export type AddTodolistActionType = {
    type: "ADD-TODOLIST"
    title: string
} 

export function ChangeTodolistTitleAC(todolistID: string, newTitle: string): ChangeTodolistTitleActionType {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        id: todolistID,
        title: newTitle
    }
}

export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}

export function ChangeTodolistFilterAC(todolistID: string, newFilter: FilterValuesType): ChangeTodolistFilterActionType {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        id: todolistID,
        filter: newFilter
    }
}

export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string
    filter: FilterValuesType
}