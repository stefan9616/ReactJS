import { useState, useEffect } from "react";

import * as carService from './services/carService'

import { CreateRacer } from "./components/CreateRacer/CreateRacer";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Navigation } from "./components/Navigation/Navigation";
import { Register } from "./components/Register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => {
                console.log(result);
                setCars(result)
            })
    }, [])

    const onCreateRacerSubmit = async (data) => {
        const newRacer = await carService.create(data);

        setCars(state => [...state, newRacer])

        navigate('/dashboard')
    }

    return (
        <>
            <div id="container">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/dashboard" element={<Dashboard cars={cars} />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/create-racer" element={<CreateRacer onCreateRacerSubmit={onCreateRacerSubmit} />}></Route>
                        <Route path="/edit" element={<Edit />}></Route>
                        <Route path="/dashboard/:racerId" element={<Details />}></Route>
                    </Routes>
                </main>
            </div >
                < Footer />
        </>
    )
}

export default App;
