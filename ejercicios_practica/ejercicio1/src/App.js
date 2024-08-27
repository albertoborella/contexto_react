import { useState } from 'react'
import { CurrentUserContext } from './context/CurrentUserContext';
import { Form } from './components/Form';

function App() {

  const [currentUser, setCurrentUser] = useState({name:""});

  return (
    <CurrentUserContext.Provider
    value = {{
      currentUser,
      setCurrentUser,
    }}>
    <Form />
    </CurrentUserContext.Provider>
  );
}

export default App;
