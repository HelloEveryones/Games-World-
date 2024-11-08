
import { useEffect, useState } from 'react'
import gamesApi from "../apiServices/gamesApi";

export function useGetAllGames(){
    const [ games, setGames]=useState([])

    useEffect(()=>{
        (async()=>{
            const result = await gamesApi.getAll()
    
            setGames(result);
        })();
    },[]);

    return [games, setGames]
}

export function useGetOneGames(gameId){
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
          const result = await gamesApi.getOne(gameId);
          setGame(result);
        })();
      }, []);
      
      return[
game,
setGame,
      ];
}