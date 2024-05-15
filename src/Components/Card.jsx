import React from "react";

const Card=({pokemon,loading, infoPokemon})=>{
    return(
        <>
        {
            loading ? <h1> Loading...</h1>:pokemon.map((item)=>{
                return(
                    <>
                        <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                      