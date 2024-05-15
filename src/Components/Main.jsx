import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokemon from "./Pokemon";
import axios from "axios";

const Main=()=>{

    const [pokeData, setPokeData]=useState([]);
    const [loading,setLoding] = useState(true);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async()=>{
        setLoding(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoding(false);

    }

    const getPokemon= async(res)=>{
        const uniqueUrls = new Set(res.map(item => item.url)); // Create a Set to store unique URLs
        const uniquePokemon = await Promise.all([...uniqueUrls].map(async (url) => {
            const result = await axios.get(url);
            return result.data;
        }));

        setPokeData(uniquePokemon.sort((a, b) => a.id - b.id));
    }
    useEffect(()=>{
        pokeFun();
    },[url])

    return(
        <>
            <div className="component">
                <div className="lcomponent">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>

                    <div className="btn-sec">
                        <div className="btn" onClick={()=>{setUrl(prevUrl)}}> Prev </div>
                        <div className="btn" onClick={()=>{setUrl(nextUrl)}}> Next </div>
                    </div>
                </div>
                <div className="rcomponent">
                    <Pokemon data={pokeDex}/>
                </div>
            </div>
        </>
    )
}

export default Main;