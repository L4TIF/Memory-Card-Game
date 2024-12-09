import { useState } from "react"
import Card from "./Card"


const Gameboard = ({dataArray,updateScore}) => {
    const [sortdata, setSortData] = useState(dataArray);
    const handleClick =(pokemonId)=> {
        const newArray = [...sortdata];
         newArray.sort(()=>Math.random() - 0.5)
       setSortData(newArray)
       updateScore(pokemonId);
    }


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {sortdata.map((pokemon)=>{
         return  <Card handleClick={()=> handleClick(pokemon.id)}   pokemonData={pokemon} key={pokemon.name} />
        }
        )}
    </div>
  )
}

export default Gameboard