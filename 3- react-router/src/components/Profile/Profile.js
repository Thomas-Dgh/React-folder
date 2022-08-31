import React from 'react'
import { useParams } from 'react-router'

export default function Profile() {

    const params = useParams();
    
    return (
        <div>
            <h1>Bienvenue sur votre profil</h1>
        </div>
    )
}
