import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

export default App;

// src/App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}


const App = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const handleSubmit = () => {
        alert(`Login: ${login}\nSenha: ${senha}`);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
        }}>
            <div style={{
                width: '300px',
                padding: '20px',
                borderRadius: '4px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white',
            }}>
                <h2 style={{ textAlign: 'center' }}>Página Inicial</h2>
                <Input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={handleLoginChange}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={handleSenhaChange}
                />
                <Button label="Entrar" onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default App;
