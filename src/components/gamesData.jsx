import { useState, useEffect } from 'react';

function Games() {
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState(21);

  useEffect(() => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2c90e40385msh28f3f574a635aaep172a5ejsn991fe4b9e19b"
      }
    })
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  const loadMoreGames = () => {
    setVisibleGames(prevVisibleGames => prevVisibleGames + 20);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 my-4 gap-6 p-4 relative px-8">
        {games.slice(0, visibleGames).map((game) => (
          <div key={game.id} className="bg-gray-100 bg-opacity-10  text-white rounded-lg shadow-md  hover:shadow-lg flex flex-col pt-3 items-center justify-center transition duration-500 transform hover:-translate-y-1 hover:scale-[1.016]">
            <img src={game.thumbnail} alt={game.title} className="w-[90%] h-50 rounded-lg " /> 
            <div className="p-4 text-white ">
              <h2 className="text-xl font-bold">{game.title}</h2>
              <p >{game.short_description}</p>
              <p ><strong>Platform:</strong> {game.platform}</p>
              <p ><strong>Genre:</strong> {game.genre}</p>
              <p ><strong>Publisher:</strong> {game.publisher}</p>
              <p ><strong>Developer:</strong> {game.developer}</p>
              <p ><strong>Release Date:</strong> {game.release_date}</p>
              <a href={game.game_url} target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md block mt-4 hover:bg-blue-600 text-center">Download from official site</a>
              <a href={`https://www.chikiigame.com/m/chikiiwebprod/index.html#/GameLibrary?search=${game.title}`} target="_blank" rel="noreferrer" className="text-center bg-blue-500 text-white px-4 py-2 rounded-md block mt-4 hover:bg-blue-600">Play on cloud</a>
            </div>
          </div>
        ))}
      </div>
      {visibleGames < games.length && (
        <div className="flex justify-center my-4">
          <button onClick={loadMoreGames} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default Games;
