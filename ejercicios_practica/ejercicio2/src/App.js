import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { useState, useEffect } from 'react'
import AppRouter from './routes/AppRouter';

function App() {

  const [user, setUser] = useState({nombre: "", email: ""})

  useEffect( () => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(user));
  },[user])

  return (
    <PruebaContext.Provider value={{ user, setUser}}>
      <AppRouter />
    </PruebaContext.Provider>
  );
}

export default App;
