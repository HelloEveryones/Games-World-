import { useEffect, useState } from 'react'
import * as gamesApi from '../../apiServices/gamesApi'
import GameListItem from './gameListItem/GameListItem';

export default function GameList(){
    const [ games, setGames]= useState([])

useEffect(()=>{
gamesApi.getAll()
.then (result => setGames(result));
},[])


    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/*<!-- Display div: with information about every game (if any) -->*/}
{games.length > 0}
? {games.map(game=><GameListItem key={game._id} {...game}/>)}
: <h3 className="no-articles">No added games yet</h3>
        </section>
    )
}
        

            {/*<!-- Display paragraph: If there is no games  -->*/}
            