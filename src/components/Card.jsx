

const Card = ({pokemonData,handleClick}) => {
  return (
    <div onClick={handleClick} className="w-fit m-5 bg-slate-300  rounded-md cursor-pointer hover:scale-110 ease-in duration-150">
      <img className="object-cover" src={pokemonData.image} alt="" />
      <p className="text-center text-2xl font-bold">{pokemonData.name}</p>
    </div>
  )
}

export default Card