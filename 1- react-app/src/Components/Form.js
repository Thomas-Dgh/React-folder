import { useState } from "react";
import React from 'react'
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

export default function form() {


    const [dataArr, setDataArr] = useState([
        { txt: 'Promener le chien', id: uuidv4() },
        { txt: 'Sport', id: uuidv4() },
        { txt: 'Coder avec React', id: uuidv4() }
    ])

    const [stateInput, setStateInput] = useState();

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState);
    }

    const addTodo = e => {
        e.preventDefault();


        // on copie le state actuel
        const newArr = [...dataArr]
        // on créé un nouvel objet
        const newTodo = {};
        // on rajoute une propriété txt
        newTodo.txt = stateInput;
        // on lui ajoute un id
        newTodo.id = uuidv4();
        //on push le nouvel objet dans le tableau
        newArr.push(newTodo);
        // on change le state du tableau
        setDataArr(newArr);
        // on remet l'input vide 
        setStateInput('');
        
    }

    const linkedInput = e => {
        setStateInput(e);
    }


    return (


        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form onSubmit={e => addTodo(e)} 
                className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire </label>
                <input 
                type="text" 
                value  = {stateInput}
                onInput={e => linkedInput(e.target.value)}
                className="form-control" 
                id="todo" />
                <button className="mt-2 btn btn-primary">Envoyez</button>
            </form>


            <h2>Liste des choses à faire : </h2>
            <br />
            <ul className="list-group">
                {dataArr.map((item) => {
                    return (
                        <Item 
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )
}