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
          <div key={game.id} className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center transition duration-500 transform hover:-translate-y-1 hover:scale-105">
            <img src={game.thumbnail} alt={game.title} className="rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{game.title}</h2>
              <p className="text-gray-600">{game.short_description}</p>
              <p className="text-gray-600"><strong>Platform:</strong> {game.platform}</p>
              <p className="text-gray-600"><strong>Genre:</strong> {game.genre}</p>
              <p className="text-gray-600"><strong>Publisher:</strong> {game.publisher}</p>
              <p className="text-gray-600"><strong>Developer:</strong> {game.developer}</p>
              <p className="text-gray-600"><strong>Release Date:</strong> {game.release_date}</p>
              <a href={game.game_url} target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md block mt-4 hover:bg-blue-600">Play Game</a>
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
