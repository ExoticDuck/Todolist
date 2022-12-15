import React, { useEffect } from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'

// You can learn about the difference by reading this guide on minimizing bundle size.
// https://mui.com/guides/minimizing-bundle-size/
// import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Menu } from '@mui/icons-material';
import { CircularProgress, LinearProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootStateType } from './store';
import { initializeAppTC, RequestStatusType } from './app-reducer';
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../features/Login/Login';
import { logOutTC } from '../features/TodolistsList/auth-reducer';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        debugger
        dispatch(initializeAppTC())
    }, [])

    let status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    let isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);

    let logoutClickHandler = () => {
        dispatch(logOutTC());
    }

    if (!isInitialized) {
        return <div
            style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
            <CircularProgress />
        </div>
    }

    return (
        <div className="App">
            <ErrorSnackbar />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    {isLoggedIn && <Button color='inherit' onClick={logoutClickHandler}>Log out</Button>}
                </Toolbar>
                {status === "loading" && <LinearProgress />}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path='/Todolist'>
                        <Route path="/" element={<TodolistsList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/*" element={<Navigate to={"/Todolist/404"} />} />
                        <Route path="/404" element={<h1>Page not found</h1>} />
                    </Route>
                </Routes>
            </Container>
        </div>
    )
}

export default App
