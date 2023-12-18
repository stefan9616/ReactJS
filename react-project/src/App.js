import { useState, useEffect } from "react";

import * as carService from './services/carService';
import * as authService from './services/authService';
import { AuthContext } from "./contexts/AuthContext";

import { CreateRacer } from "./components/CreateRacer/CreateRacer";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Navigation } from "./components/Navigation/Navigation";
import { Register } from "./components/Register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    const [cars, setCars] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result)
            })
    }, [])

    const onCreateRacerSubmit = async (data) => {
        const newRacer = await carService.create(data);

        setCars(state => [...state, newRacer]);

        navigate('/')
    }

    const onLoginSubmit = async (data) => {
        const loginUser = await authService.login(data);
        setAuth(loginUser);
        navigate('/');
    }

    const onRegisterSubmit = async (data) => {
        const { rePassword, ...registerData } = data;

        if (rePassword !== registerData.password) {
            alert('Passwords not match')
            return;
        }

        try {
            const registerUser = await authService.register(data);
            setAuth(registerUser);
            navigate('/')
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }


    }
    const onLogout = async () => {
        // await authService.logout();
        setAuth({});
    }

    const context = {
        onLogout,
        onRegisterSubmit,
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={context}>
            <div id="container">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/dashboard" element={<Dashboard cars={cars} />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/logout" element={<Logout />}></Route>
                        <Route path="/create-racer" element={<CreateRacer onCreateRacerSubmit={onCreateRacerSubmit} />}></Route>
                        <Route path="/edit" element={<Edit />}></Route>
                        <Route path="/dashboard/:racerId" element={<Details />}></Route>
                    </Routes>
                </main>
            </div >
            < Footer />
        </AuthContext.Provider>
    )
}

export default App;
