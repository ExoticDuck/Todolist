import axios from "axios";


const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
    headers: {
        'API-KEY': "a51c385e-38b4-45b2-933a-739b6104467f"
    }
});

export const todolistAPI = {
    getTodolists: () => {
        return instanse.get<TodolistType[]>(`/todo-lists`);
    },
    addTodolist: (title: string) => {
        return instanse.post<ResponseType<{item: TodolistType}>>(`/todo-lists`, { title });
    },
    deleteTodolist: (todolistId: string) => {
        return instanse.delete<ResponseType>(`/todo-lists/${todolistId}`)
    },
    updateTitle: (title: string, todolistId: string) => {
        return instanse.put<ResponseType>(`/todo-lists/${todolistId}`, { title })
    }
}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: D
}

export const tasksAPI = {
    getTasks: (todolistId: string) => {
        return instanse.get(`/todo-lists/${todolistId}/tasks`);
    },
    addTask: (title: string, todolistId: string) => {
        return instanse.post(`/todo-lists/${todolistId}/tasks`, {title});
    },
    updateTask: (title: string, description: string, completed: boolean, status: number, priority: number, startDate: string, deadline: string, todolistId: string, taskId: string) => {
        return instanse.post(`/todo-lists/${todolistId}/tasks/${taskId}`, {title, description, completed, status, priority, startDate, deadline});
    },
    deleteTask: (todolistId: string, taskId: string) => {
        return instanse.delete(`/todo-lists/${todolistId}/tasks/${taskId}`)
    }
}

