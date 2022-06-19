export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type ErrorType = string | null;
const initialState = {
    status: "loading" as RequestStatusType,
    error: null as ErrorType
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
        default: {
            return state
        }
    }
}

type ActionsType = SetAppStatusACType | SetAppErrorACType;

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