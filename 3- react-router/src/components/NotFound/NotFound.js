import React from 'react'
import { useNavigate } from 'react-router'

export default function NotFound() {

    const navigate = useNavigate()

    const goHome = () => { navigate("/") }

    return (
        <div>
            <h1>Whoops ! Cette page n'existe pas</h1>
            <button onClick={goHome}>Retourner a l'accueil</button>
        </div>
    )
}
