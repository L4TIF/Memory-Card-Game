import { useState } from "react";
import fetchMultiplePokemon from "./utils/api";
import { useEffect } from "react";

import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";



const App = () => {
  const [data, setData] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickSequence, setClickSequence] = useState([]);

  useEffect(()=>{
    const fetchData =async () =>{
      const totalCards = 12;
      const value = await  fetchMultiplePokemon(totalCards);
      setData( value)
    };
    
    fetchData();
  },[])
  
  if(!data){
    return <h1>Loading...</h1>
  }
  
  const hasDuplicates = (arr) => {
    return arr.every((value, index) => arr.indexOf(value) === index);
  };
  


  const updateScore = (cardId) => {
    // Add cardId to clickSequence
    setClickSequence(prev => {
      const newSequence = [...prev, cardId];
      
      // Check for duplicates and update score
      if (hasDuplicates(newSequence)) {
        setCurrentScore(prev => prev + 1);
        if(currentScore === bestScore)
        setBestScore(prev => prev +1);
      } else {
        setCurrentScore(0);
        setClickSequence([]); // Clear sequence on no match
      }
      
      return newSequence; // Return the updated sequence
    });
  };
  

  return (
    <div> 
      <h1 className="font-extrabold text-center text-red-600 text-2xl md:text-4xl">Pokemon Memory Game

      <svg className="w-14 md:w-28 p-0 inline-block " xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
	<path d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
		fill="#f00" stroke="#222"
	></path>
	<circle
		cx="50"
		cy="50"
		r="5"
		fill="#222" stroke="#222"
	></circle>
	<path d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
		fill="#fff" stroke="#222"
	></path>
</svg>


      </h1>
      <Scoreboard currentScore={currentScore} setBestScore={setBestScore} setCurrentScore={setCurrentScore} bestScore={bestScore} />
      <Gameboard updateScore={updateScore} dataArray={data}/> 
      </div>
  )
}

export default App