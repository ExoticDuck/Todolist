type StateType = {
    age: number
    childrenCount: number
    name: string
}

type ActionType = {
    type: string
    [key: string] : any
}

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT-AGE":
            let newState = {...state}
            newState.age++
            return newState;
        case "INCREMENT-CHILDREN-COUNT": {
            let newState = {...state}
            newState.childrenCount++
            return newState;
        }
        case "CHANGE-NAME": {
            let newState = {...state} 
            newState.name = action.newName;
            return newState;
        }
        default:
            throw new Error("Wrong action type")
    }
}