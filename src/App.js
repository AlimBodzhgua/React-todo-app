import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import UserProvider from './context/index';

import './App.css';



export default function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        </UserProvider>
    );
}


/*
{
    "users": [
        {
            "id": 1,
            "login": "login1",
            "email": "login@mail.ru",
            "password": "password1",
            "categories": [
                {
                    "id": 1,
                    "categoryName": "Frontend",
                    "tasks": [
                        {
                            "id": 1,
                            "value": "task1",
                            "isComplete": "false"
                        }
                    ]
                },
                {
                    "id": 2,
                    "categoryName": "backend",
                    "tasks": [
                        {
                            "id": 1,
                            "value": "task1",
                            "isComplete": "true"
                        }
                    ]     
                }
            ]
        }   
    ]
}
*/