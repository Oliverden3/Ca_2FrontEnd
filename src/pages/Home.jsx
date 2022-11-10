import React from 'react';
import {useEffect,useState} from "react";

function Home(props) {
const [intiailState, setIntiailState] = useState({});

useEffect(() => {
    fetch("http://localhost:8080/ca2_backend_war_exploded/api/info/all").then(res =>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonResponse => setIntiailState(jsonResponse))

}, [])

    console.log(intiailState)
    return (
        <div>
            {intiailState.length > 0 && intiailState.map((e,i) => <li key={i}>{e}</li>)}
            <h3>Homepage</h3>
        </div>
    );
}

export default Home;
