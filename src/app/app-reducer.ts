import { Dispatch } from "redux";
import { authAPI } from "../api/todolists-api";
import { setIsLoggedInAC } from "../features/TodolistsList/auth-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type ErrorType = string | null;
const initialState = {
    status: "loading" as RequestStatusType,
    error: null as ErrorType,
    isInitialized: false
}

type InitialStateType = typeof initialState;

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS": {
            return {...state, status: action.status}
        } 
        case "APP/SET-ERROR": {
            return {...state, error: action.error}
        } 
        case "APP/SET-IS-INITIALIZED": {
            return {...state, isInitialized: action.isInitialized}
        } 
        default: {
            return state
        }
    }
}

type ActionsType = SetAppStatusACType | SetAppErrorACType | SetIsInitializedACType;

export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: "APP/SET-STATUS",
        status
    } as const
}

export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>

export const setAppErrorAC = (error: ErrorType) => {
    return {
        type: "APP/SET-ERROR",
        error
    } as const
}

export type SetAppErrorACType = ReturnType<typeof setAppErrorAC>

export const setIsInitializedAC = (isInitialized: boolean) => {
    return {
        type: "APP/SET-IS-INITIALIZED",
        isInitialized
    } as const
}

export type SetIsInitializedACType = ReturnType<typeof setIsInitializedAC>

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then((result) => {
        debugger
        dispatch(setIsInitializedAC(true))
        if(result.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true));
        } else {

        }
    })
}