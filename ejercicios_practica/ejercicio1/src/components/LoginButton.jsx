import React from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext'
import { useContext } from 'react';

import { Button } from './Button';

export const LoginButton = () => {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    if (currentUser.name !== "") {
        return <p>Hola {currentUser.name}, te esperábamos.</p>;
    }
  return (
    <Button 
        onClick= {() => {
            setCurrentUser({ name: "Alberto"})
        }}
    >
        Login
    </Button>
  )
}
