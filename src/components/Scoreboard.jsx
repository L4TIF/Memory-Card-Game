

const Scoreboard = ({currentScore,setCurrentScore, bestScore, setBestScore}) => {
  return (
    <div className="text-center">
       <div className="font-bold text-2xl">Score: {currentScore}</div>
        <div className={`inline-block font-bold text-2xl ${(currentScore  > bestScore - 1) && bestScore !== 0 && `text-red-500 scale-105 duration-75  animate-pulse`}`} >Best Score: {bestScore}</div>
    </div>
  )
}

export default Scoreboard