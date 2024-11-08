
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
