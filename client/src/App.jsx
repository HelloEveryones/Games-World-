import {Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import HomePage from './components/homePage/HomePage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import GameList from './components/gameList/GameList';
import GameCreate from './components/gameCreate/GameCreate';
import GameDetails from './components/gameDetails/GameDetails';

function App() {
  
  return (
    <div id="box">
      <Header/>

      <main id="main-content">
<Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register />} />
     <Route path='/games' element={<GameList />} />
     <Route path='/games/:gameId/details' element={<GameDetails />} />
     <Route path='/games/create' element={<GameCreate />} />
</Routes>
        </main>

      </div>
  )
}

export default App
