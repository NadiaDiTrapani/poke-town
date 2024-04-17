import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/homePage';
import Pokedex from './pages/pokedex/pokedex';
import Header from './components/Header/header';
import PalletTownPage from './pages/TownPage/palletTownPage';
import ViridianCityPage from './pages/TownPage/viridianCity';
import PewterCityPage from './pages/TownPage/pewterCity';
import CeruleanCityPage from './pages/TownPage/ceruleanCity';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pallettown' element={<PalletTownPage/>}/>
          <Route path='/viridiancity' element={<ViridianCityPage/>}/>
          <Route path='/pewtercity' element={<PewterCityPage/>}/>
          <Route path='/ceruleancity' element={<CeruleanCityPage/>}/>
          <Route path='*' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
