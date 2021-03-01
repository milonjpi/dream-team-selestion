import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import CricketersData from "../../data/cricketers.json";

const Cricketers = (props) => {
    const [cricketers, setCricketers] = useState([]);
    useEffect(()=> {
        setCricketers(CricketersData);
    }, []);
    const addPlayerHandler = props.addPlayer;
    return (
        <div className="px-5 border-right">
             {
                 cricketers.map(player => <Cricketer key={player.id} addPlayerHandler={addPlayerHandler} cricketers={player}></Cricketer>)
             }
        </div>
    );
};

const Cricketer = (props) => {
    const {name, born, role, country, salary, photo} = props.cricketers;
    const addPlayerHandler = props.addPlayerHandler;
    return (
        <div className="row p-5 my-4 shadow">
             <div className="col-4">
                <img src={photo} alt={name}/>
            </div> 
             <div className="col-8">
                <h3>Name: {name}</h3>
                <p>Born: {born}</p>
                <p>Role Play: {role}</p>
                <p>Country: {country}</p>
                <p>Salary: {salary} &#2547; </p>
                <button onClick={() => addPlayerHandler(props.cricketers)} className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div> 
        </div> 
    );
}
export default Cricketers;