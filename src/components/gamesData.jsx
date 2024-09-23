// react component to fetch games from "https://www.freetogame.com/api/games", each game displayed in card with play button

import {useState, useEffect} from 'react'

function Games() {

    //fetch data from api and store in games variable
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch("https://www.freetogame.com/api/games")
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {games.map(game => (
        <div className="bg-zinc-500 p-4 rounded-lg">
          <img src={game.thumbnail} alt={game.title} className="w-full h-48 object-cover rounded-lg"/>
          <h2 className="text-2xl font-bold mt-4">{game.title}</h2>
          <p className="text-gray-400 mt-2">{game.short_description}</p>
          <a href={game.game_url} target="_blank" rel="noreferrer" className="bg-zinc-700 text-white px-4 py-2 mt-4 rounded-lg inline-block">Play</a>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Games




