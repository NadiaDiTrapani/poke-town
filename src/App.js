import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/homePage';
import Pokedex from './pages/pokedex/pokedex';
import Header from './components/Header/header';
import PalletTownPage from './pages/TownPage/palletTownPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pallettown' element={<PalletTownPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
