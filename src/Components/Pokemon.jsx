import React from "react";

const Pokemon=({data})=>{
    console.log(data)
    return(
        <>
            {
                (!data)?"":(
                    <>
                    <div className="pokemoninfo">
                        <h1>
                            {data.species.name}
                        </h1>
                        <img src={data.sprites.front_default} alt=""/>
                        <div className="abilities">
                            {
                                data.abilities.map(poke =>{
                                    return(
                                        <>
                                        <div className="group">
                                            <h2>
                                                {poke.ability.name}
                                            </h2>
                                        </div>
                                        </>
                                    )
                            })}
                        </div>
                        <div className="base-stat">
                            {data.stats.map(poke => {
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })}
                            
                        </div>
                    </div>
                    </>
                )
            }
            
        </>
    )
}

export default Pokemon;